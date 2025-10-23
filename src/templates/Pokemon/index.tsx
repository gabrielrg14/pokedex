import { useCallback, useEffect, useMemo } from "react"
import { NextSeo } from "next-seo"

import * as S from "./styles"
import Image from "next/image"
import { IPokemonWithSpecies } from "interfaces"
import {
    PokemonNumber,
    RowTypes,
    SpriteFloatingMenu,
    StatBar
} from "components"
import { formatName } from "utils"
import { Sprite, SpriteVersion } from "store"
import { VolumeUp } from "styled-icons/material-outlined"

type PokemonTemplateProps = {
    pokemon: IPokemonWithSpecies
    background: string
    sprite: Sprite
}

export const PokemonTemplate = ({
    pokemon,
    background,
    sprite
}: PokemonTemplateProps) => {
    const pokemonName = useMemo(
        () => formatName(pokemon?.name),
        [pokemon?.name]
    )
    const pokemonNumber = useMemo(() => pokemon?.id, [pokemon?.id])
    const pokemonCry = useMemo(
        () =>
            sprite.version === SpriteVersion.pixelated && pokemon?.cries?.legacy
                ? pokemon?.cries?.legacy
                : pokemon?.cries?.latest,
        [sprite?.version, pokemon?.cries]
    )
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
            `cry-pokemon-${pokemonNumber}`
        ) as HTMLAudioElement
        cryAudioElement.volume = 0.05
        cryAudioElement.play()
    }, [pokemonNumber])

    useEffect(() => {
        playPokemonCry()
    }, [playPokemonCry])

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
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/pokemon/${pokemonName}`}
            />

            <audio id={`cry-pokemon-${pokemonNumber}`} src={pokemonCry} />

            <S.Background style={{ background }}>
                <S.Wrapper>
                    <S.Content>
                        <S.PokemonCard>
                            <S.PokemonInfo>
                                <S.PokemonTitle>
                                    <S.PokemonName>{pokemonName}</S.PokemonName>
                                    <S.CryButton
                                        type="button"
                                        title={`${pokemonName} cry`}
                                        onClick={() => playPokemonCry()}
                                    >
                                        <VolumeUp
                                            size={24}
                                            color="var(--dark-color)"
                                        />
                                    </S.CryButton>
                                </S.PokemonTitle>

                                {pokemon?.genera && (
                                    <S.PokemonGenera>
                                        {formatName(
                                            pokemon.genera.find(
                                                (genera) =>
                                                    genera.language.name ===
                                                    "en"
                                            )?.genus
                                        )}
                                    </S.PokemonGenera>
                                )}

                                <S.PokemonId>
                                    <PokemonNumber number={pokemonNumber} />
                                </S.PokemonId>
                            </S.PokemonInfo>

                            <S.ImageWrapper>
                                {pokemonImage ? (
                                    <Image
                                        src={pokemonImage}
                                        width={256}
                                        height={256}
                                        alt={pokemonName}
                                        style={{
                                            imageRendering:
                                                sprite.version ===
                                                SpriteVersion.pixelated
                                                    ? "pixelated"
                                                    : "unset"
                                        }}
                                        priority
                                    />
                                ) : (
                                    <Image
                                        src="/images/types/all.svg"
                                        width={228}
                                        height={228}
                                        alt={`${pokemonName} fallback`}
                                        priority
                                    />
                                )}
                            </S.ImageWrapper>

                            <RowTypes types={pokemon?.types} />

                            <S.PokemonData>
                                <S.Data>
                                    <S.DataTitle>Height</S.DataTitle>
                                    <p>{pokemon?.height / 10}m</p>
                                </S.Data>
                                <S.Data>
                                    <S.DataTitle>Weight</S.DataTitle>
                                    <p>{pokemon?.weight / 10}kg</p>
                                </S.Data>
                                {pokemon?.habitat && (
                                    <S.Data>
                                        <S.DataTitle>Habitat</S.DataTitle>
                                        <p>
                                            {formatName(pokemon.habitat.name)}
                                        </p>
                                    </S.Data>
                                )}
                                <S.Data>
                                    <S.DataTitle>Abilities</S.DataTitle>
                                    {pokemon?.abilities.map((item, index) => (
                                        <p key={index}>
                                            {formatName(item.ability.name)}
                                        </p>
                                    ))}
                                </S.Data>
                            </S.PokemonData>

                            <S.PokemonStats>
                                <S.DataTitle>Stats</S.DataTitle>
                                {pokemon?.stats.map((item, index) => (
                                    <S.Stat key={index}>
                                        <S.StatInfo>
                                            <span>
                                                {formatName(item.stat.name)}
                                            </span>
                                            <span>{item.base_stat}</span>
                                        </S.StatInfo>
                                        <StatBar
                                            type={pokemon?.types[0].type.name}
                                            stat={item.stat.name}
                                            baseStat={item.base_stat}
                                        />
                                    </S.Stat>
                                ))}
                            </S.PokemonStats>
                        </S.PokemonCard>
                    </S.Content>
                </S.Wrapper>

                <SpriteFloatingMenu />
            </S.Background>
        </>
    )
}
