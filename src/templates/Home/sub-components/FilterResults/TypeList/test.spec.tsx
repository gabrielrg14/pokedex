import {
    render,
    screen,
    act,
    renderHook,
    fireEvent
} from "@testing-library/react"
import { useListFilterStore } from "store"
import { typeMocks } from "test/mocks"

import { TypeList, TypeListProps } from "."

describe("<TypeList />", () => {
    const mockFilterByType = jest.fn()

    const defaultProps: TypeListProps = {
        types: typeMocks.list,
        filterByType: mockFilterByType
    }

    beforeEach(() => {
        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.typeAll.name)
        })
    })

    it("should render with all types", () => {
        render(<TypeList {...defaultProps} />)

        typeMocks.list.forEach((type) => {
            expect(
                screen.getByText(new RegExp(type.name, "i"))
            ).toBeInTheDocument()
        })
    })

    it("should render images with correct src and alt attributes", () => {
        render(<TypeList {...defaultProps} />)

        typeMocks.list.forEach((type) => {
            const image = screen.getByRole("img", { name: type.name })
            expect(image).toBeInTheDocument()
            expect(image).toHaveAttribute(
                "src",
                expect.stringContaining(type.name)
            )
            expect(image).toHaveAttribute("alt", type.name)
        })
    })

    it("should render correct number of items", () => {
        const { container } = render(<TypeList {...defaultProps} />)

        expect(container.querySelectorAll("li")).toHaveLength(
            typeMocks.list.length
        )
    })

    it("should not render items when types are not provided", () => {
        const { container } = render(<TypeList {...defaultProps} types={[]} />)

        expect(container.querySelectorAll("li")).toHaveLength(0)
    })

    it("should apply selected class when type matches filter", () => {
        render(<TypeList {...defaultProps} />)

        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.fire.name)
        })

        const fireButton = screen.getByRole("button", {
            name: new RegExp(typeMocks.fire.name, "i")
        })

        expect(fireButton).toHaveClass("selected")
    })

    it("should not apply selected class when type does not match filter", () => {
        render(<TypeList {...defaultProps} />)

        const { result } = renderHook(() => useListFilterStore())

        act(() => {
            result.current.setTypeFilter(typeMocks.fire.name)
        })

        const normalButton = screen.getByRole("button", {
            name: new RegExp(typeMocks.normal.name, "i")
        })

        expect(normalButton).not.toHaveClass("selected")
    })

    it("should call filterByType when a type is clicked", () => {
        render(<TypeList {...defaultProps} />)

        const fireButton = screen.getByRole("button", {
            name: new RegExp(typeMocks.fire.name, "i")
        })

        fireEvent.click(fireButton)

        expect(mockFilterByType).toHaveBeenCalledWith(typeMocks.fire.name)
        expect(mockFilterByType).toHaveBeenCalledTimes(1)
    })
})
