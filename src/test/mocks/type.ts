import { IType } from "interfaces"

const typeAll: IType = {
    name: "all",
    url: ""
}

const types: Record<string, IType> = {
    normal: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/"
    },
    fighting: {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/"
    },
    flying: {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/"
    },
    poison: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
    },
    ground: {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/"
    },
    rock: {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/"
    },
    bug: {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/"
    },
    ghost: {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/"
    },
    steel: {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/"
    },
    fire: {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/"
    },
    water: {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/"
    },
    grass: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
    },
    electric: {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/"
    },
    psychic: {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/"
    },
    ice: {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/"
    },
    dragon: {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/"
    },
    dark: {
        name: "dark",
        url: "https://pokeapi.co/api/v2/type/17/"
    },
    fairy: {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/"
    }
}

export const typeMocks = {
    typeAll,
    types,
    list: Object.values(types)
}
