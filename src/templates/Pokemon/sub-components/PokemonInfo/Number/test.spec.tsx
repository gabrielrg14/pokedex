import { render, screen } from "@testing-library/react"

import { Number, NumberProps } from "."
import { pokemonMocks } from "test/mocks"

jest.mock("components", () => ({
    PokemonNumber: ({ number }: { number: number }) => (
        <span data-testid="pokemon-number">{number}</span>
    )
}))

describe("<Number />", () => {
    const defaultProps: NumberProps = {
        number: pokemonMocks.blastoise.id
    }

    it("should render number text", () => {
        render(<Number {...defaultProps} />)

        expect(screen.getByText("9")).toBeInTheDocument()
    })

    it("should render PokemonNumber component with number 9", () => {
        render(<Number {...defaultProps} />)

        expect(screen.getByTestId("pokemon-number")).toBeInTheDocument()
        expect(screen.getByTestId("pokemon-number")).toHaveTextContent("9")
    })
})
