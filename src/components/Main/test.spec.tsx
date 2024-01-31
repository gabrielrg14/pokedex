import { render, screen } from "@testing-library/react"

import { Main } from "components"

describe("<Main />", () => {
    it("should render the main element and the passed children", () => {
        render(
            <Main>
                <section data-testid="section">Test</section>
            </Main>
        )

        expect(screen.getByRole("main")).toBeInTheDocument()
        expect(screen.getByTestId(/section/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
