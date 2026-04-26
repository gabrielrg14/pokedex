export interface Resource {
    name: string
    url: string
}

export interface Pagination {
    count: number
    next: string | null
    previous: string | null
    results: Resource[]
}

export interface PokemonResource {
    pokemon: Resource
}

export interface TypeResource {
    id: number
    name: string
    pokemon: PokemonResource[]
}
