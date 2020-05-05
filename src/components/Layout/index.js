/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import HeaderNav from 'components/HeaderNav';
import { UserProvider } from 'utils/user';

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
      <Head>
        <title>techrally.me</title>
        <meta name="twitter:image" content="https://tech-rally-test-bucket.s3.us-east-2.amazonaws.com/branding.png" />
        <meta name="twitter:image:width" content="800" />
        <meta name="twitter:image:height" content="600" />
      </Head>

    <HeaderNav />

    <main>
      <div>{children}</div>
    </main>
  </UserProvider>
);

export default Layout;
