import { IPokemon, IType } from "interfaces"
import { Api } from "providers"

const getPokemonByQuery = async (query?: string): Promise<IPokemon> => {
    const { data } = await Api.get(`/pokemon/${query ?? ""}`)
    return data ?? { id: null }
}

const getPokemonsWithPagination = async (
    limit: number,
    offset?: number
): Promise<IPokemon[]> => {
    const { data } = await Api.get(
        `/pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`
    )
    return data.results
}

const getAllTypes = async (): Promise<IType[]> => {
    const { data } = await Api.get("/type")

    data.results.unshift({ name: "all", url: "" }) // Adds type "all" to be one of the filterable options

    // Remove types that do not have pokémon coming from the API
    const typesToRemove = ["unknown", "stellar"]
    const typesFiltered = data.results.filter(
        (type: IType) => !typesToRemove.includes(type.name)
    )

    return typesFiltered
}

const getPokemonsByType = async (type: string): Promise<IPokemon[]> => {
    const { data } = await Api.get(`/type/${type}`)
    const pokemonsByType = data.pokemon.map(
        (item: { pokemon: IPokemon }) => item.pokemon
    )
    return pokemonsByType
}

export const PokedexService = {
    getPokemonByQuery,
    getPokemonsWithPagination,
    getAllTypes,
    getPokemonsByType
}
