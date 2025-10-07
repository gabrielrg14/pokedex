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

export interface ICry {
    latest: string
    legacy?: string
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
    cries: ICry
    height: number
    weight: number
    types: IPokemonType[]
    abilities: IAbility[]
    stats: IStat[]
}

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

export interface IPokemonSpecies extends IPokemon {
    genera?: IGenera[]
    habitat?: IHabitat
}
