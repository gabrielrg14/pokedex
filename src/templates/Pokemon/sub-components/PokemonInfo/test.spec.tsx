import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { PokemonInfo, PokemonInfoProps } from "."

jest.mock("./Title", () => ({
    Title: () => <div data-testid="title" />
}))

jest.mock("./Genera", () => ({
    Genera: () => <h2 data-testid="genera" />
}))

jest.mock("./Number", () => ({
    Number: () => <h3 data-testid="number" />
}))

describe("<PokemonInfo />", () => {
    const defaultProps: PokemonInfoProps = {
        name: pokemonMocks.blastoise.name,
        number: pokemonMocks.blastoise.id,
        cries: pokemonMocks.blastoise.cries,
        genera: pokemonMocks.blastoiseSpecies.genera
    }

    it("should render Title component", () => {
        render(<PokemonInfo {...defaultProps} />)

        expect(screen.getByTestId("title")).toBeInTheDocument()
    })

    it("should render Genera component", () => {
        render(<PokemonInfo {...defaultProps} />)

        expect(screen.getByTestId("genera")).toBeInTheDocument()
    })

    it("should render Number component", () => {
        render(<PokemonInfo {...defaultProps} />)

        expect(screen.getByTestId("number")).toBeInTheDocument()
    })
})
