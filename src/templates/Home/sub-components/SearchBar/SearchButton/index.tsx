import * as S from "./styles"
import { Search } from "styled-icons/material-outlined"

type SearchButtonProps = {
    search: string
    isLoading: boolean
    searchPokemon: (search: string) => void
}

export const SearchButton = ({
    search,
    isLoading,
    searchPokemon
}: SearchButtonProps) => {
    return (
        <S.Button
            type="button"
            title="Search"
            onClick={() => searchPokemon(search)}
            disabled={search === "" || isLoading}
        >
            <Search size={18} />
        </S.Button>
    )
}
