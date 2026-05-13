import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { PokemonData, PokemonDataProps } from "."

describe("<PokemonData />", () => {
    const defaultProps: PokemonDataProps = {
        height: pokemonMocks.blastoise.height,
        weight: pokemonMocks.blastoise.weight,
        generation: pokemonMocks.blastoiseSpecies.generation,
        shape: pokemonMocks.blastoiseSpecies.shape,
        habitat: pokemonMocks.blastoiseSpecies.habitat,
        abilities: pokemonMocks.blastoise.abilities
    }

    it("should render height data formatted", () => {
        render(<PokemonData {...defaultProps} />)

        expect(screen.getByText("Height")).toBeInTheDocument()
        expect(screen.getByText("1.6m")).toBeInTheDocument()
    })

    it("should render weight data formatted", () => {
        render(<PokemonData {...defaultProps} />)

        expect(screen.getByText("Weight")).toBeInTheDocument()
        expect(screen.getByText("85.5kg")).toBeInTheDocument()
    })

    it("should render generation data", () => {
        render(<PokemonData {...defaultProps} />)

        expect(screen.getByText("Gen I")).toBeInTheDocument()
        expect(screen.getByText(/kanto/i)).toBeInTheDocument()
    })

    it("should render shape data", () => {
        render(<PokemonData {...defaultProps} />)

        expect(screen.getByText("Shape")).toBeInTheDocument()
        expect(screen.getByText(/upright/i)).toBeInTheDocument()
    })

    it("should render habitat data", () => {
        render(<PokemonData {...defaultProps} />)

        expect(screen.getByText("Habitat")).toBeInTheDocument()
        expect(screen.getByText(/waters edge/i)).toBeInTheDocument()
    })

    it("should render abilities data", () => {
        render(<PokemonData {...defaultProps} />)

        expect(screen.getByText("Abilities")).toBeInTheDocument()
        expect(screen.getByText(/torrent/i)).toBeInTheDocument()
        expect(screen.getByText(/rain dish/i)).toBeInTheDocument()
    })

    it("should not render height data when height is negative", () => {
        render(
            <PokemonData
                {...defaultProps}
                height={-pokemonMocks.blastoise.height}
            />
        )

        expect(screen.queryByText("Height")).not.toBeInTheDocument()
    })

    it("should not render weight data when weight is negative", () => {
        render(
            <PokemonData
                {...defaultProps}
                weight={-pokemonMocks.blastoise.weight}
            />
        )

        expect(screen.queryByText("Weight")).not.toBeInTheDocument()
    })

    it("should not render generation data when generation is undefined", () => {
        render(<PokemonData {...defaultProps} generation={undefined} />)

        expect(screen.queryByText("Gen I")).not.toBeInTheDocument()
    })

    it("should not render shape data when shape data is undefined", () => {
        render(<PokemonData {...defaultProps} shape={undefined} />)

        expect(screen.queryByText("Shape")).not.toBeInTheDocument()
    })

    it("should not render habitat data when habitat is undefined", () => {
        render(<PokemonData {...defaultProps} habitat={undefined} />)

        expect(screen.queryByText("Habitat")).not.toBeInTheDocument()
    })

    it("should not render abilities data when abilities is empty", () => {
        render(<PokemonData {...defaultProps} abilities={[]} />)

        expect(screen.queryByText("Abilities")).not.toBeInTheDocument()
    })
})
