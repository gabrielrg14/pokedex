import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { Genera, GeneraProps } from "."

describe("<Genera />", () => {
    const defaultProps: GeneraProps = {
        genera: pokemonMocks.blastoiseSpecies.genera
    }

    it("should render en genus", () => {
        render(<Genera {...defaultProps} />)

        expect(screen.getByText(/shellfish pokémon/i)).toBeInTheDocument()
    })

    it("should not render es genus", () => {
        render(<Genera {...defaultProps} />)

        expect(screen.queryByText(/pokémon armazón/i)).not.toBeInTheDocument()
    })

    it("should not render it genus", () => {
        render(<Genera {...defaultProps} />)

        expect(screen.queryByText(/pokémon crostaceo/i)).not.toBeInTheDocument()
    })

    it("should not render when genera is undefined", () => {
        const { container } = render(<Genera genera={undefined} />)

        expect(container.firstChild).toBeNull()
    })

    it("should not render when genera is an empty array", () => {
        const { container } = render(<Genera genera={[]} />)

        expect(container.firstChild).toBeNull()
    })
})
