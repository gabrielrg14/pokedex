import { GetStaticPaths, GetStaticProps } from "next"
import { useCallback, useEffect, useMemo } from "react"

import { useRouter } from "next/router"
import { IPokemon, IPokemonWithSpecies } from "interfaces"
import { Loading } from "components"
import { pokedexService } from "services"
import { PokemonTemplate } from "templates"
import { formatName, getColorsByType } from "utils"
import { SpriteVersion, useSpriteMenuStore } from "store"

export const getStaticPaths: GetStaticPaths = async () => {
    const pokemons = await pokedexService.getPokemonWithPagination(3000) // Pre-render all Pokémons

    const pathsByName = pokemons.map((pokemon: IPokemon) => {
        return {
            params: { name: pokemon.name }
        }
    })

    const pathsByNumbers = pokemons.map((pokemon: IPokemon) => {
        return {
            params: { name: String(pokemon.id) }
        }
    })

    return {
        paths: [...pathsByName, ...pathsByNumbers],
        fallback: "blocking"
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

    const pokemonName = useMemo(
        () => formatName(pokemon?.name),
        [pokemon?.name]
    )
    const pokemonNumber = useMemo(() => pokemon?.id, [pokemon?.id])
    const pokemonCry = useMemo(() => {
        if (!sprite.loading)
            return sprite.version === SpriteVersion.pixelated &&
                pokemon?.cries?.legacy
                ? pokemon?.cries?.legacy
                : pokemon?.cries?.latest
    }, [sprite, pokemon?.cries])
    const pokemonImage = useMemo(() => {
        if (!sprite.loading)
            return sprite.version === SpriteVersion.pixelated
                ? pokemon?.sprites?.[`${sprite.position}_${sprite.type}`]
                : pokemon?.sprites?.other?.["official-artwork"]?.[
                      `${sprite.position}_${sprite.type}`
                  ]
    }, [sprite, pokemon?.sprites])

    const playPokemonCry = useCallback(() => {
        const cryAudioElement = document.getElementById(
            `pokemon-cry-${pokemonNumber}`
        ) as HTMLAudioElement
        if (cryAudioElement) {
            cryAudioElement.volume = 0.05
            cryAudioElement.load()
        }
    }, [pokemonNumber])

    useEffect(() => {
        playPokemonCry()
    }, [playPokemonCry])

    if (router && router.isFallback) return <Loading />

    let background = getColorsByType(
        pokemon?.types?.[0]?.type?.name
    )?.background

    if (pokemon?.types?.length >= 2) {
        // Pokémon with 2 or more types
        background = `linear-gradient(
            to right,
            ${getColorsByType(pokemon.types[0].type.name).backgroundColor} 50%,
            ${getColorsByType(pokemon.types[1].type.name).backgroundColor} 50%
        )`
    }

    return (
        <PokemonTemplate
            pokemonName={pokemonName}
            pokemonNumber={pokemonNumber}
            pokemonCry={pokemonCry}
            pokemonImage={pokemonImage}
            pokemonData={pokemon}
            playPokemonCry={playPokemonCry}
            background={background}
            sprite={sprite}
        />
    )
}

export default PokemonPage
