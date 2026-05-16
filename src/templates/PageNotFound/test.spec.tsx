import { render, screen } from "@testing-library/react"

import { PageNotFoundTemplate } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Container: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="container">{children}</div>
    )
}))

jest.mock("./sub-components", () => ({
    HomeButton: () => <a data-testid="home-button" />,
    PsyduckCard: () => <a data-testid="psyduck-card" />
}))

describe("<PageNotFoundTemplate />", () => {
    it("should render Container component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("container")).toBeInTheDocument()
    })

    it("should render PsyduckCard component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("psyduck-card")).toBeInTheDocument()
    })

    it("should render HomeButton component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("home-button")).toBeInTheDocument()
    })
})
