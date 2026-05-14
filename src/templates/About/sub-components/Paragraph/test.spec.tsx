import { render, screen } from "@testing-library/react"

import { Paragraph } from "."

describe("<Paragraph />", () => {
    it("should render the text passed", () => {
        const testText = "This is a test paragraph about Pokédex"

        render(<Paragraph text={testText} />)

        expect(screen.getByText(testText)).toBeInTheDocument()
    })

    it("should render paragraph element", () => {
        const { container } = render(<Paragraph text="Test" />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.tagName).toBe("P")
    })

    it("should render paragraph with correct text", () => {
        const testText = "Test paragraph text"

        const { container } = render(<Paragraph text={testText} />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.textContent).toBe(testText)
    })

    it("should render empty paragraph when text is empty", () => {
        const { container } = render(<Paragraph text="" />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.textContent).toBe("")
    })
})
