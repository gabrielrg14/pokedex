import {
    Pagination,
    Pokemon,
    PokemonSpecies,
    Resource,
    TypeResource
} from "interfaces"
import { api } from "providers"
import { POKEMON_PAGINATION_LIMIT } from "common"

const getPokemonByQuery = async (query?: string): Promise<Pokemon> => {
    const search = query?.replace(/ /g, "-").toLowerCase()

    const { data: pokemonData, status } = await api.get<Pokemon>(
        `/pokemon/${search ?? ""}`
    )

    if (!pokemonData || status !== 200) throw new Error("Pokémon not found")

    // Removes abilities that have the same name
    const abilityNames = pokemonData.abilities.map((item) => item.ability.name)
    const abilitiesFiltered = abilityNames.filter(
        (item, index) => abilityNames.indexOf(item) === index
    )
    pokemonData.abilities = pokemonData.abilities.filter(
        (item, index) => abilitiesFiltered.indexOf(item.ability.name) === index
    )

    return pokemonData
}

const getPokemonSpeciesByName = async (
    name?: string
): Promise<PokemonSpecies> => {
    if (!name) return {}

    const { data: speciesData, status } = await api.get<PokemonSpecies>(
        `/pokemon-species/${name}`
    )

    if (!speciesData || status !== 200)
        throw new Error("Pokémon Species not found")

    return speciesData
}

const getPokemonWithPagination = async (
    limit: number = POKEMON_PAGINATION_LIMIT,
    offset?: number
): Promise<Resource[]> => {
    const { data: pagination } = await api.get<Pagination>(
        `/pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`
    )

    return pagination.results
}

const getPokemonByType = async (type: string): Promise<Resource[]> => {
    const { data: typeData, status } = await api.get<TypeResource>(
        `/type/${type}`
    )

    if (!typeData || status !== 200) throw new Error("Type not found")

    const pokemonsByType = typeData.pokemon.map((item) => item.pokemon)

    return pokemonsByType
}

const getAllTypes = async (): Promise<Resource[]> => {
    const { data: pagination } = await api.get<Pagination>("/type")

    pagination.results.unshift({ name: "all", url: "" }) // Add type "all" to be one of the filterable options

    // Remove types that do not have pokémon coming from the API
    const typesToRemove = ["unknown", "stellar"]
    const typesFiltered = pagination.results.filter(
        (type) => !typesToRemove.includes(type.name)
    )

    return typesFiltered
}

export const pokedexService = {
    getPokemonByQuery,
    getPokemonSpeciesByName,
    getPokemonWithPagination,
    getPokemonByType,
    getAllTypes
}
