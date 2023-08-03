import { render, screen } from "@testing-library/react"

import Footer from "."

describe("<Footer />", () => {
    it("should render Footer informations and the link to the PokéAPI with the correct attributes", () => {
        render(<Footer />)

        const apiLink = screen.getByRole("link", { name: /pokéapi/i })

        expect(screen.getByText(/powered by/i)).toBeInTheDocument()
        expect(apiLink).toBeInTheDocument()
        expect(apiLink).toHaveAttribute("href", "https://pokeapi.co/")
        expect(apiLink).toHaveAttribute("target", "_blank")
        expect(apiLink).toHaveAccessibleName()
    })
})
