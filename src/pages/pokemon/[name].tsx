import { GetStaticPaths, GetStaticProps } from "next"

import { PokemonWithSpecies } from "interfaces"
import { pokedexService } from "services"
import { PokemonTemplate } from "templates"

export const getStaticPaths: GetStaticPaths = async () => {
    const pokemons = await pokedexService.getPokemonWithPagination(10000) // Pre-render all Pokémons

    const pathsByName = pokemons.map(({ name }) => {
        return {
            params: { name }
        }
    })

    const pathsByNumber = await Promise.all(
        pokemons.map(async ({ name }) => {
            const pokemon = await pokedexService.getPokemonByQuery(name)
            return {
                params: { name: String(pokemon.id) }
            }
        })
    )

    return {
        paths: [...pathsByName, ...pathsByNumber],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const pokemonData = await pokedexService.getPokemonByQuery(
            params?.name as string
        )

        if (!params?.name || !pokemonData) return { notFound: true }

        const pokemonSpecies = await pokedexService.getPokemonSpeciesByName(
            pokemonData?.species?.name
        )

        const pokemon = { ...pokemonSpecies, ...pokemonData }

        return {
            revalidate: 60,
            props: { pokemonData: pokemon }
        }
    } catch {
        return { notFound: true }
    }
}

type PokemonPageProps = {
    pokemonData: PokemonWithSpecies
}

const PokemonPage = ({ pokemonData }: PokemonPageProps) => {
    return <PokemonTemplate pokemonData={pokemonData} />
}

export default PokemonPage
