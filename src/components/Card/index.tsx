import { useState, useCallback, useEffect, useContext } from 'react';

import Image from 'next/image';

import { API_URL } from "src/common/utils/api";
import { Pokemon, formatPokemonName } from "src/common/utils/pokemon";
import { SpriteContext } from "src/common/contexts/sprite";

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

    const { sprite } = useContext(SpriteContext);

    return (
        <CardLink href={`/pokemon/${pokemonData?.name}`}>
            {pokemonData?.sprites?.other['official-artwork']?.[sprite] &&
                <Image src={pokemonData?.sprites.other['official-artwork'][sprite]} 
                    width={156} height={156} 
                    alt={pokemon.name} 
                    unoptimized
                />
            }

            <PokemonInfos>
                <PokemonNumber number={pokemonData?.id} />
                <PokemonName>{formatPokemonName(pokemon.name)}</PokemonName>
            </PokemonInfos>

            <RowTypes types={pokemonData?.types}/>
        </CardLink>
    )
}

export default Card;