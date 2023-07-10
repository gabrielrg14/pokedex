import Document, { DocumentContext , Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
                })
    
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="images/icon/icon-512.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                    <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet" />
                    <meta name="google-site-verification" content="11r8K6MLmUAgq8eTWLXk49GhEiZuybZx1h8kIyO6PX8" />
                    <meta name="robots" content="index" />
                    <meta name="google" content="notranslate" />
                    <meta name="theme-color" content="#FBC418" />
                    <meta name="keywords" 
                        content="Pokédex, Pokémon, PokéAPI, Project, Frontend, React, Next" 
                    />
                    <meta name="description"
                        content="Pokédex project made in Next.js and powered by PokéAPI"
                    />
                </Head>
                <body>
					<Main />
					<NextScript />
				</body>
            </Html>
        )
    }
}

export default MyDocument;