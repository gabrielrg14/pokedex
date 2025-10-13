import { GetStaticPaths, GetStaticProps } from "next"

import { useRouter } from "next/router"
import { IPokemon, IPokemonWithSpecies } from "interfaces"
import { Loading } from "components"
import { PokedexService } from "services"
import { PokemonTemplate } from "templates"
import { getColorsByType } from "utils"
import { useSpriteMenuStore } from "store"

export const getStaticPaths: GetStaticPaths = async () => {
    const pokemons = await PokedexService.getPokemonsWithPagination(3000) // Pre-render all Pokémons
    const paths = pokemons.map((pokemon: IPokemon) => {
        return {
            params: { name: pokemon.name }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const pokemonData = await PokedexService.getPokemonByQuery(
            params?.name as string
        )

        const pokemonSpecies = await PokedexService.getPokemonSpeciesByUrl(
            pokemonData.species.url
        )

        const pokemon = { ...pokemonSpecies, ...pokemonData }

        return {
            revalidate: 60,
            props: { pokemon }
        }
    } catch {
        return { notFound: true }
    }
}

type PokemonPageProps = {
    pokemon: IPokemonWithSpecies
}

const PokemonPage = ({ pokemon }: PokemonPageProps) => {
    const router = useRouter()
    const { sprite } = useSpriteMenuStore()

    if (router && router.isFallback) return <Loading />

    let background = getColorsByType(pokemon.types[0].type.name).background

    if (pokemon.types.length >= 2) {
        // Pokémon with 2 or more types
        background = `linear-gradient(
            to right,
            ${getColorsByType(pokemon.types[0].type.name).backgroundColor} 50%,
            ${getColorsByType(pokemon.types[1].type.name).backgroundColor} 50%
        )`
    }

    return (
        <PokemonTemplate
            pokemon={pokemon}
            background={background}
            sprite={sprite}
        />
    )
}

export default PokemonPage
