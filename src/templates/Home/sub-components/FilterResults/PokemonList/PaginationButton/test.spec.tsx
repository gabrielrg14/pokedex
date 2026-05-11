import {
    render,
    screen,
    fireEvent,
    renderHook,
    act
} from "@testing-library/react"
import { useListFilterStore } from "store"
import { POKEMON_PAGINATION_LIMIT } from "common"
import { typeMocks } from "test/mocks"

import { PaginationButton, PaginationButtonProps } from "."

jest.mock("components/SpinnerLoader", () => ({
    SpinnerLoader: () => <svg data-testid="spinner-loader" />
}))

describe("<PaginationButton />", () => {
    let mockSetScrollFilter: jest.SpyInstance
    let mockSetLimitFilter: jest.SpyInstance

    const defaultProps: PaginationButtonProps = {
        pokemonCount: 12,
        isLoading: false
    }

    beforeEach(() => {
        jest.clearAllMocks()

        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.typeAll.name)
            result.current.setLimitFilter(12)
        })

        mockSetScrollFilter = jest
            .spyOn(result.current, "setScrollFilter")
            .mockImplementation(() => jest.fn())

        mockSetLimitFilter = jest
            .spyOn(result.current, "setLimitFilter")
            .mockImplementation(() => jest.fn())
    })

    it("should not render when type is not all", () => {
        const { container } = render(<PaginationButton {...defaultProps} />)

        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.fire.name)
        })

        expect(container.firstChild).toBeNull()
    })

    it("should not render when pokemonCount is less than POKEMON_PAGINATION_LIMIT", () => {
        const { container } = render(
            <PaginationButton
                {...defaultProps}
                pokemonCount={POKEMON_PAGINATION_LIMIT - 1}
            />
        )

        expect(container.firstChild).toBeNull()
    })

    it("should render when type is all and pokemonCount is greater than POKEMON_PAGINATION_LIMIT", () => {
        render(
            <PaginationButton
                {...defaultProps}
                pokemonCount={POKEMON_PAGINATION_LIMIT + 1}
            />
        )

        expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("should render load more text when isLoading is false", () => {
        render(<PaginationButton {...defaultProps} />)

        expect(screen.getByText(/load more pokémon/i)).toBeInTheDocument()
    })

    it("should not render load more text when isLoading is true", () => {
        render(<PaginationButton {...defaultProps} isLoading={true} />)

        expect(screen.queryByText(/load more pokémon/i)).not.toBeInTheDocument()
    })

    it("should render spinner loader when isLoading is true", () => {
        render(<PaginationButton {...defaultProps} isLoading={true} />)

        expect(screen.getByTestId("spinner-loader")).toBeInTheDocument()
    })

    it("should disable button when isLoading is true", () => {
        render(<PaginationButton {...defaultProps} isLoading={true} />)

        expect(screen.getByRole("button")).toBeDisabled()
    })

    it("should not disable button when isLoading is false", () => {
        render(<PaginationButton {...defaultProps} />)

        expect(screen.getByRole("button")).not.toBeDisabled()
    })

    it("should call setLimitFilter with correct limit value when button is clicked", () => {
        render(<PaginationButton {...defaultProps} />)

        const { result } = renderHook(() => useListFilterStore())

        fireEvent.click(screen.getByRole("button"))

        expect(mockSetLimitFilter).toHaveBeenCalledWith(
            result.current.filter.limit + POKEMON_PAGINATION_LIMIT
        )
    })

    it("should call setScrollFilter with correct scroll offset value when button is clicked", () => {
        render(<PaginationButton {...defaultProps} />)

        fireEvent.click(screen.getByRole("button"))

        expect(mockSetScrollFilter).toHaveBeenCalledWith(
            window.pageYOffset + 780
        )
    })
})
