import { useMemo } from "react"

import * as S from "./styles"
import { PokemonNumber, RowTypes } from "components"
import { formatName } from "utils"
import { SpriteVersion, useListFilterStore, useSpriteMenuStore } from "store"
import { pokedexService } from "services"
import { useQuery } from "@tanstack/react-query"

type CardProps = {
    name: string
}

export const Card = ({ name }: CardProps) => {
    const { sprite } = useSpriteMenuStore()
    const { setScrollFilter } = useListFilterStore()

    const { data: pokemon, isLoading: isLoadingPokemon } = useQuery({
        queryKey: ["getPokemon", name],
        queryFn: () => pokedexService.getPokemonByQuery(name)
    })

    const pokemonName = useMemo(
        () => formatName(pokemon?.name),
        [pokemon?.name]
    )
    const pokemonNumber = useMemo(() => pokemon?.id, [pokemon?.id])
    const pokemonImage = useMemo(() => {
        if (!sprite.loading)
            return sprite.version === SpriteVersion.pixelated
                ? pokemon?.sprites?.[`${sprite.position}_${sprite.type}`]
                : pokemon?.sprites?.other?.["official-artwork"]?.[
                      `${sprite.position}_${sprite.type}`
                  ]
    }, [sprite, pokemon?.sprites])

    const setPageScroll = () => setScrollFilter(window.pageYOffset)

    const PokemonImageFallback = () => (
        <S.PokemonImage
            src="/images/types/all.svg"
            width={128}
            height={128}
            alt={`${pokemonName || name} fallback`}
            priority
            unoptimized
        />
    )

    if (isLoadingPokemon)
        return (
            <S.CardLinkSkeleton
                as="div"
                onClick={(event) => event.preventDefault()}
            >
                <S.CardBodySkeleton>
                    <PokemonImageFallback />
                </S.CardBodySkeleton>
            </S.CardLinkSkeleton>
        )

    return (
        <S.CardLink
            href={`/pokemon/${pokemon?.name}`}
            aria-label={pokemonName}
            onClick={setPageScroll}
        >
            <S.CardBody>
                {pokemonImage ? (
                    <S.PokemonImage
                        src={pokemonImage}
                        width={156}
                        height={156}
                        alt={pokemonName}
                        imageRendering={
                            sprite.version === SpriteVersion.pixelated
                                ? "pixelated"
                                : "unset"
                        }
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
                    <RowTypes types={pokemon?.types} />
                </S.CardBottom>
            </S.CardBody>
        </S.CardLink>
    )
}
