import type { AppProps } from "next/app"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import { GlobalStyle } from "styles"
import { Analytics as GoogleAnalytics, Layout } from "components"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "providers"
import NextNProgress from "nextjs-progressbar"

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <GoogleAnalytics />
            <VercelAnalytics />
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <NextNProgress
                        color="var(--primary-color)"
                        height={5}
                        options={{ showSpinner: false }}
                    />
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </>
    )
}

export default App
