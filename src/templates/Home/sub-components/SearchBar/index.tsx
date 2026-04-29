import { useEffect, useState } from "react"

import * as S from "./styles"
import { SearchInput } from "./SearchInput"
import { SearchButton } from "./SearchButton"
import { useListFilterStore } from "store"

type SearchBarProps = {
    searchPokemon: (search: string) => void
    isLoading: boolean
}

export const SearchBar = ({ searchPokemon, isLoading }: SearchBarProps) => {
    const { filter } = useListFilterStore()
    const [search, setSearch] = useState(filter.search)

    useEffect(() => {
        setSearch(filter.search)
    }, [filter.search])

    return (
        <S.Wrapper>
            <SearchInput
                search={search}
                setSearch={setSearch}
                searchPokemon={searchPokemon}
            />
            <SearchButton
                search={search}
                searchPokemon={searchPokemon}
                isLoading={isLoading}
            />
        </S.Wrapper>
    )
}
