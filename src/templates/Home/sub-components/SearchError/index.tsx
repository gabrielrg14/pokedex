import * as S from "./styles"
import { Button } from "components"

export type SearchErrorProps = {
    isSearchError: boolean
    isLoading: boolean
    prevSearchRef: React.MutableRefObject<string>
    prevTypeRef: React.MutableRefObject<string>
    filterByType: (type: string) => void
}

export const SearchError = ({
    isSearchError,
    isLoading,
    prevSearchRef,
    prevTypeRef,
    filterByType
}: SearchErrorProps) => {
    if (!isSearchError || isLoading) return null

    return (
        <S.Wrapper>
            <S.TextNotFound>
                Pokémon{" "}
                <strong>
                    {'"'}
                    {prevSearchRef.current}
                    {'"'}
                </strong>{" "}
                not found! <br />
                <small>
                    Try again by searching for your full name or your Pokédex
                    number.
                </small>
            </S.TextNotFound>

            <Button onClick={() => filterByType(prevTypeRef.current)}>
                Back to list
            </Button>
        </S.Wrapper>
    )
}
