import { render, screen, act, renderHook } from "@testing-library/react"
import { useListFilterStore } from "store"
import { typeMocks } from "test/mocks"

import { TypeCounter, TypeCounterProps } from "."

describe("<TypeCounter />", () => {
    const defaultProps: TypeCounterProps = {
        count: 10,
        isLoading: false
    }

    beforeEach(() => {
        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.typeAll.name)
        })
    })

    it("should render spinner loader when isLoading is true", () => {
        const { container } = render(
            <TypeCounter {...defaultProps} isLoading={true} />
        )

        const spinnerLoader = container.querySelector("svg")
        expect(spinnerLoader).toBeInTheDocument()
    })

    it("should not render spinner loader when isLoading is false", () => {
        const { container } = render(<TypeCounter {...defaultProps} />)

        const spinnerLoader = container.querySelector("svg")
        expect(spinnerLoader).not.toBeInTheDocument()
    })

    it("should render type image and counter when isLoading is false", () => {
        render(<TypeCounter {...defaultProps} />)

        const typeImage = screen.getByRole("img", {
            name: new RegExp(typeMocks.typeAll.name, "i")
        })
        const typeCounter = screen.getByText("10")

        expect(typeImage).toBeInTheDocument()
        expect(typeCounter).toBeInTheDocument()
    })

    it("should not render type image and counter when isLoading is true", () => {
        render(<TypeCounter {...defaultProps} isLoading={true} />)

        const typeImage = screen.queryByRole("img", {
            name: new RegExp(typeMocks.typeAll.name, "i")
        })
        const typeCounter = screen.queryByText("10")

        expect(typeImage).not.toBeInTheDocument()
        expect(typeCounter).not.toBeInTheDocument()
    })

    it("should update type image when filter type changes", () => {
        render(<TypeCounter {...defaultProps} />)

        expect(
            screen.getByRole("img", {
                name: new RegExp(typeMocks.typeAll.name, "i")
            })
        ).toBeInTheDocument()

        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.fire.name)
        })

        expect(
            screen.getByRole("img", {
                name: new RegExp(typeMocks.fire.name, "i")
            })
        ).toBeInTheDocument()
    })

    it("should handle zero count", () => {
        render(<TypeCounter {...defaultProps} count={0} />)

        expect(screen.getByText("0")).toBeInTheDocument()
    })

    it("should handle large count numbers", () => {
        render(<TypeCounter {...defaultProps} count={9999} />)

        expect(screen.getByText("9999")).toBeInTheDocument()
    })
})
