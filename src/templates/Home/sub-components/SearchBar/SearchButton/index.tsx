import * as S from "./styles"
import { Search } from "styled-icons/material-outlined"

type SearchButtonProps = {
    search: string
    searchPokemon: (search: string) => void
    isLoading: boolean
}

export const SearchButton = ({
    search,
    searchPokemon,
    isLoading
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
