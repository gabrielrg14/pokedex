import { generationMocks } from "test/mocks"

import { getGenerationRegion } from "."

describe("generations", () => {
    describe("getGenerationRegion", () => {
        it("should return 'New' as region fallback when generation does not exist", () => {
            expect(getGenerationRegion("generation-x")).toBe("New")
        })

        it.each(generationMocks.generationRegionArrayList)(
            "should return the %s region",
            async (generation, region) => {
                expect(getGenerationRegion(generation)).toBe(region)
            }
        )
    })
})
