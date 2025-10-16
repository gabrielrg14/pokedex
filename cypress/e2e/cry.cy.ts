/// <reference types="../support/commands.d.ts" />

describe("Pokémon cry", () => {
    beforeEach(() => {
        cy.visit("/pokemon/ditto")
        cy.get("audio[id='cry-pokemon-132']").as("dittoCry").should("exist")
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
        cy.get("main section button[title='Ditto cry']").click()

        cy.get("@dittoCry").should((cries) => {
            const pokemonCry = cries[0] as HTMLAudioElement
            const cryingWasPlayed =
                pokemonCry.duration > 0 && pokemonCry.played.length > 0
            expect(cryingWasPlayed).to.be.equal(true)
        })
    })
})
