// src/pages/app.js

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Link to your favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
