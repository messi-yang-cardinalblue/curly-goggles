import '@/styles/tailwind.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider as GuessingProvider } from '@/contexts/GuessingContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GuessingProvider>
      <Component {...pageProps} />
    </GuessingProvider>
  );
}

export default appWithTranslation(MyApp);
