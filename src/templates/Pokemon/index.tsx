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
    pokemonName: string
    pokemonNumber: number
    pokemonCry?: string
    pokemonImage?: string
    pokemonData: IPokemonWithSpecies
    playPokemonCry: () => void
    background: string
    sprite: Sprite
}

export const PokemonTemplate = ({
    pokemonName,
    pokemonNumber,
    pokemonCry,
    pokemonImage,
    pokemonData,
    playPokemonCry,
    background,
    sprite
}: PokemonTemplateProps) => {
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

            <audio
                id={`pokemon-cry-${pokemonNumber}`}
                src={pokemonCry}
                autoPlay
            />

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

                                {pokemonData?.genera && (
                                    <S.PokemonGenera>
                                        {formatName(
                                            pokemonData.genera.find(
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

                            <RowTypes types={pokemonData?.types} />

                            <S.PokemonData>
                                <S.Data>
                                    <S.DataTitle>Height</S.DataTitle>
                                    <p>{pokemonData?.height / 10}m</p>
                                </S.Data>
                                <S.Data>
                                    <S.DataTitle>Weight</S.DataTitle>
                                    <p>{pokemonData?.weight / 10}kg</p>
                                </S.Data>
                                {pokemonData?.habitat && (
                                    <S.Data>
                                        <S.DataTitle>Habitat</S.DataTitle>
                                        <p>
                                            {formatName(
                                                pokemonData.habitat.name
                                            )}
                                        </p>
                                    </S.Data>
                                )}
                                {pokemonData?.abilities?.length > 0 && (
                                    <S.Data>
                                        <S.DataTitle>Abilities</S.DataTitle>
                                        {pokemonData.abilities.map(
                                            (item, index) => (
                                                <p key={index}>
                                                    {formatName(
                                                        item.ability.name
                                                    )}
                                                </p>
                                            )
                                        )}
                                    </S.Data>
                                )}
                            </S.PokemonData>

                            <S.PokemonStats>
                                <S.DataTitle>Stats</S.DataTitle>
                                {pokemonData?.stats.map((item, index) => (
                                    <S.Stat key={index}>
                                        <S.StatInfo>
                                            <span>
                                                {formatName(item.stat.name)}
                                            </span>
                                            <span>{item.base_stat}</span>
                                        </S.StatInfo>
                                        <StatBar
                                            type={
                                                pokemonData?.types[0].type.name
                                            }
                                            stat={item.stat.name}
                                            baseStat={item.base_stat}
                                        />
                                    </S.Stat>
                                ))}
                            </S.PokemonStats>
                        </S.PokemonCard>

                        <SpriteFloatingMenu />
                    </S.Content>
                </S.Wrapper>
            </S.Background>
        </>
    )
}
