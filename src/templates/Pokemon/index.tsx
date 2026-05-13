import { useMemo } from "react"
import { NextSeo } from "next-seo"

import * as S from "./styles"
import { PokemonWithSpecies } from "interfaces"
import { RowTypes, SpriteFloatingMenu } from "components"
import {
    PokemonData,
    PokemonImage,
    PokemonInfo,
    PokemonStats
} from "./sub-components"
import { formatName, getColorsByType } from "utils"

export type PokemonTemplateProps = {
    pokemonData: PokemonWithSpecies
}

export const PokemonTemplate = ({ pokemonData }: PokemonTemplateProps) => {
    const pokemonName = useMemo(
        () => formatName(pokemonData?.name),
        [pokemonData?.name]
    )
    const pokemonNumber = useMemo(() => pokemonData?.id, [pokemonData?.id])
    const pokemonBackground = useMemo(() => {
        let background = getColorsByType(
            pokemonData?.types?.[0]?.type?.name
        )?.background

        if (pokemonData?.types?.length >= 2) {
            // pokemon with 2 or more types
            background = `linear-gradient(
                        to right,
                        ${getColorsByType(pokemonData.types[0].type.name).backgroundColor} 50%,
                        ${getColorsByType(pokemonData.types[1].type.name).backgroundColor} 50%
                    )`
        }
        return background
    }, [pokemonData])

    return (
        <>
            <NextSeo
                title={`${pokemonName} | Pokédex`}
                description={`Data found in the Pokédex for ${pokemonName}.`}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: `${pokemonName}, ${pokemonName}#${pokemonNumber}, Pokémon #${pokemonNumber}, Pokédex Number, Cry, Sprite, Types, Height, Weight, Habitat, Abilities, Stats`
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/pokemon/${pokemonData?.name}`}
            />

            <S.Background style={{ background: pokemonBackground }}>
                <S.Container>
                    <S.Section>
                        <S.Card>
                            <PokemonInfo
                                name={pokemonName}
                                number={pokemonNumber}
                                cries={pokemonData?.cries}
                                genera={pokemonData?.genera}
                            />
                            <PokemonImage
                                name={pokemonName}
                                sprites={pokemonData?.sprites}
                            />
                            <RowTypes types={pokemonData?.types} />
                            <PokemonData
                                height={pokemonData?.height}
                                weight={pokemonData?.weight}
                                generation={pokemonData?.generation}
                                shape={pokemonData?.shape}
                                habitat={pokemonData?.habitat}
                                abilities={pokemonData?.abilities}
                            />
                            <PokemonStats
                                stats={pokemonData?.stats}
                                types={pokemonData?.types}
                            />
                        </S.Card>

                        <SpriteFloatingMenu />
                    </S.Section>
                </S.Container>
            </S.Background>
        </>
    )
}
