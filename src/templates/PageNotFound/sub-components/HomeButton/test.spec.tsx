import { render, screen } from "@testing-library/react"

import { HomeButton } from "."

describe("<HomeButton />", () => {
    it("should render go to home text", () => {
        render(<HomeButton />)

        expect(screen.getByText("Go to Home")).toBeInTheDocument()
    })

    it("should render with correct href and aria-label attributes", () => {
        render(<HomeButton />)

        const link = screen.getByRole("link", { name: /go to home/i })

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/")
        expect(link).toHaveAttribute("aria-label", "Go to Home")
    })
})
