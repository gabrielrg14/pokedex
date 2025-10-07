import { useCallback, useEffect } from "react"
import { NextSeo } from "next-seo"

import * as S from "./styles"
import { IPokemonSpecies } from "interfaces"
import { PokemonNumber, RowTypes, StatBar } from "components"
import { formatName } from "utils"
import { Sprite } from "store"

type PokemonTemplateProps = {
    pokemon: IPokemonSpecies
    background: string
    sprite: Sprite
}

export const PokemonTemplate = ({
    pokemon,
    background,
    sprite
}: PokemonTemplateProps) => {
    const pokemonName = formatName(pokemon?.name)
    const pokemonNumber = pokemon?.id

    const playPokemonCry = useCallback(() => {
        const cryAudioElement = document.getElementById(
            `${pokemonName}-cry`
        ) as HTMLAudioElement
        cryAudioElement.volume = 0.05
        cryAudioElement.play()
    }, [pokemonName])

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

            <audio id={`${pokemonName}-cry`} src={pokemon?.cries?.latest} />

            <S.Background style={{ background }}>
                <S.Wrapper>
                    <S.Content>
                        <S.PokemonCard>
                            <S.PokemonInfo>
                                <S.PokemonTitle>
                                    <S.PokemonName>{pokemonName}</S.PokemonName>
                                    <S.CryButton
                                        type="button"
                                        title="Play cry"
                                        onClick={() => playPokemonCry()}
                                    >
                                        🔊
                                    </S.CryButton>
                                </S.PokemonTitle>

                                {pokemon.genera && (
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
                                {pokemon?.sprites?.other["official-artwork"]?.[
                                    sprite
                                ] && (
                                    <S.PokemonImage
                                        src={
                                            pokemon.sprites.other[
                                                "official-artwork"
                                            ][sprite]
                                        }
                                        width={256}
                                        height={256}
                                        alt={pokemonName}
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
                                    {pokemon.abilities.map((item, index) => (
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
                                            type={pokemon.types[0].type.name}
                                            stat={item.stat.name}
                                            baseStat={item.base_stat}
                                        />
                                    </S.Stat>
                                ))}
                            </S.PokemonStats>
                        </S.PokemonCard>
                    </S.Content>
                </S.Wrapper>
            </S.Background>
        </>
    )
}
