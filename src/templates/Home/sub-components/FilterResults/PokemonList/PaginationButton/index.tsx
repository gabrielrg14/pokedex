import { Button, SpinnerLoader } from "components"
import { useListFilterStore } from "store"
import { POKEMON_PAGINATION_LIMIT } from "common"

export type PaginationButtonProps = {
    pokemonCount: number
    isLoading: boolean
}

export const PaginationButton = ({
    pokemonCount,
    isLoading
}: PaginationButtonProps) => {
    const {
        filter: { type, limit },
        setScrollFilter,
        setLimitFilter
    } = useListFilterStore()

    if (type !== "all" || pokemonCount < POKEMON_PAGINATION_LIMIT) return null

    const nextPokemonPagination = (limit: number) => {
        setScrollFilter(window.pageYOffset + 780) // scroll to next pokemon pagination
        setLimitFilter(limit + POKEMON_PAGINATION_LIMIT)
    }

    return (
        <Button
            onClick={() => nextPokemonPagination(limit)}
            disabled={isLoading}
        >
            {isLoading ? (
                <SpinnerLoader size={18} color="var(----light-color)" />
            ) : (
                <span>Load more Pokémon</span>
            )}
        </Button>
    )
}
