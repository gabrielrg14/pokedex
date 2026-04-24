import { IPokemon } from "./Pokemon"

export interface IGenera {
    genus: string
    language: {
        name: string
        url: string
    }
}

export interface IGeneration {
    name: string
    url: string
}

export interface IShape {
    name: string
    url: string
}

export interface IHabitat {
    name: string
    url: string
}

export interface IPokemonSpecies {
    genera?: IGenera[]
    generation?: IGeneration
    shape?: IShape
    habitat?: IHabitat
}

export interface IPokemonWithSpecies extends IPokemon, IPokemonSpecies {}
