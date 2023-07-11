import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap'

import { API_URL } from "src/common/utils/api";

type PokemonResult = {
    name: string,
    url: string
}

type Results = {
    results: PokemonResult[]
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const resp = await fetch(`${API_URL}/pokemon?limit=100000&offset=0`)
    const { results }: Results = await resp.json()

    const locBase = "https://pokedex-gabrielrg.vercel.app"
    const lastmod = new Date().toISOString()
    const changefreq = "daily"
    const priority = 0.7

    const fields: ISitemapField[] = results.map(({ name }) => ({
        loc: `${locBase}/pokemon/${name}`,
        lastmod, changefreq, priority
    }))

    fields.push(
        {
            loc: `${locBase}/`,
            lastmod, changefreq, priority
        },
        {
            loc: `${locBase}/about`,
            lastmod, changefreq, priority
        },
    )

    return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}