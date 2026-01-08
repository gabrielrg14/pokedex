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
    const {
        filter,
        setSearchFilter,
        setTypeFilter,
        setLimitFilter,
        setScrollFilter
    } = useListFilterStore()

    const prevSearchRef = useRef("")
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getInitialPokemonPagination = useCallback(async (limit: number) => {
        await PokedexService.getPokemonsWithPagination(limit)
            .then((data) => setPokemonList(data))
            .finally(() => setIsLoading(false))
    }, [])

    const getNextPokemonPagination = useCallback(async (limit: number) => {
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
        prevSearchRef.current = search
        await PokedexService.getPokemonByQuery(search)
            .then((data) => setPokemonList([data]))
            .catch(() => setPokemonList([]))
            .finally(() => setIsLoading(false))
    }, [])

    const getPokemonsByType = useCallback(async (type: string) => {
        await PokedexService.getPokemonsByType(type)
            .then((data) => setPokemonList(data))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        if (!filter.loading) {
            setIsLoading(true)
            if (filter.search === "" && filter.type === "all")
                getInitialPokemonPagination(filter.limit)
            else if (filter.type !== "all") getPokemonsByType(filter.type)
            else if (filter.search !== "") getPokemonByQuery(filter.search)
            else getNextPokemonPagination(filter.limit)
        }
    }, [
        filter,
        getInitialPokemonPagination,
        getPokemonsByType,
        getPokemonByQuery,
        getNextPokemonPagination
    ])

    const searchPokemon = (search: string) => {
        setSearchFilter(search)
        setTypeFilter("all")
        setScrollFilter(125) // scroll to pokemon search
    }

    const filterByType = (type: string) => {
        setTypeFilter(type)
        setSearchFilter("")
        setScrollFilter(125) // scroll to pokemon count
    }

    const nextPokemonPagination = (limit: number) => {
        setLimitFilter(limit + POKEMON_PAGINATION_LIMIT)
        setScrollFilter(window.pageYOffset + 780) // scroll to next pokemon pagination
    }

    useEffect(() =>
        window.scrollTo({
            top: filter.scroll,
            behavior: "smooth"
        })
    )

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
