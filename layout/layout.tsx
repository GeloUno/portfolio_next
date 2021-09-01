import { Fragment } from 'react';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';


interface ILayoutPageProps {
    children: React.ReactNode
}
function LayoutPage({ children }: ILayoutPageProps) {
    return (
        <Fragment>
            <Head>
                <title>G.K. Developer</title>
                <meta name='description' content='G.K. Developer, React Developer, Next Developer, Node Developer, friendly developer react, friendly developer next, friendly developer node' />
            </Head>
            <Navbar />
            <main>{children}</main>
        </Fragment>
    );
}

export default LayoutPage;