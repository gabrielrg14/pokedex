import type { AppProps } from 'next/app';

import GoogleAnalytics from "src/components/Analytics";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import GlobalStyle from "src/common/styles/global";
import Layout from "src/components/Layout/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <GoogleAnalytics />
            <VercelAnalytics />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App;
