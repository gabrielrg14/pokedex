import { render, screen } from "@testing-library/react"

import Footer from "."

describe("<Footer />", () => {
    it("should render the powered by text and the link to the PokéAPI", () => {
        render(<Footer />)

        expect(screen.getByText(/powered by/i)).toBeInTheDocument()
        expect(
            screen.getByRole("link", { name: /pokéapi/i })
        ).toBeInTheDocument()
    })

    it("should have the link to the PokéAPI with the correct attributes and accessible name", () => {
        render(<Footer />)

        const apiLink = screen.getByRole("link", { name: /pokéapi/i })

        expect(apiLink).toHaveAttribute("href", "https://pokeapi.co/")
        expect(apiLink).toHaveAttribute("target", "_blank")
        expect(apiLink).toHaveAccessibleName(/go to the pokéapi/i)
    })
})
