import * as S from "./styles"

type SearchInputProps = {
    search: string
    setSearch: (search: string) => void
    searchPokemon: (search: string) => void
}

export const SearchInput = ({
    search,
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
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) =>
                e.key === "Enter" ? searchPokemon(search) : null
            }
        />
    )
}
