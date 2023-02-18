export interface Sprites {
    front_default: string,
    front_shiny: string
    other: {
        "official-artwork": {
            front_default: string
        }
    }
}

export interface Type {
    type: {
        name: string,
        url: string
    }
}

export interface Ability {
    ability: {
        name: string,
        url: string
    }
}

export interface Stat {
    base_stat: number,
    stat: {
        name: string,
        url: string
    }
}

export interface Pokemon {
    id: number | null,
    name: string,
    url: string,
    sprites: Sprites,
    height: number,
    weight: number,
    types: Type[],
    abilities: Ability[],
    stats: Stat[]
}

export const formatPokemonName = (pokemonName: string) => {
    // Removes hyphen from pokémon name and puts a blank in its place
    const name = pokemonName.replace(/\-/g, " ")
    // Capitalize the first letter of each word that makes up the pokémon's name
    .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return name;
}