/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app'
import Head from 'next/head';
import './_app.scss';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          <title>Thoughts!</title>
        </Head>
        <div className="body">
          <Component {...this.props} />
        </div>
      </>
    );
  }
}

export default MyApp;
