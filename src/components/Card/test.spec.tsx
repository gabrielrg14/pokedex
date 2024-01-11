import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { Card } from "."

describe("<Card />", () => {
    it("should render the pokemon number, name and image", async () => {
        render(<Card pokemon={pokemonMocks.venusaur} />)

        expect(
            await screen.findByRole("img", { name: /venusaur/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/#0003/i)).toBeInTheDocument()
        expect(
            screen.getByRole("heading", { name: /venusaur/i })
        ).toBeInTheDocument()
    })

    it("should render venusaur Card with the link having the correct attributes and the header with your name", () => {
        render(<Card pokemon={pokemonMocks.venusaur} />)

        const link = screen.getByRole("link", { name: /venusaur/i })

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/pokemon/venusaur")
        expect(link).toHaveAccessibleName(/venusaur/i)
    })
})
