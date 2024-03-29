import { useState, useEffect } from "react"

import * as S from "./styles"
import { getColorsByPokemonType } from "utils"

type StatBarProps = {
    type: string
    stat: string
    baseStat: number
}

type baseStats = {
    [key: string]: number
}

// data taken from the website: https://pokemondb.net/pokedex/all
const MAX_BASE_STAT: baseStats = {
    hp: 255,
    attack: 190,
    defense: 250,
    "special-attack": 194,
    "special-defense": 250,
    speed: 200
}

export const StatBar = ({ type, stat, baseStat }: StatBarProps) => {
    const [completed, setCompleted] = useState(0)

    useEffect(() => {
        setCompleted((baseStat * 100) / MAX_BASE_STAT[stat])
    }, [baseStat, stat])

    return (
        <S.ParentBar data-testid="parent-bar">
            <S.ChildBar
                data-testid="child-bar"
                bgColor={getColorsByPokemonType(type).backgroundColor}
                completed={completed}
            />
        </S.ParentBar>
    )
}
