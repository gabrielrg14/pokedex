import { render, screen } from "@testing-library/react"

import { PsyduckCard } from "."

jest.mock("./CardImage", () => ({
    CardImage: () => <div data-testid="card-image" />
}))

jest.mock("./CardContent", () => ({
    CardContent: () => <div data-testid="card-content" />
}))

describe("<PsyduckCard />", () => {
    it("should render with correct href and aria-label attributes", () => {
        render(<PsyduckCard />)

        const link = screen.getByRole("link", { name: /psyduck/i })

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/pokemon/psyduck")
        expect(link).toHaveAttribute("aria-label", "Psyduck")
    })

    it("should render CardImage component", () => {
        render(<PsyduckCard />)

        expect(screen.getByTestId("card-image")).toBeInTheDocument()
    })

    it("should render CardContent component", () => {
        render(<PsyduckCard />)

        expect(screen.getByTestId("card-content")).toBeInTheDocument()
    })
})
