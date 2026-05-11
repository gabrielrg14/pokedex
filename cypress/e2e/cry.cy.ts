/// <reference types="../support/commands.d.ts" />

describe("Pokemon cry", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/cries/pokemon/latest/**").as("getLatestCry")
    })

    it("play the pokemon cry when accessing the page", () => {
        cy.visit("/pokemon/lapras")
        cy.wait("@getLatestCry")

        cy.validatePokemonCry("Lapras")
    })

    it("play the pokemon cry by clicking the button", () => {
        cy.visit("/pokemon/ditto")
        cy.wait("@getLatestCry")

        cy.get("main section button[title='Ditto cry']").click()

        cy.validatePokemonCry("Ditto")
    })

    it("play the pokemon cry when changing sprite", () => {
        cy.intercept("GET", "**/cries/pokemon/legacy/**").as("getLegacyCry")

        cy.visit("/pokemon/eevee")
        cy.wait("@getLatestCry")

        cy.get("main section button[title='Open menu']").click()
        cy.get("main section button[title='Toggle sprite']").click()

        cy.wait("@getLegacyCry")
        cy.validatePokemonCry("Eevee")
    })
})
