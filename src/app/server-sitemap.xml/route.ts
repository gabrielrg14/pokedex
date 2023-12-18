import { getServerSideSitemap, ISitemapField } from "next-sitemap"

import { API_URL } from "utils/api"

type PokemonResult = {
    name: string
    url: string
}

type Results = {
    results: PokemonResult[]
}

export async function GET() {
    const resp = await fetch(`${API_URL}/pokemon?limit=100000&offset=0`)
    const { results }: Results = await resp.json()

    const fields: ISitemapField[] = results.map(({ name }) => ({
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/pokemon/${name}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7
    }))

    return getServerSideSitemap(fields)
}
