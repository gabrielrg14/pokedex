/// <reference types="../support/commands.d.ts" />

describe("Error", () => {
    beforeEach(() => {
        cy.visit("/not-found", { failOnStatusCode: false })
    })

    it("redirects to the home page when clicking the go to home button", () => {
        cy.contains("main section button", "Go to Home")
            .should("be.visible")
            .click()

        cy.contains("main section ul li h2", "Bulbasaur").should("be.visible")
    })

    it("redirects to psyduck page when clicking on error card", () => {
        cy.navigateToPokemonPage("Psyduck")
        cy.validatePokemonPage("Psyduck", "#0054", ["Water"])
    })
})
