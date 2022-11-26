import { useCallback, useContext, useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Text from '@/components/text/Text';
import Input from '@/components/input/Input';
import Image from '@/components/image/Image';
import Button from '@/components/button/Button';
import GuessingContext from '@/contexts/GuessingContext';
import useWindowSize from '@/hooks/useWindowSize';
import { getInitialLocale } from '@/utils/i18n';

const Landing: NextPage = function Landing() {
  const windowSize = useWindowSize();
  const isMobileSize = windowSize.width < 500;
  const { createGuessing } = useContext(GuessingContext);

  const [author, setAuthor] = useState('');
  const handleAuthorInput = (newAuthor: string) => {
    setAuthor(newAuthor);
  };

  const [prompt, setPrompt] = useState('');
  const handlePromptInput = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  const handleSubmitClick = useCallback(() => {
    createGuessing(author, prompt, null);
  }, [author, prompt]);

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
        <div className="flex flex-col">
          <Text copy="How could we address you?" color="white" size={16} weight="bold" />
          <div className="mt-2">
            <Input value={author} placeholder="Mike Mussina" onInput={handleAuthorInput} />
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <Text copy="Tell us what is in your mind" color="white" size={16} weight="bold" />
          <div className="mt-2">
            <Input value={prompt} placeholder="Dwigh Howard is crying on his bed" onInput={handlePromptInput} />
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            width={460}
          />
        </div>
        <div className="mt-10 flex flex-col">
          <Button text="Submit" />
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
        <div className="flex flex-col">
          <Text copy="How could we address you?" color="white" size={28} weight="bold" />
          <div className="mt-2">
            <Input value={author} placeholder="Mike Mussina" onInput={handleAuthorInput} />
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <Text copy="Tell us what is in your mind" color="white" size={28} weight="bold" />
          <div className="mt-2">
            <Input value={prompt} placeholder="Dwigh Howard is crying on his bed" onInput={handlePromptInput} />
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            width={460}
          />
        </div>
        <div className="mt-10 flex flex-col">
          <Button text="Submit" onClick={handleSubmitClick} />
        </div>
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
