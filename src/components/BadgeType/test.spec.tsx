import { render, screen } from "@testing-library/react"

import BadgeType from "."

describe("<BadgeType />", () => {
    it("should render the grass badge and text with the correct colors", () => {
        render(<BadgeType type="grass" />)

        const image = screen.getByRole("img", { name: /type grass/i })
        const text = screen.getByText(/grass/i)

        expect(image).toBeInTheDocument()
        expect(image).toHaveAccessibleName(/type grass/i)
        expect(text).toBeInTheDocument()
        expect(text).toHaveStyle({
            "background-color": "rgb(99, 187, 91)",
            color: "rgb(255, 255, 255)"
        })
    })

    it("should render the fire badge and text with the correct colors", () => {
        render(<BadgeType type="fire" />)

        const image = screen.getByRole("img", { name: /type fire/i })
        const text = screen.getByText(/fire/i)

        expect(image).toBeInTheDocument()
        expect(image).toHaveAccessibleName(/type fire/i)
        expect(text).toBeInTheDocument()
        expect(text).toHaveStyle({
            "background-color": "rgb(255, 156, 84)",
            color: "rgb(255, 255, 255)"
        })
    })

    it("should render the water badge and text with the correct colors", () => {
        render(<BadgeType type="water" />)

        const image = screen.getByRole("img", { name: /type water/i })
        const text = screen.getByText(/water/i)

        expect(image).toBeInTheDocument()
        expect(image).toHaveAccessibleName(/type water/i)
        expect(text).toBeInTheDocument()
        expect(text).toHaveStyle({
            "background-color": "rgb(77, 144, 213)",
            color: "rgb(255, 255, 255)"
        })
    })
})
