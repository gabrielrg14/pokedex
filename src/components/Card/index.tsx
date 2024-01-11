import { useState, useCallback, useEffect } from "react"

import * as S from "./styles"
import { Pokemon } from "interfaces"
import Image from "next/image"
import { PokemonNumber, RowTypes } from "components"
import { API_URL, formatPokemonName } from "utils"
import { useStore } from "store"

type CardProps = {
    pokemon: Pokemon
}

export const Card = ({ pokemon }: CardProps) => {
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
