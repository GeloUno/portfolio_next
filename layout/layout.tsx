import { Fragment } from 'react';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';

interface ILayoutPageProps {
  children: React.ReactNode;
}
function LayoutPage({ children }: ILayoutPageProps) {
  return (
    <Fragment>
      <Head>
        <title>G.K. Developer</title>
        <meta
          name="description"
          content={`I'm Your friendly React.js, Nest.js, Next.js, Node.js developer.`}
        />
        <meta name="author" content="Grzegorz Kędziora" />
        <meta
          name="keywords"
          content="react, next, node, developer, fullstack, web builder,"
        />
      </Head>
      <Navbar />
      <main data-testid="LayoutChildren">{children}</main>
    </Fragment>
  );
}

export default LayoutPage;
