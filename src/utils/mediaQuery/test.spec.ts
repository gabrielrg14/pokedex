import { mediaQueries } from "."

describe("mediaQueries", () => {
    it("should call lessThan passing smallMobile parameter", () => {
        const lessThanFn = jest.spyOn(mediaQueries, "lessThan")

        mediaQueries.lessThan("smallMobile")
        expect(lessThanFn).toBeCalledWith("smallMobile")
    })

    it("should call greaterThan passing desktop parameter", () => {
        const greaterThanFn = jest.spyOn(mediaQueries, "greaterThan")

        mediaQueries.greaterThan("desktop")
        expect(greaterThanFn).toBeCalledWith("desktop")
    })

    it("should call between passing mobile and tablet parameter", () => {
        const betweenFn = jest.spyOn(mediaQueries, "between")

        mediaQueries.between("mobile", "tablet")
        expect(betweenFn).toBeCalledWith("mobile", "tablet")
    })
})
