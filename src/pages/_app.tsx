import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { PrismicProvider } from '@prismicio/react';

import { Header } from '../components/Header';

import '../styles/global.scss';
import { getPrismicClient } from '../services/prismic';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const client = getPrismicClient();

  return (
    <SessionProvider session={session}>
      <PrismicProvider client={client}>
        <Header />
        <Component {...pageProps} />
      </PrismicProvider>
    </SessionProvider>
  );
}
