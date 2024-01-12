export interface ISprites {
    front_default: string
    front_shiny: string
    other: {
        "official-artwork": {
            front_default: string
            front_shiny: string
        }
    }
}

export interface IType {
    name: string
    url: string
}

export interface IPokemonType {
    type: IType
}

export interface IAbility {
    ability: {
        name: string
        url: string
    }
}

export interface IStat {
    base_stat: number
    stat: {
        name: string
        url: string
    }
}

export interface IPokemon {
    id: number
    name: string
    url: string
    sprites: ISprites
    height: number
    weight: number
    types: IPokemonType[]
    abilities: IAbility[]
    stats: IStat[]
}
