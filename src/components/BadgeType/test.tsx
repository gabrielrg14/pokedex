import { render, screen } from "@testing-library/react"

import BadgeType from "."

describe("<BadgeType />", () => {
    it("should render the grass badge with the text having the correct styles", () => {
        render(<BadgeType type="grass" />)

        const image = screen.getByRole("img", { name: /type grass/i })
        const text = screen.getByText(/grass/i)

        expect(image).toBeInTheDocument()
        expect(image).toHaveAccessibleName()
        expect(text).toBeInTheDocument()
        expect(text).toHaveStyle({
            "background-color": "rgb(99, 187, 91)",
            color: "rgb(255, 255, 255)"
        })
    })
})
