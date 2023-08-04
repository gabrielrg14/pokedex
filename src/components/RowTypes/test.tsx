import { render, screen } from "@testing-library/react"

import RowTypes from "."

describe("<RowTypes />", () => {
    it("should render the grass and poison badges with the texts having the correct styles", () => {
        render(
            <RowTypes
                types={[
                    { type: { name: "grass", url: "" } },
                    { type: { name: "poison", url: "" } }
                ]}
            />
        )

        const imageGrass = screen.getByRole("img", { name: /type grass/i })
        const imagePoison = screen.getByRole("img", { name: /type poison/i })
        const textGrass = screen.getByText(/grass/i)
        const textPoison = screen.getByText(/poison/i)

        expect(imageGrass).toBeInTheDocument()
        expect(imageGrass).toHaveAccessibleName()
        expect(imagePoison).toBeInTheDocument()
        expect(imagePoison).toHaveAccessibleName()
        expect(textGrass).toBeInTheDocument()
        expect(textGrass).toHaveStyle({
            "background-color": "rgb(99, 187, 91)",
            color: "rgb(255, 255, 255)"
        })
        expect(textPoison).toBeInTheDocument()
        expect(textPoison).toHaveStyle({
            "background-color": "rgb(171, 106, 200)",
            color: "rgb(255, 255, 255)"
        })
    })
})
