import { render, screen } from "@testing-library/react"

import { Loading } from "."

describe("<Loading />", () => {
    it("should render the Loading with image and heading", () => {
        render(<Loading />)

        const image = screen.getByRole("img", { name: /loading/i })

        expect(image).toBeInTheDocument()
        expect(image).toHaveAccessibleName(/pikachu loading/i)
        expect(
            screen.getByRole("heading", { name: /loading/i })
        ).toBeInTheDocument()
    })
})
