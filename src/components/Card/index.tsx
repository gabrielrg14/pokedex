import { useState, useCallback, useEffect } from "react"

import * as S from "./styles"
import Image from "next/image"
import { IPokemon } from "interfaces"
import { PokemonNumber, RowTypes } from "components"
import { PokedexService } from "services"
import { formatName } from "utils"
import { useStore } from "store"

type CardProps = {
    pokemon: IPokemon
}

export const Card = ({ pokemon }: CardProps) => {
    const [pokemonData, setPokemonData] = useState<IPokemon>()

    const getPokemonData = useCallback(async () => {
        await PokedexService.getPokemonByQuery(pokemon?.name).then((data) =>
            setPokemonData(data)
        )
    }, [pokemon])

    useEffect(() => {
        getPokemonData()
    }, [getPokemonData])

    const { sprite } = useStore()

    return (
        <S.CardLink
            href={`/pokemon/${pokemon.name}`}
            aria-label={formatName(pokemon.name)}
        >
            {pokemonData?.sprites?.other["official-artwork"]?.[sprite] && (
                <Image
                    src={pokemonData.sprites.other["official-artwork"][sprite]}
                    width={156}
                    height={156}
                    alt={formatName(pokemon.name)}
                    priority
                    unoptimized
                />
            )}

            <S.PokemonInfos>
                <PokemonNumber number={pokemonData?.id} />
                <S.PokemonName>{formatName(pokemon.name)}</S.PokemonName>
            </S.PokemonInfos>

            <RowTypes types={pokemonData?.types} />
        </S.CardLink>
    )
}
