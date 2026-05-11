import { render, screen, fireEvent } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"

import { SearchInput, SearchInputProps } from "."

describe("<SearchInput />", () => {
    const mockSetSearch = jest.fn()
    const mockSearchPokemon = jest.fn()

    const defaultProps: SearchInputProps = {
        search: "",
        setSearch: mockSetSearch,
        searchPokemon: mockSearchPokemon,
        isLoading: false
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("should render with correct attributes", () => {
        render(<SearchInput {...defaultProps} />)

        const input = screen.getByRole("searchbox")

        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("name", "search-input")
        expect(input).toHaveAttribute("type", "search")
        expect(input).toHaveAttribute("spellcheck", "false")
        expect(input).toHaveAttribute("placeholder", "Search by name or number")
    })

    it("should render search value in input", () => {
        render(
            <SearchInput
                {...defaultProps}
                search={pokemonMocks.venusaur.name}
            />
        )

        const input = screen.getByRole("searchbox")

        expect(input).toHaveValue(pokemonMocks.venusaur.name)
    })

    it("should handle numeric search value in the input for pokemon number", () => {
        render(<SearchInput {...defaultProps} />)

        const input = screen.getByRole("searchbox")
        fireEvent.change(input, { target: { value: "25" } })

        expect(mockSetSearch).toHaveBeenCalledWith("25")
    })

    it("should call setSearch when input value changes", () => {
        render(<SearchInput {...defaultProps} />)

        const input = screen.getByRole("searchbox")
        fireEvent.change(input, {
            target: { value: pokemonMocks.charizard.name }
        })

        expect(mockSetSearch).toHaveBeenCalledWith(pokemonMocks.charizard.name)
        expect(mockSetSearch).toHaveBeenCalledTimes(1)
    })

    it("should not call setSearch when enter key is pressed and search is empty", () => {
        render(<SearchInput {...defaultProps} />)

        const input = screen.getByRole("searchbox")
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" })

        expect(mockSearchPokemon).not.toHaveBeenCalled()
    })

    it("should call searchPokemon when enter key is pressed", () => {
        render(
            <SearchInput
                {...defaultProps}
                search={pokemonMocks.blastoise.name}
            />
        )

        const input = screen.getByRole("searchbox")
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" })

        expect(mockSearchPokemon).toHaveBeenCalledWith(
            pokemonMocks.blastoise.name
        )
        expect(mockSearchPokemon).toHaveBeenCalledTimes(1)
    })

    it("should not call searchPokemon when a key other than enter is pressed", () => {
        render(
            <SearchInput
                {...defaultProps}
                search={pokemonMocks.blastoise.name}
            />
        )

        const input = screen.getByRole("searchbox")
        fireEvent.keyDown(input, { key: "Space", code: "Space" })

        expect(mockSearchPokemon).not.toHaveBeenCalled()
    })

    it("should disable input when isLoading is true", () => {
        render(<SearchInput {...defaultProps} isLoading={true} />)

        expect(screen.getByRole("searchbox")).toBeDisabled()
    })

    it("should not disable input when isLoading is false", () => {
        render(<SearchInput {...defaultProps} />)

        expect(screen.getByRole("searchbox")).not.toBeDisabled()
    })
})
