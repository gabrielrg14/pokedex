import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { PokemonTemplate, PokemonTemplateProps } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Container: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="container">{children}</div>
    ),
    RowTypes: () => <div data-testid="row-types" />,
    SpriteFloatingMenu: () => <div data-testid="sprite-floating-menu" />
}))

jest.mock("./sub-components", () => ({
    PokemonData: () => <div data-testid="pokemon-data" />,
    PokemonImage: () => <div data-testid="pokemon-image" />,
    PokemonInfo: () => <div data-testid="pokemon-info" />,
    PokemonStats: () => <div data-testid="pokemon-stats" />
}))

describe("<PokemonTemplate />", () => {
    const defaultProps: PokemonTemplateProps = {
        pokemonData: {
            ...pokemonMocks.blastoiseSpecies,
            ...pokemonMocks.blastoise
        }
    }

    it("should render Container component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("container")).toBeInTheDocument()
    })

    it("should render PokemonInfo component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("pokemon-info")).toBeInTheDocument()
    })

    it("should render PokemonImage component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("pokemon-image")).toBeInTheDocument()
    })

    it("should render RowTypes component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("row-types")).toBeInTheDocument()
    })

    it("should render PokemonData component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("pokemon-data")).toBeInTheDocument()
    })

    it("should render PokemonStats component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("pokemon-stats")).toBeInTheDocument()
    })

    it("should render SpriteFloatingMenu component", () => {
        render(<PokemonTemplate {...defaultProps} />)

        expect(screen.getByTestId("sprite-floating-menu")).toBeInTheDocument()
    })
})
