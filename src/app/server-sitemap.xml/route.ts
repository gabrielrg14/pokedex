import { getServerSideSitemap, ISitemapField } from "next-sitemap"

import { PokedexService } from "services"

export async function GET() {
    const pokemons = await PokedexService.getPokemonsWithPagination(100000, 0)

    const fields: ISitemapField[] = pokemons.map(({ name }) => ({
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/pokemon/${name}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7
    }))

    return getServerSideSitemap(fields)
}
