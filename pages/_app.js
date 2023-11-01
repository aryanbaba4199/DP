import '../styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { Head } from 'next/document';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9500273332762663"
          crossorigin="anonymous"
        />
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
