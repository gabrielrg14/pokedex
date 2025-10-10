import { IPokemon } from "./Pokemon"

export interface IGenera {
    genus: string
    language: {
        name: string
        url: string
    }
}

export interface IHabitat {
    name: string
    url: string
}

export interface IPokemonSpecies {
    genera?: IGenera[]
    habitat?: IHabitat
}

export interface IPokemonWithSpecies extends IPokemon, IPokemonSpecies {}
