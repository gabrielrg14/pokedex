import { render, screen } from "@testing-library/react"

import { CardContent } from "."

jest.mock("components", () => ({
    RowTypes: () => <div data-testid="row-types" />
}))

jest.mock("./ErrorInfos", () => ({
    ErrorInfos: () => <div data-testid="error-infos" />
}))

describe("<CardContent />", () => {
    it("should render ErrorInfos component", () => {
        render(<CardContent />)

        expect(screen.getByTestId("error-infos")).toBeInTheDocument()
    })

    it("should render RowTypes component", () => {
        render(<CardContent />)

        expect(screen.getByTestId("row-types")).toBeInTheDocument()
    })
})
