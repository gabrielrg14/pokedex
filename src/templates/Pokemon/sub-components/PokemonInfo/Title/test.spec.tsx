import { render, screen } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { Title, TitleProps } from "."

jest.mock("./CryButton", () => ({
    CryButton: () => <button data-testid="cry-button" />
}))

describe("<Title />", () => {
    const defaultProps: TitleProps = {
        name: pokemonMocks.blastoise.name,
        cries: pokemonMocks.blastoise.cries
    }

    it("should render pokemon name", () => {
        render(<Title {...defaultProps} />)

        expect(screen.getByText(/blastoise/i)).toBeInTheDocument()
    })

    it("should render CryButton component", () => {
        render(<Title {...defaultProps} />)

        expect(screen.getByTestId("cry-button")).toBeInTheDocument()
    })
})
