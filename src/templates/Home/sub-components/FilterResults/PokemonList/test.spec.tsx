import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { PokemonList, PokemonListProps } from "."

jest.mock("components/Card", () => ({
    Card: ({ name }: { name: string }) => <div data-testid={`card-${name}`} />
}))

jest.mock("./PaginationButton", () => ({
    PaginationButton: () => <button data-testid="pagination-button" />
}))

describe("<PokemonList />", () => {
    const mockPokemons = pokemonMocks.list

    const defaultProps: PokemonListProps = {
        pokemons: mockPokemons,
        isLoading: false
    }

    it("should render all pokemon cards in the list", () => {
        render(<PokemonList {...defaultProps} />)

        mockPokemons.forEach((pokemon) => {
            expect(
                screen.getByTestId(`card-${pokemon.name}`)
            ).toBeInTheDocument()
        })
    })

    it("should render correct number of pokemon cards", () => {
        render(<PokemonList {...defaultProps} />)

        expect(screen.getAllByTestId(/card/)).toHaveLength(mockPokemons.length)
    })

    it("should render empty list when no pokemons are provided", () => {
        render(<PokemonList {...defaultProps} pokemons={[]} />)

        expect(screen.queryAllByTestId(/card/)).toHaveLength(0)
    })

    it("should render PaginationButton component", () => {
        render(<PokemonList {...defaultProps} />)

        expect(screen.getByTestId("pagination-button")).toBeInTheDocument()
    })
})
