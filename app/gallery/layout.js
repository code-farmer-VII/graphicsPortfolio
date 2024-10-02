import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title || 'My Next.js App'}</title>
        <meta name="description" content="A simple layout example using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className="flex-grow pt-24">
        {children}
      </main>


    </div>
  );
};

export default Layout;
