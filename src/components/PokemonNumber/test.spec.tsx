import { render, screen } from "@testing-library/react"

import PokemonNumber from "."

describe("<PokemonNumber />", () => {
    it("should render the pokémon number with #", () => {
        render(<PokemonNumber number={3} />)

        const number = screen.getByText(/3/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#")
    })

    it("should render #0001 when passing the number 1", () => {
        render(<PokemonNumber number={1} />)

        const number = screen.getByText(/1/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#0001")
    })

    it("should render #0010 when passing the number 10", () => {
        render(<PokemonNumber number={10} />)

        const number = screen.getByText(/10/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#0010")
    })

    it("should render #0100 when passing the number 100", () => {
        render(<PokemonNumber number={100} />)

        const number = screen.getByText(/100/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#0100")
    })

    it("should render #1000 when passing the number 1000", () => {
        render(<PokemonNumber number={1000} />)

        const number = screen.getByText(/1000/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#1000")
    })

    it("should render #10000 when passing the number 10000", () => {
        render(<PokemonNumber number={10000} />)

        const number = screen.getByText(/10000/i)

        expect(number).toBeInTheDocument()
        expect(number).toHaveTextContent("#10000")
    })
})
