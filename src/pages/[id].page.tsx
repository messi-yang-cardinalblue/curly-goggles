import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import QuestionBox from '@/components/box/QuestionBox';
import OutputGuessingBox from '@/components/box/OutputGuessingBox';
import GuessingSubmitForm from '@/components/form/GuessingSubmitForm';
import GuessingContext from '@/contexts/GuessingContext';
import useWindowSize from '@/hooks/useWindowSize';
import { getInitialLocale } from '@/utils/i18n';

const GuessingPage: NextPage = function GuessingPage() {
  const router = useRouter();
  const sourceGuessingId = router.query.id;
  const guessingId = !!sourceGuessingId && typeof sourceGuessingId === 'string' ? sourceGuessingId : null;
  const windowSize = useWindowSize();
  const isMobileSize = windowSize.width < 500;
  const { guessing, outputGuessing, queryGuessing, createGuessing } = useContext(GuessingContext);

  useEffect(() => {
    if (!guessingId) {
      return;
    }
    queryGuessing(guessingId);
  }, [guessingId]);

  const [author, setAuthor] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmitClick = useCallback(() => {
    if (!guessingId) {
      return;
    }
    createGuessing(author, prompt, guessingId);
  }, [author, prompt, guessingId]);

  const authorLabel = 'Your name?';
  const promptLabel = 'Your answer?';

  return isMobileSize ? (
    <main className="py-10 min-h-screen flex flex-col justify-center items-center bg-[#1E1E1E]">
      <div className="w-[90%]">
        {guessing && (
          <div>
            <QuestionBox guessing={guessing} />
            {guessing.isReady() && !outputGuessing && (
              <div className="mt-12">
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
            )}
            {outputGuessing && (
              <div className="mt-5">
                <OutputGuessingBox guessing={outputGuessing} />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  ) : (
    <main className="py-10 min-h-screen flex flex-col justify-center items-center bg-[#1E1E1E]">
      <div className="w-[460px]">
        {guessing && (
          <div>
            <QuestionBox guessing={guessing} />
            {guessing.isReady() && !outputGuessing && (
              <div className="mt-12">
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
            )}
            {outputGuessing && (
              <div className="mt-5">
                <OutputGuessingBox guessing={outputGuessing} />
              </div>
            )}
          </div>
        )}
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
