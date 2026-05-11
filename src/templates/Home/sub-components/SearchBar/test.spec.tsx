import { render, screen } from "@testing-library/react"

import { SearchBar, SearchBarProps } from "."

jest.mock("./SearchInput", () => ({
    SearchInput: () => <input data-testid="search-input" />
}))

jest.mock("./SearchButton", () => ({
    SearchButton: () => <button data-testid="search-button" />
}))

jest.mock("store", () => ({
    useListFilterStore: () => ({
        filter: {
            search: ""
        }
    })
}))

describe("<SearchBar />", () => {
    const defaultProps: SearchBarProps = {
        searchPokemon: jest.fn(),
        isLoading: false
    }

    it("should render SearchInput components", () => {
        render(<SearchBar {...defaultProps} />)

        expect(screen.getByTestId("search-input")).toBeInTheDocument()
    })

    it("should render SearchButton components", () => {
        render(<SearchBar {...defaultProps} />)

        expect(screen.getByTestId("search-button")).toBeInTheDocument()
    })
})
