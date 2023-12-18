import { useState, useCallback, useEffect } from "react"

import * as S from "./styles"
import Image from "next/image"
import PokemonNumber from "components/PokemonNumber"
import RowTypes from "components/RowTypes"

import { API_URL } from "utils/api"
import { Pokemon, formatPokemonName } from "utils/pokemon"
import { useStore } from "store"

type CardProps = {
    pokemon: Pokemon
}

const Card = ({ pokemon }: CardProps) => {
    const [pokemonData, setPokemonData] = useState<Pokemon>()

    const getPokemonData = useCallback(async () => {
        const res = await fetch(`${API_URL}/pokemon/${pokemon?.name}`)
        const data = await res.json()
        setPokemonData(data)
    }, [pokemon])

    useEffect(() => {
        getPokemonData()
    }, [getPokemonData])

    const { sprite } = useStore()

    return (
        <S.CardLink href={`/pokemon/${pokemon.name}`} aria-label={pokemon.name}>
            {pokemonData?.sprites?.other["official-artwork"]?.[sprite] && (
                <Image
                    src={pokemonData?.sprites.other["official-artwork"][sprite]}
                    width={156}
                    height={156}
                    alt={pokemon.name}
                    priority
                    unoptimized
                />
            )}

            <S.PokemonInfos>
                <PokemonNumber number={pokemonData?.id} />
                <S.PokemonName>{formatPokemonName(pokemon.name)}</S.PokemonName>
            </S.PokemonInfos>

            <RowTypes types={pokemonData?.types} />
        </S.CardLink>
    )
}

export default Card
