import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import PokemonTemplate from "templates/Pokemon"
import Loading from "components/Loading"

import { API_URL } from "utils/api"
import { Pokemon } from "utils/pokemon"
import { useStore } from "store"
import { getColorsByPokemonType } from "utils/colorTypes"

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${API_URL}/pokemon?limit=12`) // Pré-render only 12 Pokémons
    const pokemons = await res.json()

    const paths = pokemons.results.map((pokemon: Pokemon) => {
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
    const res = await fetch(`${API_URL}/pokemon/${params?.name}`)
    const pokemon = await res.json()

    if (!pokemon) return { notFound: true }

    return {
        revalidate: 60,
        props: {
            pokemon
        }
    }
}

type PokemonPageProps = {
    pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: PokemonPageProps) => {
    const { sprite } = useStore()

    const router = useRouter()
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

    // Removes abilities that have the same name
    const abilities = pokemon.abilities.map((item) => item.ability.name)
    const filtered = abilities.filter(
        (item, index) => abilities.indexOf(item) === index
    )
    pokemon.abilities = pokemon.abilities.filter(
        (item, index) => filtered.indexOf(item.ability.name) === index
    )

    return (
        <PokemonTemplate
            pokemon={pokemon}
            background={background}
            sprite={sprite}
        />
    )
}

export default PokemonPage
