import { useState, useEffect } from 'react';

import { getColorsByPokemonType } from "src/common/utils/colorTypes";

import { ParentBar, ChildBar } from "./styles";

interface StatBarProps {
    type: string,
    stat: string,
    baseStat: number
}

type baseStats = {
    [key: string]: number
}

// data taken from the website: https://pokemondb.net/pokedex/all
const MAX_BASE_STAT: baseStats = {
    "hp": 255,
    "attack": 190,
    "defense": 250,
    "special-attack": 194,
    "special-defense": 250,
    "speed": 200
}

const StatBar: React.FC<StatBarProps> = ({ type, stat, baseStat }): JSX.Element => {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setCompleted((baseStat * 100) / MAX_BASE_STAT[stat]);
    }, [baseStat, stat]);

    return (
        <ParentBar>
            <ChildBar bgColor={getColorsByPokemonType(type).backgroundColor} completed={completed} />
        </ParentBar>
    )
}

export default StatBar;