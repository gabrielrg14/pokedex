import { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
    defaultTitle: "Pokédex",
    themeColor: "#FBC418",
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon.ico"
        },
        {
            rel: "shortcut icon",
            href: "images/icon/icon-512.png",
            sizes: "512x512"
        },
        {
            rel: "apple-touch-icon",
            href: "images/icon/icon-512.png",
            sizes: "512x512"
        },
        {
            rel: "manifest",
            href: "/manifest.json"
        }
    ],
    additionalMetaTags: [
        {
            name: "google-site-verification",
            content: "11r8K6MLmUAgq8eTWLXk49GhEiZuybZx1h8kIyO6PX8"
        },
        {
            name: "google",
            content: "notranslate"
        }
    ],
    openGraph: {
        type: "website",
        locale: "en",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
        siteName: "Pokédex"
    }
}

export default config
