import { useState, useCallback, useEffect, useMemo } from "react"

import * as S from "./styles"
import Image from "next/image"
import { IPokemon } from "interfaces"
import { PokemonNumber, RowTypes } from "components"
import { PokedexService } from "services"
import { formatName } from "utils"
import { SpriteVersion, useStore } from "store"

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

    const pokemonName = useMemo(() => formatName(pokemon?.name), [pokemon])
    const pokemonNumber = useMemo(() => pokemonData?.id, [pokemonData])
    const pokemonImage = useMemo(
        () =>
            sprite.version === SpriteVersion.pixelated
                ? pokemonData?.sprites?.[`${sprite.position}_${sprite.type}`]
                : pokemonData?.sprites?.other?.["official-artwork"]?.[
                      `${sprite.position}_${sprite.type}`
                  ],
        [sprite, pokemonData]
    )

    return (
        <S.CardLink href={`/pokemon/${pokemon?.name}`} aria-label={pokemonName}>
            {pokemonImage && (
                <Image
                    src={pokemonImage}
                    width={156}
                    height={156}
                    alt={pokemonName}
                    style={{
                        imageRendering:
                            sprite.version === SpriteVersion.pixelated
                                ? "pixelated"
                                : "unset"
                    }}
                    priority
                    unoptimized
                />
            )}

            <S.PokemonInfos>
                <PokemonNumber number={pokemonNumber} />
                <S.PokemonName>{pokemonName}</S.PokemonName>
            </S.PokemonInfos>

            <RowTypes types={pokemonData?.types} />
        </S.CardLink>
    )
}
