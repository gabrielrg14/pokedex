import { render, screen } from "@testing-library/react"

import { PokemonNumber } from "."

describe("<PokemonNumber />", () => {
    it("should render the pokémon number with #", () => {
        render(<PokemonNumber number={3} />)

        const number3 = screen.getByText(/3/i)

        expect(number3).toBeInTheDocument()
        expect(number3).toHaveTextContent(/#/i)
    })

    it("should render #0001 when passing the number 1", () => {
        render(<PokemonNumber number={1} />)

        const number1 = screen.getByText(/1/i)

        expect(number1).toBeInTheDocument()
        expect(number1).toHaveTextContent(/#0001/i)
    })

    it("should render #0010 when passing the number 10", () => {
        render(<PokemonNumber number={10} />)

        const number10 = screen.getByText(/10/i)

        expect(number10).toBeInTheDocument()
        expect(number10).toHaveTextContent(/#0010/i)
    })

    it("should render #0100 when passing the number 100", () => {
        render(<PokemonNumber number={100} />)

        const number100 = screen.getByText(/100/i)

        expect(number100).toBeInTheDocument()
        expect(number100).toHaveTextContent(/#0100/i)
    })

    it("should render #1000 when passing the number 1000", () => {
        render(<PokemonNumber number={1000} />)

        const number1000 = screen.getByText(/1000/i)

        expect(number1000).toBeInTheDocument()
        expect(number1000).toHaveTextContent(/#1000/i)
    })

    it("should render #10000 when passing the number 10000", () => {
        render(<PokemonNumber number={10000} />)

        const number10000 = screen.getByText(/10000/i)

        expect(number10000).toBeInTheDocument()
        expect(number10000).toHaveTextContent(/#10000/i)
    })
})
