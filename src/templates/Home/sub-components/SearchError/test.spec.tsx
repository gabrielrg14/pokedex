import { render, screen, fireEvent } from "@testing-library/react"
import { pokemonMocks, typeMocks } from "test/mocks"

import { SearchError, SearchErrorProps } from "."

describe("<SearchError />", () => {
    const createMockRef = (value: string) => {
        return {
            current: value
        } as React.MutableRefObject<string>
    }

    const mockPrevSearchRef = createMockRef(pokemonMocks.charizard.name)
    const mockPrevTypeRef = createMockRef(typeMocks.fire.name)
    const mockFilterByType = jest.fn()

    const defaultProps: SearchErrorProps = {
        isSearchError: true,
        isLoading: false,
        prevSearchRef: mockPrevSearchRef,
        prevTypeRef: mockPrevTypeRef,
        filterByType: mockFilterByType
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("should not render when isLoading is true", () => {
        const { container } = render(
            <SearchError {...defaultProps} isLoading={true} />
        )

        expect(container.firstChild).toBeNull()
    })

    it("should not render when isSearchError is false", () => {
        const { container } = render(
            <SearchError {...defaultProps} isSearchError={false} />
        )

        expect(container.firstChild).toBeNull()
    })

    it("should render error message with searched pokemon name", () => {
        render(<SearchError {...defaultProps} />)

        expect(screen.getByText(/pokémon/i)).toBeInTheDocument()
        expect(
            screen.getByText(new RegExp(pokemonMocks.charizard.name, "i"))
        ).toBeInTheDocument()
        expect(screen.getByText(/not found!/i)).toBeInTheDocument()
    })

    it("should render searched pokemon name with quotes", () => {
        render(<SearchError {...defaultProps} />)

        const textContent = screen.getByText(/pokémon/i).textContent

        expect(textContent).toContain(mockPrevSearchRef.current)
        expect(textContent).toContain('"')
    })

    it("should render try again message", () => {
        render(<SearchError {...defaultProps} />)

        expect(
            screen.getByText(
                /try again by searching for your full name or your pokédex number/i
            )
        ).toBeInTheDocument()
    })

    it("should render back to list button", () => {
        render(<SearchError {...defaultProps} />)

        expect(
            screen.getByRole("button", { name: /back to list/i })
        ).toBeInTheDocument()
    })

    it("should call filterByType with previous type when back to list button is clicked", () => {
        render(<SearchError {...defaultProps} />)

        fireEvent.click(screen.getByRole("button", { name: /back to list/i }))

        expect(mockFilterByType).toHaveBeenCalledWith(mockPrevTypeRef.current)
        expect(mockFilterByType).toHaveBeenCalledTimes(1)
    })
})
