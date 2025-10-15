import { render, screen } from "@testing-library/react"

import { Header } from "."

describe("<Header />", () => {
    it("should render the pokédex logo image", () => {
        render(<Header />)

        const logoImage = screen.getByRole("img", { name: /pokédex logo/i })

        expect(logoImage).toBeInTheDocument()
        expect(logoImage).toHaveAccessibleName(/pokédex logo/i)
    })

    it("should render a link to the home page", () => {
        render(<Header />)

        const homeLink = screen.getByRole("link", { name: /go to home/i })

        expect(homeLink).toBeInTheDocument()
        expect(homeLink).toHaveAttribute("href", "/")
        expect(homeLink).toHaveAccessibleName(/go to home/i)
    })

    it("should render a link to the about page", () => {
        render(<Header />)

        const aboutLink = screen.getByRole("link", { name: /about/i })

        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink).toHaveAttribute("href", "/about")
        expect(aboutLink).toHaveAccessibleName(/go to about page/i)
    })
})
