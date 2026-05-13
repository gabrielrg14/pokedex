import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { PokemonStats, PokemonStatsProps } from "."

jest.mock("components", () => ({
    StatBar: () => <div data-testid="stat-bar" />
}))

jest.mock("utils/formatName", () => ({
    formatName: (name: string) => name
}))

describe("<PokemonStats />", () => {
    const defaultProps: PokemonStatsProps = {
        stats: pokemonMocks.blastoise.stats,
        types: pokemonMocks.blastoise.types
    }

    it("should render Stats title", () => {
        render(<PokemonStats {...defaultProps} />)

        expect(screen.getByText("Stats")).toBeInTheDocument()
    })

    it("should render correct number of stats", () => {
        render(<PokemonStats {...defaultProps} />)

        expect(screen.getAllByTestId(/stat-bar/)).toHaveLength(
            pokemonMocks.blastoise.stats.length
        )
    })

    it("should render each stat with name and base stat", () => {
        render(<PokemonStats {...defaultProps} />)

        pokemonMocks.blastoise.stats?.forEach((item) => {
            expect(screen.getByText(item.stat.name)).toBeInTheDocument()
            expect(
                screen.getByText(item.base_stat.toString())
            ).toBeInTheDocument()
        })
    })

    it("should render StatBar component", () => {
        render(
            <PokemonStats
                {...defaultProps}
                stats={[pokemonMocks.blastoise.stats[0]]}
            />
        )

        expect(screen.getByTestId(/stat-bar/)).toBeInTheDocument()
    })

    it("should not render StatBar component when stats is empty", () => {
        render(<PokemonStats {...defaultProps} stats={[]} />)

        expect(screen.getByText("Stats")).toBeInTheDocument()
        expect(screen.queryByTestId(/stat-bar/)).not.toBeInTheDocument()
    })
})
