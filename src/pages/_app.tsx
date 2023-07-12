import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import SEO from "../../next-seo.config";

import GoogleAnalytics from "src/components/Analytics";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import GlobalStyle from "src/common/styles/global";
import Layout from "src/components/Layout/Layout";
import NextNProgress from 'nextjs-progressbar'

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <GoogleAnalytics />
            <VercelAnalytics />
            <GlobalStyle />
            <Layout>
                <NextNProgress
                    color="#FBC418"
                    height={5}
                    options={{ showSpinner: false }}
                />
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App;
