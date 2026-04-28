import { render } from "@testing-library/react"

import { SpinnerLoader } from "."

describe("<SpinnerLoader />", () => {
    it("should render with the SVG icon element", () => {
        const { container } = render(
            <SpinnerLoader size={24} color="var(--dark-color)" />
        )

        const spinner = container.firstChild
        const svgElement = container.querySelector("svg")

        expect(spinner).toBeInTheDocument()
        expect(svgElement).toBeInTheDocument()
    })

    it("should render with correct size and color properties", () => {
        const { container } = render(<SpinnerLoader size={32} color="black" />)

        const spinner = container.firstChild

        expect(spinner).toHaveStyle({ height: "32px" })
        expect(spinner).toHaveStyle({ width: "32px" })
        expect(spinner).toHaveStyle({ color: "black" })
    })

    it("should handle CSS rotation animation and custom color properties", () => {
        const { container } = render(
            <SpinnerLoader size={18} color="var(--light-color)" />
        )

        const spinner = container.firstChild

        expect(spinner).toHaveStyle({ animation: "rotate 1s linear infinite" })
        expect(spinner).toHaveStyle({ color: "var(--light-color)" })
    })
})
