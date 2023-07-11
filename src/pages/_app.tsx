import type { AppProps } from 'next/app';

import GoogleAnalytics from "src/components/Analytics";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import GlobalStyle from "src/common/styles/global";
import Layout from "src/components/Layout/Layout";
import NextNProgress from 'nextjs-progressbar'

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <>
            <GoogleAnalytics />
            <VercelAnalytics />
            <GlobalStyle />
            <Layout>
                <NextNProgress color="#FBC418" />
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App;
