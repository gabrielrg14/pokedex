import { GetStaticProps } from "next"
import { useState, useRef, useCallback, useEffect } from "react"

import { IPokemon, IType } from "interfaces"
import { PokedexService } from "services"
import { HomeTemplate } from "templates"
import { useListFilterStore } from "store"
import { POKEMON_PAGINATION_LIMIT } from "common"

type HomeProps = {
    types: IType[]
}

export const getStaticProps: GetStaticProps = async () => {
    const types = await PokedexService.getAllTypes()

    return {
        props: { types }
    }
}

const Home = ({ types }: HomeProps) => {
    const { filter, setSearchFilter, setTypeFilter, setLimitFilter } =
        useListFilterStore()

    const prevSearchRef = useRef("")
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getInitialPokemonPagination = useCallback(async (limit: number) => {
        setIsLoading(true)
        await PokedexService.getPokemonsWithPagination(limit)
            .then((data) => setPokemonList(data))
            .finally(() => setIsLoading(false))
    }, [])

    const getNextPokemonPagination = useCallback(async (limit: number) => {
        setIsLoading(true)
        await PokedexService.getPokemonsWithPagination(
            POKEMON_PAGINATION_LIMIT,
            limit
        )
            .then((data) => {
                setPokemonList((prevPokemonList) => [
                    ...prevPokemonList,
                    ...data
                ])
            })
            .finally(() => setIsLoading(false))
    }, [])

    const getPokemonByQuery = useCallback(async (search: string) => {
        setIsLoading(true)
        prevSearchRef.current = search
        await PokedexService.getPokemonByQuery(
            search.replace(/ /g, "-").toLowerCase()
        )
            .then((data) => setPokemonList([data]))
            .catch(() => setPokemonList([]))
            .finally(() => setIsLoading(false))
    }, [])

    const getPokemonsByType = useCallback(async (type: string) => {
        setIsLoading(true)
        await PokedexService.getPokemonsByType(type)
            .then((data) => setPokemonList(data))
            .finally(() => setIsLoading(false))
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
            pokemons={pokemonList}
            types={types}
            isLoading={isLoading}
            filter={filter}
            prevSearchRef={prevSearchRef}
            searchPokemon={searchPokemon}
            filterByType={filterByType}
            nextPokemonPagination={nextPokemonPagination}
        />
    )
}

export default Home
