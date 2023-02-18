import { useState, useCallback, useEffect } from 'react';

import Image from 'next/image';

import { API_URL } from "src/common/utils/api";
import { Pokemon, formatPokemonName } from "src/common/utils/pokemon";

import PokemonNumber from "src/components/PokemonNumber";
import RowTypes from "src/components/RowTypes";

import { CardLink, PokemonInfos, PokemonName } from "./styles";

interface CardProps {
    pokemon: Pokemon
}

const Card: React.FC<CardProps> = ({ pokemon }): JSX.Element => {
    
    const [pokemonData, setPokemonData] = useState<Pokemon>();

    const getPokemonData = useCallback(async () => {
        const res = await fetch(`${API_URL}/pokemon/${pokemon.name}`)
        const data = await res.json()
        setPokemonData(data)
    }, [pokemon])

    useEffect(() => {
        getPokemonData()
    }, [getPokemonData])

    return (
        <CardLink href={`/pokemon/${pokemonData?.name}`}>
            {pokemonData?.sprites &&
                <Image src={pokemonData?.sprites.other['official-artwork'].front_default} width={156} height={156} alt={pokemon.name} />
            }

            <PokemonInfos>
                <PokemonName>{formatPokemonName(pokemon.name)}</PokemonName>
                <PokemonNumber number={pokemonData?.id} />
            </PokemonInfos>

            <RowTypes types={pokemonData?.types}/>
        </CardLink>
    )
}

export default Card;