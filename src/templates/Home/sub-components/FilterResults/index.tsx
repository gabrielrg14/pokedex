import * as S from "./styles"
import { Resource } from "interfaces"
import { TypeList } from "./TypeList"
import { PokemonList } from "./PokemonList"

export type FilterResultsProps = {
    pokemons: Resource[]
    types: Resource[]
    filterByType: (type: string) => void
    isLoading: boolean
}

export const FilterResults = ({
    pokemons,
    types,
    filterByType,
    isLoading
}: FilterResultsProps) => {
    if (pokemons.length <= 0) return null

    return (
        <S.Wrapper>
            <TypeList types={types} filterByType={filterByType} />
            <PokemonList pokemons={pokemons} isLoading={isLoading} />
        </S.Wrapper>
    )
}
