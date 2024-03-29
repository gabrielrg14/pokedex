import { render, screen } from "@testing-library/react"

import { Layout } from "."

describe("<Layout />", () => {
    it("should render the main element and the passed children", () => {
        render(
            <Layout>
                <div data-testid="page">Test</div>
            </Layout>
        )

        expect(screen.getByRole("main")).toBeInTheDocument()
        expect(screen.getByTestId(/page/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
