import { NextSeo } from 'next-seo';

import * as S from "./styles";
import PokemonNumber from "components/PokemonNumber";
import RowTypes from "components/RowTypes";
import StatBar from "components/StatBar";

import { Pokemon, formatPokemonName } from "common/utils/pokemon";
import { Sprite } from "common/contexts/sprite";

type PokemonTemplateProps = {
    pokemon: Pokemon
    background: string
    sprite: Sprite
}

const PokemonTemplate = ({ pokemon, background, sprite }: PokemonTemplateProps) => {
    return (
        <>
            <NextSeo
                title={`${formatPokemonName(pokemon?.name)} | Pokédex`}
                description={`Data found in the Pokédex for ${formatPokemonName(pokemon?.name)}.`}
                additionalMetaTags={[{
                    name: "keywords",
                    content: `${formatPokemonName(pokemon?.name)}, ${formatPokemonName(pokemon?.name)}#${pokemon?.id}, Pokémon #${pokemon?.id}, Pokédex, Pokédex Number, Sprite, Types, Height, Weight, Abilities, Stats`
                }]}
            />

            <S.Container style={{ background }}>
                <S.PokemonCard>
                    <S.PokemonTitle>
                        <S.PokemonName>
                            {formatPokemonName(pokemon?.name)}
                        </S.PokemonName>
                        <S.SpanNumber>
                            <PokemonNumber number={pokemon?.id} />
                        </S.SpanNumber>
                    </S.PokemonTitle>
                    
                    <S.DivImage>
                        {pokemon?.sprites?.other['official-artwork']?.[sprite] &&
                            <S.PokemonImage
                                src={pokemon?.sprites.other['official-artwork'][sprite]} 
                                width={256} height={256} 
                                alt={pokemon?.name} 
                                priority
                            />
                        }
                    </S.DivImage>

                    <RowTypes types={pokemon?.types}/>

                    <S.PokemonData>
                        <S.DivData>
                            <S.DataTitle>Height</S.DataTitle>
                            <p>{pokemon?.height / 10}m</p>
                        </S.DivData>
                        <S.DivData>
                            <S.DataTitle>Weight</S.DataTitle>
                            <p>{pokemon?.weight / 10}kg</p>
                        </S.DivData>
                        <S.DivData>
                            <S.DataTitle>Abilities</S.DataTitle>
                            {pokemon.abilities.map((item, index) => (
                                <p key={index}>{item.ability.name.replace("-", " ")}</p>
                            ))}
                        </S.DivData>
                    </S.PokemonData>

                    <S.PokemonStats>
                        <S.DataTitle>Stats</S.DataTitle>
                        {pokemon?.stats.map((item, index) => (
                            <S.Stat key={index}>
                                <S.StatInfo>
                                    <span>{item.stat.name.replace("special-", "Sp. ")}</span>
                                    <span>{item.base_stat}</span>
                                </S.StatInfo>
                                <StatBar 
                                    type={pokemon?.types[0].type.name} 
                                    stat={item.stat.name} baseStat={item.base_stat} 
                                />
                            </S.Stat>
                        ))}
                    </S.PokemonStats>
                </S.PokemonCard>
            </S.Container>
        </>
    )
}

export default PokemonTemplate;