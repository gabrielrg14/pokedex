import { render, screen } from "@testing-library/react"

import { HeroTitle } from "."

describe("<HeroTitle />", () => {
    it("should render title text", () => {
        render(<HeroTitle />)

        expect(screen.getByText(/choose your pokémon/i)).toBeInTheDocument()
    })

    it("should render title heading", () => {
        render(<HeroTitle />)

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<HeroTitle />)

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
            "Choose your Pokémon"
        )
    })
})
