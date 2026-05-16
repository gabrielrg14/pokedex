import { render, screen } from "@testing-library/react"

import { CardImage } from "."

describe("<CardImage />", () => {
    it("should have the correct src attribute", () => {
        render(<CardImage />)

        const imageSrc = screen
            .getByRole("img", {
                name: /psyduck confused/i
            })
            .getAttribute("src")

        expect(imageSrc).toContain(encodeURIComponent("/images/psyduck.png"))
    })

    it("should render image with correct attributes", () => {
        render(<CardImage />)

        const image = screen.getByAltText(/psyduck confused/i)

        expect(image).toHaveAttribute("alt", "Psyduck confused")
        expect(image).toHaveAttribute("fetchpriority", "high")
        expect(image).toHaveAttribute("width", "256")
        expect(image).toHaveAttribute("height", "256")
    })
})
