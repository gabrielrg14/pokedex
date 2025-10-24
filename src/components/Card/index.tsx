import { useState, useCallback, useEffect, useMemo } from "react"

import * as S from "./styles"
import { IPokemon } from "interfaces"
import { PokemonNumber, RowTypes } from "components"
import { PokedexService } from "services"
import { formatName } from "utils"
import { SpriteVersion, useListFilterStore, useSpriteMenuStore } from "store"

type CardProps = {
    pokemon: IPokemon
}

export const Card = ({ pokemon }: CardProps) => {
    const [isLoadingPokemon, setIsLoadingPokemon] = useState<boolean>(true)
    const [pokemonData, setPokemonData] = useState<IPokemon>()

    const getPokemonData = useCallback(async () => {
        setIsLoadingPokemon(true)
        await PokedexService.getPokemonByQuery(pokemon?.name)
            .then((data) => setPokemonData(data))
            .finally(() => setIsLoadingPokemon(false))
    }, [pokemon?.name])

    useEffect(() => {
        getPokemonData()
    }, [getPokemonData])

    const { sprite } = useSpriteMenuStore()
    const { setScrollFilter } = useListFilterStore()

    const pokemonName = useMemo(
        () => formatName(pokemon?.name),
        [pokemon?.name]
    )
    const pokemonNumber = useMemo(() => pokemonData?.id, [pokemonData?.id])
    const pokemonImage = useMemo(() => {
        if (!sprite.loading)
            return sprite.version === SpriteVersion.pixelated
                ? pokemonData?.sprites?.[`${sprite.position}_${sprite.type}`]
                : pokemonData?.sprites?.other?.["official-artwork"]?.[
                      `${sprite.position}_${sprite.type}`
                  ]
    }, [sprite, pokemonData?.sprites])

    const setPageScroll = () => setScrollFilter(window.pageYOffset)

    const PokemonImageFallback = () => (
        <S.PokemonImage
            src="/images/types/all.svg"
            width={128}
            height={128}
            alt={`${pokemonName} fallback`}
            priority
            unoptimized
        />
    )

    return (
        <S.CardLink
            href={`/pokemon/${pokemon?.name}`}
            aria-label={pokemonName}
            onClick={setPageScroll}
        >
            {isLoadingPokemon ? (
                <S.PokemonLoading>
                    <PokemonImageFallback />
                </S.PokemonLoading>
            ) : (
                <S.CardBody>
                    {pokemonImage ? (
                        <S.PokemonImage
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
                    ) : (
                        <PokemonImageFallback />
                    )}

                    <S.CardBottom>
                        <S.PokemonInfos>
                            <PokemonNumber number={pokemonNumber} />
                            <S.PokemonName>{pokemonName}</S.PokemonName>
                        </S.PokemonInfos>

                        <RowTypes types={pokemonData?.types} />
                    </S.CardBottom>
                </S.CardBody>
            )}
        </S.CardLink>
    )
}
