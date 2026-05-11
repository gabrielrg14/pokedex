import * as S from "./styles"
import { Resource } from "interfaces"
import { Card } from "components"
import { PaginationButton } from "./PaginationButton"

export type PokemonListProps = {
    pokemons: Resource[]
    isLoading: boolean
}

export const PokemonList = ({ pokemons, isLoading }: PokemonListProps) => {
    return (
        <S.Wrapper>
            <S.List>
                {pokemons.map((pokemon, index) => (
                    <S.Item key={index}>
                        <Card name={pokemon.name} />
                    </S.Item>
                ))}
            </S.List>

            <PaginationButton
                pokemonCount={pokemons.length}
                isLoading={isLoading}
            />
        </S.Wrapper>
    )
}
