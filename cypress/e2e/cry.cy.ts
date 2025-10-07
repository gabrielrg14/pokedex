/// <reference types="../support/commands.d.ts" />

describe("Pokémon cry", () => {
    beforeEach(() => {
        cy.visit("/pokemon/ditto")
        cy.get("#Ditto-cry").as("dittoCry").should("exist")
    })

    it("play the pokemon cry when accessing the page", () => {
        cy.get("@dittoCry").should((cries) => {
            const pokemonCry = cries[0] as HTMLAudioElement
            const cryWasPlayed =
                pokemonCry.duration > 0 && pokemonCry.played.length > 0
            expect(cryWasPlayed).to.be.equal(true)
        })
    })

    it("play the pokemon cry by clicking the button", () => {
        cy.contains("main section button", "🔊").click()

        cy.get("@dittoCry").should((cries) => {
            const pokemonCry = cries[0] as HTMLAudioElement
            const cryingWasPlayed =
                pokemonCry.duration > 0 && pokemonCry.played.length > 0
            expect(cryingWasPlayed).to.be.equal(true)
        })
    })
})
