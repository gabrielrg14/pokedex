import { render, screen } from "@testing-library/react"
import { pokemonMocks, typeMocks } from "test/mocks"

import { HomeTemplate, HomeTemplateProps } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Container: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="container">{children}</div>
    ),
    SpriteFloatingMenu: () => <div data-testid="sprite-floating-menu" />
}))

jest.mock("./sub-components", () => ({
    HeroTitle: () => <div data-testid="hero-title" />,
    SearchBar: () => <div data-testid="search-bar" />,
    TypeCounter: () => <div data-testid="type-counter" />,
    FilterResults: () => <div data-testid="filter-results" />,
    SearchError: () => <div data-testid="search-error" />
}))

jest.mock("store", () => ({
    useListFilterStore: () => ({
        filter: {
            scroll: 0
        },
        setSearchFilter: jest.fn(),
        setTypeFilter: jest.fn(),
        setScrollFilter: jest.fn()
    })
}))

describe("<HomeTemplate />", () => {
    const defaultProps: HomeTemplateProps = {
        pokemons: pokemonMocks.list,
        types: typeMocks.list,
        isLoading: false,
        isSearchError: false
    }

    it("should call window.scrollTo with filter.scroll value", () => {
        const scrollToMock = jest.fn()

        Object.defineProperty(window, "scrollTo", {
            writable: true,
            value: scrollToMock
        })

        render(<HomeTemplate {...defaultProps} />)

        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth"
        })
        expect(scrollToMock).toHaveBeenCalledTimes(1)
    })

    it("should render HeroTitle component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("hero-title")).toBeInTheDocument()
    })

    it("should render Container component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("container")).toBeInTheDocument()
    })

    it("should render SearchBar component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("search-bar")).toBeInTheDocument()
    })

    it("should render TypeCounter component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("type-counter")).toBeInTheDocument()
    })

    it("should render FilterResults component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("filter-results")).toBeInTheDocument()
    })

    it("should render SearchError component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("search-error")).toBeInTheDocument()
    })

    it("should render SpriteFloatingMenu component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("sprite-floating-menu")).toBeInTheDocument()
    })
})
