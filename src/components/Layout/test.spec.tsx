import { render, screen } from "@testing-library/react"

import Layout from "."

describe("<Layout />", () => {
    it("should render the layout with the passed children", () => {
        render(
            <Layout>
                <div data-testid="layout">Test</div>
            </Layout>
        )

        expect(screen.getByTestId(/layout/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
