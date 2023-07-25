import type { AppProps } from "next/app"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import GoogleAnalytics from "components/Analytics"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

import GlobalStyle from "styles/global"
import Layout from "components/Layout/Layout"
import NextNProgress from "nextjs-progressbar"

const App = ({ Component, pageProps }: AppProps) => {
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

export default App
