import { Resource } from "."

export interface Sprite {
    front_default: string
    front_shiny: string
    back_default?: string
    back_shiny?: string
}

export interface Sprites extends Sprite {
    other: {
        "official-artwork": Sprite
    }
}

export interface Species extends Resource {}

export interface Cries {
    latest: string
    legacy?: string
}

export interface Type {
    type: Resource
}

export interface Ability {
    ability: Resource
}

export interface Stat {
    base_stat: number
    stat: Resource
}

export interface Pokemon {
    id: number
    name: string
    url: string
    sprites: Sprites
    species: Species
    cries: Cries
    height: number
    weight: number
    types: Type[]
    abilities: Ability[]
    stats: Stat[]
}
