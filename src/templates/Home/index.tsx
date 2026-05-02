import { useEffect, useRef } from "react"
import { NextSeo } from "next-seo"

import * as S from "./styles"
import { Resource } from "interfaces"
import { SpriteFloatingMenu } from "components"
import {
    FilterResults,
    HeroTitle,
    SearchBar,
    SearchError,
    TypeCounter
} from "./sub-components"
import { useListFilterStore } from "store"

type HomeTemplateProps = {
    pokemons: Resource[]
    types: Resource[]
    isLoading: boolean
    isSearchError: boolean
}

export const HomeTemplate = ({
    pokemons,
    types,
    isLoading,
    isSearchError
}: HomeTemplateProps) => {
    const { filter, setSearchFilter, setTypeFilter, setScrollFilter } =
        useListFilterStore()

    const prevSearchRef = useRef("")
    const prevTypeRef = useRef("all")

    useEffect(() =>
        window.scrollTo({
            top: filter.scroll,
            behavior: "smooth"
        })
    )

    const handleSearchPokemon = (search: string) => {
        prevSearchRef.current = search
        setScrollFilter(125) // scroll to pokemon search
        setTypeFilter("all")
        setSearchFilter(search)
    }

    const handleFilterByType = (type: string) => {
        prevTypeRef.current = type
        setScrollFilter(125) // scroll to pokemon count
        setSearchFilter("")
        setTypeFilter(type)
    }

    return (
        <>
            <NextSeo
                title="Pokédex"
                description="Pokédex project that consumes the PokéAPI to display information of all existing Pokémon."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Pokédex, Pokémon, PokéAPI, Project, Frontend, React, Next"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            />

            <S.Section>
                <HeroTitle />

                <S.Container>
                    <SearchBar
                        searchPokemon={handleSearchPokemon}
                        isLoading={isLoading}
                    />
                    <TypeCounter
                        count={pokemons.length}
                        isLoading={isLoading}
                    />
                    <FilterResults
                        pokemons={pokemons}
                        types={types}
                        filterByType={handleFilterByType}
                        isLoading={isLoading}
                    />
                    <SearchError
                        isSearchError={isSearchError}
                        isLoading={isLoading}
                        prevSearchRef={prevSearchRef}
                        prevTypeRef={prevTypeRef}
                        filterByType={handleFilterByType}
                    />
                </S.Container>

                <SpriteFloatingMenu />
            </S.Section>
        </>
    )
}
