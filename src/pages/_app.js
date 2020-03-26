import App from 'next/app'
import Head from 'next/head';
import './App.scss';

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
