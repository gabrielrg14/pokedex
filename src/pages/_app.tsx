import type { AppProps } from "next/app"

import { Sprite, STORAGE_KEY, useStore } from "store"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import GoogleAnalytics from "components/Analytics"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

import GlobalStyle from "styles/global"
import Layout from "components/Layout"
import NextNProgress from "nextjs-progressbar"
import { useEffect } from "react"

const App = ({ Component, pageProps }: AppProps) => {
    const { setSprite } = useStore()

    useEffect(() => {
        const spriteStorage = localStorage.getItem(STORAGE_KEY)
        if (spriteStorage) setSprite(spriteStorage as Sprite)
    }, [setSprite])

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
