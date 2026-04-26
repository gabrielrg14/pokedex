import { Type } from "interfaces"
import { pokemonMocks } from "./pokemon"

const typeAll: Type = {
    type: {
        name: "all",
        url: ""
    }
}

const normal: Type = {
    type: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/"
    }
}

const fighting: Type = {
    type: {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/"
    }
}

const flying: Type = {
    type: {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/"
    }
}

const poison: Type = {
    type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
    }
}

const ground: Type = {
    type: {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/"
    }
}

const rock: Type = {
    type: {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/"
    }
}

const bug: Type = {
    type: {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/"
    }
}

const ghost: Type = {
    type: {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/"
    }
}

const steel: Type = {
    type: {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/"
    }
}

const fire: Type = {
    type: {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/"
    }
}

const water: Type = {
    type: {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/"
    }
}

const grass: Type = {
    type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
    }
}

const electric: Type = {
    type: {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/"
    }
}

const psychic: Type = {
    type: {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/"
    }
}

const ice: Type = {
    type: {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/"
    }
}

const dragon: Type = {
    type: {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/"
    }
}

const dark: Type = {
    type: {
        name: "dark",
        url: "https://pokeapi.co/api/v2/type/17/"
    }
}

const fairy: Type = {
    type: {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/"
    }
}

const types = {
    normal: normal.type,
    fighting: fighting.type,
    flying: flying.type,
    poison: poison.type,
    ground: ground.type,
    rock: rock.type,
    bug: bug.type,
    ghost: ghost.type,
    steel: steel.type,
    fire: fire.type,
    water: water.type,
    grass: grass.type,
    electric: electric.type,
    psychic: psychic.type,
    ice: ice.type,
    dragon: dragon.type,
    dark: dark.type,
    fairy: fairy.type
}

export const typeMocks = {
    typeAll: typeAll.type,
    ...types,
    list: Object.values(types),
    arrayList: Object.values(types).map((type) => [type.name, type]),
    pokemonsByTypeArray: [
        [types.grass.name, pokemonMocks.venusaur],
        [types.fire.name, pokemonMocks.charizard],
        [types.water.name, pokemonMocks.blastoise]
    ]
}
