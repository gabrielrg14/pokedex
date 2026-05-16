import { render, screen } from "@testing-library/react"

import { ErrorInfos } from "."

jest.mock("components", () => ({
    PokemonNumber: ({ number }: { number: number }) => (
        <div data-testid="pokemon-number">{number}</div>
    )
}))

describe("<ErrorInfos />", () => {
    it("should render PokemonNumber component with number 404", () => {
        render(<ErrorInfos />)

        expect(screen.getByTestId("pokemon-number")).toBeInTheDocument()
        expect(screen.getByTestId("pokemon-number")).toHaveTextContent("404")
    })

    it("should render not found text", () => {
        render(<ErrorInfos />)

        expect(screen.getByText(/not found/i)).toBeInTheDocument()
    })

    it("should render not found heading", () => {
        render(<ErrorInfos />)

        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<ErrorInfos />)

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
            "Not Found"
        )
    })
})
