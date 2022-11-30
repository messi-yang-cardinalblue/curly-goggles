import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GuessingNodeChart from '@/components/chart/GuessingNodeChart';
import GuessingContext from '@/contexts/GuessingContext';
import useWindowSize from '@/hooks/useWindowSize';
import { getInitialLocale } from '@/utils/i18n';

const ResultPage: NextPage = function ResultPage() {
  const router = useRouter();
  const rootGuessingId = router.query.id;
  const windowSize = useWindowSize();
  const isMobileSize = windowSize.width < 500;
  const { guessingNode, queryGuessingNode } = useContext(GuessingContext);

  useEffect(() => {
    if (!!rootGuessingId && typeof rootGuessingId === 'string') {
      queryGuessingNode(rootGuessingId);
    }
  }, [rootGuessingId]);

  return isMobileSize ? (
    <main className="overflow-auto min-h-screen p-4 bg-[#1E1E1E]">
      {guessingNode && <GuessingNodeChart guessingNode={guessingNode} />}
    </main>
  ) : (
    <main className="overflow-auto min-h-screen p-4 bg-[#1E1E1E]">
      {guessingNode && <GuessingNodeChart guessingNode={guessingNode} />}
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { id: 'a' } }],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(getInitialLocale(locale), ['index'])),
  },
});

export default ResultPage;
