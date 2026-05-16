import { render, screen } from "@testing-library/react"

import { AboutTitle } from "."

describe("<AboutTitle />", () => {
    it("should render title heading", () => {
        render(<AboutTitle />)

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render title text", () => {
        render(<AboutTitle />)

        expect(screen.getByText(/about the pokédex/i)).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<AboutTitle />)

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
            "About the Pokédex"
        )
    })
})
