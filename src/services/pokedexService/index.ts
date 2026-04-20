import { IPokemon, IPokemonSpecies, IType } from "interfaces"
import { api } from "providers"
import { POKEMON_PAGINATION_LIMIT } from "common"

const getPokemonByQuery = async (query?: string): Promise<IPokemon> => {
    const search = query?.replace(/ /g, "-").toLowerCase()

    const { data: pokemon, status } = await api.get<IPokemon>(
        `/pokemon/${search ?? ""}`
    )

    if (status !== 200) throw new Error("Pokemon not found")

    // Removes abilities that have the same name
    const abilityNames = pokemon.abilities.map((item) => item.ability.name)
    const abilitiesFiltered = abilityNames.filter(
        (item, index) => abilityNames.indexOf(item) === index
    )
    pokemon.abilities = pokemon.abilities.filter(
        (item, index) => abilitiesFiltered.indexOf(item.ability.name) === index
    )

    return pokemon
}

const getPokemonSpeciesByName = async (
    name?: string
): Promise<IPokemonSpecies | null> => {
    if (!name) return {}

    const { data: pokemonSpecies } = await api.get<IPokemonSpecies>(
        `/pokemon-species/${name}`
    )

    return pokemonSpecies
}

const getPokemonsWithPagination = async (
    limit: number = POKEMON_PAGINATION_LIMIT,
    offset?: number
): Promise<IPokemon[]> => {
    const { data } = await api.get(
        `/pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`
    )

    return data.results
}

const getAllTypes = async (): Promise<IType[]> => {
    const { data } = await api.get("/type")

    data.results.unshift({ name: "all", url: "" }) // Adds type "all" to be one of the filterable options

    // Remove types that do not have pokémon coming from the API
    const typesToRemove = ["unknown", "stellar"]
    const typesFiltered = data.results.filter(
        (type: IType) => !typesToRemove.includes(type.name)
    )

    return typesFiltered
}

const getPokemonsByType = async (type: string): Promise<IPokemon[]> => {
    const { data } = await api.get(`/type/${type}`)

    const pokemonsByType = data.pokemon.map(
        (item: { pokemon: IPokemon }) => item.pokemon
    )

    return pokemonsByType
}

export const pokedexService = {
    getPokemonByQuery,
    getPokemonSpeciesByName,
    getPokemonsWithPagination,
    getAllTypes,
    getPokemonsByType
}
