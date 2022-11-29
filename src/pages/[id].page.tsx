import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import QuestionBox from '@/components/box/QuestionBox';
import GuessingSubmitForm from '@/components/form/GuessingSubmitForm';
import GuessingContext from '@/contexts/GuessingContext';
import useWindowSize from '@/hooks/useWindowSize';
import { getInitialLocale } from '@/utils/i18n';

const GuessingPage: NextPage = function GuessingPage() {
  const router = useRouter();
  // @ts-ignore
  const guessingId: string = router.query.id;
  const windowSize = useWindowSize();
  const isMobileSize = windowSize.width < 500;
  const { guessing, queryGuessing, createGuessing } = useContext(GuessingContext);

  useEffect(() => {
    queryGuessing(guessingId);
  }, [guessingId]);

  const [author, setAuthor] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmitClick = useCallback(() => {
    createGuessing(author, prompt, guessingId);
  }, [author, prompt, guessingId]);

  const question = guessing ? `Guess what ${guessing.getAuthor()} is thinking?` : '';
  const authorLabel = 'Your name?';
  const promptLabel = 'Your answer?';

  return isMobileSize ? (
    <main
      className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        width: windowSize.width,
        height: windowSize.height,
        backgroundColor: '#1E1E1E',
      }}
    >
      <div className="w-[90%]">
        {guessing && <QuestionBox question={question} imageUrl={guessing.getImageUrl()} />}
        <div className="mt-15">
          <GuessingSubmitForm
            authorLabel={authorLabel}
            author={author}
            onAuthorInput={setAuthor}
            promptLabel={promptLabel}
            prompt={prompt}
            onPromptInput={setPrompt}
            onSubmitClick={handleSubmitClick}
          />
        </div>
      </div>
    </main>
  ) : (
    <main
      className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        width: windowSize.width,
        height: windowSize.height,
        backgroundColor: '#1E1E1E',
      }}
    >
      <div className="w-[460px]">
        {guessing && <QuestionBox question={question} imageUrl={guessing.getImageUrl()} />}
        <div className="mt-10">
          <GuessingSubmitForm
            authorLabel={authorLabel}
            author={author}
            onAuthorInput={setAuthor}
            promptLabel={promptLabel}
            prompt={prompt}
            onPromptInput={setPrompt}
            onSubmitClick={handleSubmitClick}
          />
        </div>
      </div>
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

export default GuessingPage;
