import { generationMocks } from "test/mocks"

import { getGenerationRegion } from "."

describe("generations", () => {
    describe("getGenerationRegion", () => {
        it.each(generationMocks.generationArrayList)(
            "should return the region for %s",
            async (name, generation) => {
                expect(getGenerationRegion(name)).toBe(generation)
            }
        )
    })
})
