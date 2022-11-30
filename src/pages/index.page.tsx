import { useCallback, useContext, useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import GuessingSubmitForm from '@/components/form/GuessingSubmitForm';
import OutputGuessingBox from '@/components/box/OutputGuessingBox';
import GuessingContext from '@/contexts/GuessingContext';
import useWindowSize from '@/hooks/useWindowSize';
import { getInitialLocale } from '@/utils/i18n';

const Landing: NextPage = function Landing() {
  const windowSize = useWindowSize();
  const isMobileSize = windowSize.width < 500;
  const { outputGuessing, createGuessing } = useContext(GuessingContext);

  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [author, setAuthor] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmitClick = useCallback(() => {
    setHasSubmitted(true);
    createGuessing(author, prompt, null);
  }, [author, prompt]);

  const authorLabel = 'Your name?';
  const promptLabel = 'What is in your mind?';

  return isMobileSize ? (
    <main
      className="py-10 flex flex-col items-center"
      style={{
        width: windowSize.width,
        height: windowSize.height,
        backgroundColor: '#1E1E1E',
      }}
    >
      <div className="w-[90%]">
        {!outputGuessing && !hasSubmitted && (
          <div className="mb-5">
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
          <div>
            <OutputGuessingBox guessing={outputGuessing} />
          </div>
        )}
      </div>
    </main>
  ) : (
    <main
      className="py-10 flex flex-col items-center"
      style={{
        width: windowSize.width,
        height: windowSize.height,
        backgroundColor: '#1E1E1E',
      }}
    >
      <div className="w-[460px]">
        {!outputGuessing && !hasSubmitted && (
          <div className="mb-5">
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
          <div>
            <OutputGuessingBox guessing={outputGuessing} />
          </div>
        )}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(getInitialLocale(locale), ['index'])),
  },
});

export default Landing;
