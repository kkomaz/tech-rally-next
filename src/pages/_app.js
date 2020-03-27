/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import './_app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thoughts!</title>
      </Head>
      <div className="body">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
