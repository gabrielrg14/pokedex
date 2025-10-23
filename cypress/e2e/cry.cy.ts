/// <reference types="../support/commands.d.ts" />

describe("Pokémon cry", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/cries/pokemon/latest/**").as("getLatestCry")
    })

    it("play the Pokémon cry when accessing the page", () => {
        cy.visit("/pokemon/131")
        cy.wait("@getLatestCry")

        cy.validatePokemonCry("131")
    })

    it("play the Pokémon cry by clicking the button", () => {
        cy.visit("/pokemon/132")
        cy.wait("@getLatestCry")

        cy.get("main section button[title='Ditto cry']").click()

        cy.validatePokemonCry("132")
    })

    it("play the Pokémon cry when changing sprite", () => {
        cy.intercept("GET", "**/cries/pokemon/legacy/**").as("getLegacyCry")

        cy.visit("/pokemon/133")
        cy.wait("@getLatestCry")

        cy.get("main section button[title='Open menu']").click()
        cy.get("main section button[title='Toggle sprite']").click()

        cy.wait("@getLegacyCry")
        cy.validatePokemonCry("133")
    })
})
