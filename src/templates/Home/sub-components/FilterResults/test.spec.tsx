import { render, screen } from "@testing-library/react"
import { pokemonMocks, typeMocks } from "test/mocks"

import { FilterResults, FilterResultsProps } from "."

jest.mock("./TypeList", () => ({
    TypeList: () => <ul data-testid="type-list" />
}))

jest.mock("./PokemonList", () => ({
    PokemonList: () => <div data-testid="pokemon-list" />
}))

describe("<FilterResults />", () => {
    const defaultProps: FilterResultsProps = {
        pokemons: pokemonMocks.list,
        types: typeMocks.list,
        filterByType: jest.fn(),
        isLoading: false
    }

    it("should render when pokemons are provided", () => {
        const { container } = render(<FilterResults {...defaultProps} />)

        expect(container.firstChild).toBeInTheDocument()
    })

    it("should not render when pokemons are not provided", () => {
        const { container } = render(
            <FilterResults {...defaultProps} pokemons={[]} />
        )

        expect(container.firstChild).not.toBeInTheDocument()
    })

    it("should render TypeList component", () => {
        render(<FilterResults {...defaultProps} />)

        expect(screen.getByTestId("type-list")).toBeInTheDocument()
    })

    it("should render PokemonList component", () => {
        render(<FilterResults {...defaultProps} />)

        expect(screen.queryByTestId("pokemon-list")).toBeInTheDocument()
    })
})
