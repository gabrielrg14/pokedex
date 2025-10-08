import { useEffect } from "react"
import type { AppProps } from "next/app"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import { Sprite, useStore } from "store"
import { SPRITE_STORAGE_KEY } from "common"
import { GlobalStyle } from "styles"
import { Analytics as GoogleAnalytics, Layout } from "components"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import NextNProgress from "nextjs-progressbar"

const App = ({ Component, pageProps }: AppProps) => {
    const { setSprite } = useStore()

    useEffect(() => {
        const spriteStorage = localStorage.getItem(SPRITE_STORAGE_KEY)
        if (spriteStorage) setSprite(JSON.parse(spriteStorage) as Sprite)
    }, [setSprite])

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
