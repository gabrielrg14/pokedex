import { GetStaticProps } from "next"
import { useState, useRef, useCallback } from "react"

import { IPokemon, IType } from "interfaces"
import { PokedexService } from "services"
import { HomeTemplate, LIMIT } from "templates"

type HomeProps = {
    pokemons: IPokemon[]
    types: IType[]
}

export const getStaticProps: GetStaticProps = async () => {
    const pokemons = await PokedexService.getPokemonsWithPagination(LIMIT)
    const types = await PokedexService.getAllTypes()

    return {
        props: { pokemons, types }
    }
}

const Home = ({ pokemons, types }: HomeProps) => {
    const prevSearchRef = useRef("")
    const [search, setSearch] = useState("")
    const [typeSelected, setTypeSelected] = useState("all")
    const [pokemonList, setPokemonList] = useState(pokemons)
    const [pokemonLimit, setPokemonLimit] = useState(LIMIT)

    const loadPokemons = useCallback(
        async (query: string | null, type: string | null = null) => {
            if (query === "" || type === "all") {
                await PokedexService.getPokemonsWithPagination(
                    pokemonLimit
                ).then((data) => setPokemonList([...data]))
            } else if (query !== null) {
                await PokedexService.getPokemonByQuery(
                    query.replace(/ /g, "-").toLowerCase()
                )
                    .then((data) => setPokemonList([data]))
                    .catch(() => setPokemonList([]))
                prevSearchRef.current = query
            } else if (query === null && type === null) {
                await PokedexService.getPokemonsWithPagination(
                    LIMIT,
                    pokemonLimit
                ).then((data) => {
                    setPokemonList((prevPokemonList) => [
                        ...prevPokemonList,
                        ...data
                    ])
                    setPokemonLimit(
                        (prevPokemonLimit) => prevPokemonLimit + LIMIT
                    )
                })
            } else if (type !== null) {
                await PokedexService.getPokemonsByType(type).then((data) =>
                    setPokemonList([...data])
                )
            }
        },
        [pokemonLimit]
    )

    function searchPokemon(search: string | null) {
        setSearch(search ?? "")
        loadPokemons(search)
        setTypeSelected("all")
    }

    // Remove types that do not have pokémon coming from the API
    const typesToRemove = ["unknown", "shadow"]
    const typesFiltered = types.filter(
        (type) => !typesToRemove.includes(type.name)
    )

    return (
        <HomeTemplate
            state={{
                prevSearchRef,
                search,
                setSearch,
                typeSelected,
                setTypeSelected
            }}
            pokemons={pokemonList}
            types={typesFiltered}
            searchPokemon={searchPokemon}
            loadPokemons={loadPokemons}
        />
    )
}

export default Home
