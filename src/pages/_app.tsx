import type { AppProps } from 'next/app';

import GlobalStyle from "src/styles/global";
import Layout from "src/components/Layout/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App;
