import { render, screen, fireEvent } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { SearchButton, SearchButtonProps } from "."

describe("<SearchButton />", () => {
    const mockSearch = pokemonMocks.venusaur.name
    const mockSearchPokemon = jest.fn()

    const defaultProps: SearchButtonProps = {
        search: mockSearch,
        searchPokemon: mockSearchPokemon,
        isLoading: false
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("should render button with title, type and icon", () => {
        const { container } = render(<SearchButton {...defaultProps} />)

        const button = screen.getByRole("button", { name: /search/i })
        const icon = container.querySelector("svg")

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("title", "Search")
        expect(button).toHaveAttribute("type", "button")
        expect(icon).toBeInTheDocument()
    })

    it("should call searchPokemon with search value when button is clicked", () => {
        render(<SearchButton {...defaultProps} />)

        fireEvent.click(screen.getByRole("button", { name: /search/i }))

        expect(mockSearchPokemon).toHaveBeenCalledWith(mockSearch)
        expect(mockSearchPokemon).toHaveBeenCalledTimes(1)
    })

    it("should not call searchPokemon when button is clicked and search is empty", () => {
        render(<SearchButton {...defaultProps} search="" />)

        fireEvent.click(screen.getByRole("button", { name: /search/i }))

        expect(mockSearchPokemon).not.toHaveBeenCalled()
    })

    it("should not call searchPokemon when button is clicked and isLoading is true", () => {
        render(<SearchButton {...defaultProps} isLoading={true} />)

        fireEvent.click(screen.getByRole("button", { name: /search/i }))

        expect(mockSearchPokemon).not.toHaveBeenCalled()
    })

    it("should disable button when search is empty", () => {
        render(<SearchButton {...defaultProps} search="" />)

        expect(screen.getByRole("button", { name: /search/i })).toBeDisabled()
    })

    it("should disable button when isLoading is true", () => {
        render(<SearchButton {...defaultProps} isLoading={true} />)

        expect(screen.getByRole("button", { name: /search/i })).toBeDisabled()
    })

    it("should not disable button when search is not empty and isLoading is false", () => {
        render(<SearchButton {...defaultProps} />)

        expect(
            screen.getByRole("button", { name: /search/i })
        ).not.toBeDisabled()
    })
})
