import { render, screen } from "@testing-library/react"

import { AboutImage } from "."

describe("<AboutImage />", () => {
    it("should have correct src attribute", () => {
        render(<AboutImage />)

        const imageSrc = screen
            .getByRole("img", {
                name: /pokémon thinking/i
            })
            .getAttribute("src")

        expect(imageSrc).toContain(encodeURIComponent("/images/about.png"))
    })

    it("should render with correct attributes", () => {
        render(<AboutImage />)

        const image = screen.getByAltText(/pokémon thinking/i)

        expect(image).toHaveAttribute("alt", "Pokémon thinking")
        expect(image).toHaveAttribute("fetchpriority", "high")
        expect(image).toHaveAttribute("width", "250")
        expect(image).toHaveAttribute("height", "200")
    })
})
