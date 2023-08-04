import { render, screen } from "@testing-library/react"

import PokemonNumber from "."

describe("<PokemonNumber />", () => {
    it("should render pokémon number with the #", () => {
        render(<PokemonNumber number={3} />)

        const number = screen.getByText(/3/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#")
    })
})
