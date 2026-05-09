/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Navigate to a pokemon page.
         *
         * @param name string - The name of the pokemon page you want to navigate to
         *
         * @example cy.navigateToPokemonPage("Pikachu") // Navigate to the provided pokemon page
         */
        navigateToPokemonPage(
            name: string
        ): Cypress.Chainable<JQuery<HTMLAnchorElement>>

        /**
         * Validates a pokemon's data on its pokemon page.
         *
         * @param name string - The name of the pokemon you want to validate
         * @param number string - The number of the pokemon you want to validate
         * @param types string[] - The types of the pokemon you want to validate
         *
         * @example cy.validatePokemonPage("Venusaur", "#0003", ["grass", "poison"])
         * @example cy.validatePokemonPage("Pikachu", "#0025", ["electric"])
         */
        validatePokemonPage(
            name: string,
            number: string,
            types: string[]
        ): void | Cypress.Chainable<null>

        /**
         * Validates if a pokemon's cry was played.
         *
         * @param number string - The number of the pokemon you want to validate
         *
         * @example cy.validatePokemonCry("132")
         */
        validatePokemonCry(number: string): void | Cypress.Chainable<null>

        /**
         * Search for a pokemon in the search input.
         *
         * @param query string - The query for the pokemon you want to search for
         *
         * @example cy.searchForPokemon("pikachu") // Type in the search field and click the button to search
         */
        searchForPokemon(
            query: string
        ): Cypress.Chainable<JQuery<HTMLButtonElement>>
    }
}
