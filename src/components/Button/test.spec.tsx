import { render, screen, fireEvent } from "@testing-library/react"

import { Button } from "."

describe("<Button />", () => {
    it("should render the button element and the passed children", () => {
        render(
            <Button>
                <span data-testid="text">Test</span>
            </Button>
        )

        expect(
            screen.getByRole("button", { name: /test/i })
        ).toBeInTheDocument()
        expect(screen.getByTestId(/text/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })

    it("should call the onClick when the button is clicked", () => {
        const onClickMock = jest.fn()

        render(<Button onClick={onClickMock}>Test</Button>)

        fireEvent.click(screen.getByRole("button", { name: /test/i }))

        expect(onClickMock).toHaveBeenCalled()
    })
})
