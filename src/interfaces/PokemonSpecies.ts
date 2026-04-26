import { Resource, Pokemon } from "."

export interface Genera {
    genus: string
    language: Resource
}

export interface Generation extends Resource {}

export interface Shape extends Resource {}

export interface Habitat extends Resource {}

export interface PokemonSpecies {
    genera?: Genera[]
    generation?: Generation
    shape?: Shape
    habitat?: Habitat
}

export interface PokemonWithSpecies extends Pokemon, PokemonSpecies {}
