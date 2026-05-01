import * as S from "./styles"
import { Ability, Generation, Habitat, Shape } from "interfaces"
import { formatName, getGenerationRegion } from "utils"

type PokemonDataProps = {
    height: number
    weight: number
    generation?: Generation
    shape?: Shape
    habitat?: Habitat
    abilities: Ability[]
}

export const PokemonData = ({
    height,
    weight,
    generation,
    shape,
    habitat,
    abilities
}: PokemonDataProps) => {
    return (
        <S.Wrapper>
            {height && (
                <S.Data>
                    <S.DataTitle>Height</S.DataTitle>
                    <p>{height / 10}m</p>
                </S.Data>
            )}
            {weight && (
                <S.Data>
                    <S.DataTitle>Weight</S.DataTitle>
                    <p>{weight / 10}kg</p>
                </S.Data>
            )}
            {generation && (
                <S.Data>
                    <S.DataTitle>
                        Gen {generation.name.split("-")[1].toUpperCase()}
                    </S.DataTitle>
                    <p>{getGenerationRegion(generation.name)}</p>
                </S.Data>
            )}
            {shape && (
                <S.Data>
                    <S.DataTitle>Shape</S.DataTitle>
                    <p>{formatName(shape.name)}</p>
                </S.Data>
            )}
            {habitat && (
                <S.Data>
                    <S.DataTitle>Habitat</S.DataTitle>
                    <p>{formatName(habitat.name)}</p>
                </S.Data>
            )}
            {abilities?.length > 0 && (
                <S.Data>
                    <S.DataTitle>Abilities</S.DataTitle>
                    {abilities.map((item, index) => (
                        <p key={index}>{formatName(item.ability.name)}</p>
                    ))}
                </S.Data>
            )}
        </S.Wrapper>
    )
}
