import type { AppProps } from "next/app"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import { GlobalStyle } from "styles"
import { Analytics as GoogleAnalytics, Layout } from "components"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
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
                    color="var(--primary-color)"
                    height={5}
                    options={{ showSpinner: false }}
                />
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App
