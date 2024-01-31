import { mediaQueries } from "."

describe("mediaQueries", () => {
    it("should call lessThan passing mobile parameter", () => {
        const lessThanFn = jest.spyOn(mediaQueries, "lessThan")

        mediaQueries.lessThan("mobile")
        expect(lessThanFn).toHaveBeenCalledWith("mobile")
    })

    it("should call greaterThan passing tablet parameter", () => {
        const greaterThanFn = jest.spyOn(mediaQueries, "greaterThan")

        mediaQueries.greaterThan("tablet")
        expect(greaterThanFn).toHaveBeenCalledWith("tablet")
    })

    it("should call between passing desktop and largeDesktop parameter", () => {
        const betweenFn = jest.spyOn(mediaQueries, "between")

        mediaQueries.between("desktop", "largeDesktop")
        expect(betweenFn).toHaveBeenCalledWith("desktop", "largeDesktop")
    })
})
