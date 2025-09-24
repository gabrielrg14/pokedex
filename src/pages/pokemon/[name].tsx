import { GetStaticPaths, GetStaticProps } from "next"

import { useRouter } from "next/router"
import { IPokemon } from "interfaces"
import { Loading } from "components"
import { PokedexService } from "services"
import { PokemonTemplate } from "templates"
import { getColorsByPokemonType } from "utils"
import { useStore } from "store"

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
    const pokemon = await PokedexService.getPokemonByQuery(
        params?.name as string
    )

    if (!pokemon) return { notFound: true }

    return {
        revalidate: 60,
        props: { pokemon }
    }
}

type PokemonPageProps = {
    pokemon: IPokemon
}

const PokemonPage = ({ pokemon }: PokemonPageProps) => {
    const router = useRouter()
    const { sprite } = useStore()

    if (router && router.isFallback) return <Loading />

    let background = getColorsByPokemonType(
        pokemon.types[0].type.name
    ).background

    if (pokemon.types.length >= 2) {
        // Pokémon with 2 or more types
        background = `linear-gradient(
            to right,
            ${
                getColorsByPokemonType(pokemon.types[0].type.name)
                    .backgroundColor
            } 50%,
            ${
                getColorsByPokemonType(pokemon.types[1].type.name)
                    .backgroundColor
            } 50%
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
