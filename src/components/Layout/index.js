import React from 'react';
import Head from 'next/head';

import HeaderNav from 'components/HeaderNav';
import { UserProvider } from 'utils/user';

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
      <Head>
        <title>Thoughts!</title>
      </Head>

    <HeaderNav />

    <main>
      <div>{children}</div>
    </main>
  </UserProvider>
);

export default Layout;
