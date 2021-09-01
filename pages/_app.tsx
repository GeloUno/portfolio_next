import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Navbar from '../components/navbar/navbar';
import { Fragment } from 'react';
import LayoutPage from '../layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  )
}

export default MyApp
