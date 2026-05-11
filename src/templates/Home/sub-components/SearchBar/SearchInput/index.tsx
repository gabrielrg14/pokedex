import * as S from "./styles"

export type SearchInputProps = {
    search: string
    isLoading: boolean
    setSearch: (search: string) => void
    searchPokemon: (search: string) => void
}

export const SearchInput = ({
    search,
    isLoading,
    setSearch,
    searchPokemon
}: SearchInputProps) => {
    return (
        <S.Input
            name="search-input"
            type="search"
            spellCheck={false}
            placeholder="Search by name or number"
            value={search}
            disabled={isLoading}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) =>
                search !== "" && e.key === "Enter"
                    ? searchPokemon(search)
                    : null
            }
        />
    )
}
