import { render, screen } from "@testing-library/react"

import { AboutTemplate } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("./sub-components", () => ({
    AboutImage: () => <div data-testid="about-image" />,
    AboutTitle: () => <h1 data-testid="about-title" />,
    Paragraph: () => <p data-testid="paragraph" />
}))

describe("<AboutTemplate />", () => {
    it("should render AboutImage component", () => {
        render(<AboutTemplate />)

        expect(screen.getByTestId("about-image")).toBeInTheDocument()
    })

    it("should render AboutTitle component", () => {
        render(<AboutTemplate />)

        expect(screen.getByTestId("about-title")).toBeInTheDocument()
    })

    it("should render Paragraph component", () => {
        render(<AboutTemplate />)

        expect(screen.getAllByTestId("paragraph")).toHaveLength(2)
    })
})
