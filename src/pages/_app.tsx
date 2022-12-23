import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { Header } from '../components/Header';

import '../styles/global.scss';
import { PrismicProvider } from '@prismicio/react';
import { client } from '../services/prismic';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PrismicProvider client={client}>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </PrismicProvider>
  );
}
