import { render, screen } from "@testing-library/react"

import { Container } from "."

describe("<Container />", () => {
    it("should render the the passed children", () => {
        render(
            <Container>
                <div data-testid="content">Test</div>
            </Container>
        )

        expect(screen.getByTestId(/content/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
