import { GetStaticProps } from "next"
import { useState, useRef, useCallback, useEffect } from "react"

import { IPokemon, IType } from "interfaces"
import { PokedexService } from "services"
import { HomeTemplate } from "templates"
import { useListFilterStore } from "store"
import { POKEMON_PAGINATION_LIMIT } from "common"

type HomeProps = {
    pokemons: IPokemon[]
    types: IType[]
}

export const getStaticProps: GetStaticProps = async () => {
    const pokemons = await PokedexService.getPokemonsWithPagination(
        POKEMON_PAGINATION_LIMIT
    )
    const types = await PokedexService.getAllTypes()

    return {
        props: { pokemons, types }
    }
}

const Home = ({ pokemons, types }: HomeProps) => {
    const { filter, setSearchFilter, setTypeFilter, setLimitFilter } =
        useListFilterStore()

    const prevSearchRef = useRef("")
    const [pokemonList, setPokemonList] = useState(pokemons)

    const getInitialPokemonPagination = useCallback(async (limit: number) => {
        await PokedexService.getPokemonsWithPagination(limit).then((data) =>
            setPokemonList([...data])
        )
    }, [])

    const getNextPokemonPagination = useCallback(async (limit: number) => {
        await PokedexService.getPokemonsWithPagination(
            POKEMON_PAGINATION_LIMIT,
            limit
        ).then((data) => {
            setPokemonList((prevPokemonList) => [...prevPokemonList, ...data])
        })
    }, [])

    const getPokemonByQuery = useCallback(async (search: string) => {
        prevSearchRef.current = search
        await PokedexService.getPokemonByQuery(
            search.replace(/ /g, "-").toLowerCase()
        )
            .then((data) => setPokemonList([data]))
            .catch(() => setPokemonList([]))
    }, [])

    const getPokemonsByType = useCallback(async (type: string) => {
        await PokedexService.getPokemonsByType(type).then((data) =>
            setPokemonList([...data])
        )
    }, [])

    useEffect(() => {
        if (filter.search === "" && filter.type === "all")
            getInitialPokemonPagination(filter.limit)
        else if (filter.type !== "all") getPokemonsByType(filter.type)
        else if (filter.search !== "") getPokemonByQuery(filter.search)
        else getNextPokemonPagination(filter.limit)
    }, [
        filter,
        getInitialPokemonPagination,
        getPokemonsByType,
        getPokemonByQuery,
        getNextPokemonPagination
    ])

    const searchPokemon = (search: string) => {
        setTypeFilter("all")
        setSearchFilter(search)
    }

    const filterByType = (type: string) => {
        setSearchFilter("")
        setTypeFilter(type)
    }

    const nextPokemonPagination = (limit: number) => {
        setLimitFilter(limit + POKEMON_PAGINATION_LIMIT)
    }

    return (
        <HomeTemplate
            prevSearchRef={prevSearchRef}
            filter={filter}
            searchPokemon={searchPokemon}
            filterByType={filterByType}
            nextPokemonPagination={nextPokemonPagination}
            pokemons={pokemonList}
            types={types}
        />
    )
}

export default Home
