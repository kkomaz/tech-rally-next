/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import HeaderNav from 'components/HeaderNav';
import { UserProvider } from 'utils/user';

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
      <Head>
        <title>techrally.me</title>
      </Head>

    <HeaderNav />

    <main>
      <div>{children}</div>
    </main>
  </UserProvider>
);

export default Layout;
