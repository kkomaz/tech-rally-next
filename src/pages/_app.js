/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import HeaderNav from 'components/HeaderNav';
import './_app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thoughts!</title>
      </Head>
      <HeaderNav />
      <div className="body">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
