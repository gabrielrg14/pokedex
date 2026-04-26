import { GetStaticProps } from "next"
import { useState, useRef, useEffect, useMemo } from "react"

import { Resource } from "interfaces"
import { HomeTemplate } from "templates"
import { useListFilterStore } from "store"
import { useQuery } from "@tanstack/react-query"
import { pokedexService } from "services"
import { POKEMON_PAGINATION_LIMIT } from "common"

type HomeProps = {
    types: Resource[]
}

export const getStaticProps: GetStaticProps = async () => {
    const types = await pokedexService.getAllTypes()

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
    const [pokemonList, setPokemonList] = useState<Resource[]>([])

    const { data: pokemonByPagination, isLoading: isLoadingByPagination } =
        useQuery({
            queryKey: ["getPokemonByPagination", filter.limit],
            queryFn: () =>
                pokedexService.getPokemonWithPagination(filter.limit),
            enabled: filter.search === "" && filter.type === "all"
        })

    const { data: pokemonByType, isLoading: isLoadingByType } = useQuery({
        queryKey: ["getPokemonByType", filter.type],
        queryFn: () => pokedexService.getPokemonByType(filter.type),
        enabled: filter.type !== "all"
    })

    const { data: pokemonBySearch, isLoading: isLoadingBySearch } = useQuery({
        queryKey: ["getPokemon", filter.search],
        queryFn: () => pokedexService.getPokemonByQuery(filter.search),
        enabled: filter.search !== ""
    })

    const isLoading = useMemo(
        () =>
            filter.loading ||
            isLoadingByPagination ||
            isLoadingByType ||
            isLoadingBySearch,
        [
            filter.loading,
            isLoadingByPagination,
            isLoadingByType,
            isLoadingBySearch
        ]
    )

    useEffect(() => {
        if (isLoading) return

        let pokemonList
        if (filter.search === "" && filter.type === "all")
            pokemonList = pokemonByPagination
        else if (filter.type !== "all") pokemonList = pokemonByType
        else if (filter.search !== "")
            pokemonList = pokemonBySearch ? [pokemonBySearch] : []
        else pokemonList = pokemonByPagination
        setPokemonList(pokemonList || [])
    }, [
        isLoading,
        filter.search,
        filter.type,
        pokemonByPagination,
        pokemonByType,
        pokemonBySearch
    ])

    const searchPokemon = (search: string) => {
        prevSearchRef.current = search
        setScrollFilter(125) // scroll to pokemon search
        setTypeFilter("all")
        setSearchFilter(search)
    }

    const filterByType = (type: string) => {
        setScrollFilter(125) // scroll to pokemon count
        setSearchFilter("")
        setTypeFilter(type)
    }

    const nextPokemonPagination = (limit: number) => {
        setScrollFilter(window.pageYOffset + 780) // scroll to next pokemon pagination
        setLimitFilter(limit + POKEMON_PAGINATION_LIMIT)
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
