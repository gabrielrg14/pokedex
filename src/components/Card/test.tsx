import { render, screen } from "@testing-library/react"

import Card from "."

const venusaur = {
    id: 3,
    name: "venusaur",
    url: "",
    sprites: {
        front_default: "",
        front_shiny: "",
        other: {
            "official-artwork": {
                front_default: "",
                front_shiny: ""
            }
        }
    },
    height: 20,
    weight: 1000,
    types: [],
    abilities: [],
    stats: []
}

describe("<Card />", () => {
    it("should render venusaur Card with the link having the correct attributes and the header with your name", () => {
        render(<Card pokemon={venusaur} />)

        const link = screen.getByRole("link", { name: /venusaur/i })

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/pokemon/venusaur")
        expect(link).toHaveAccessibleName()
        expect(
            screen.getByRole("heading", { name: /venusaur/i })
        ).toBeInTheDocument()
    })
})
