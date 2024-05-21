/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Navigate to a Pokémon page.
         *
         * @param name string - The name of the Pokémon page you want to navigate to
         *
         * @example cy.navigateToPokemonPage("pikachu") // Navigate to the provided Pokémon page
         */
        navigateToPokemonPage(
            name: string
        ): Cypress.Chainable<JQuery<HTMLAnchorElement>>

        /**
         * Validates a Pokémon's data on its Pokémon page.
         *
         * @param title string - The title of the Pokémon you want to validate
         * @param name string - The name of the Pokémon you want to validate
         * @param number string - The number of the Pokémon you want to validate
         * @param types string[] - The types of the Pokémon you want to validate
         *
         * @example cy.validatePokemonPage("Venusaur", "venusaur", "#0003", ["grass", "poison"])
         * @example cy.validatePokemonPage("Pikachu", "pikachu", "#0025", ["electric"])
         */
        validatePokemonPage(
            title: string,
            name: string,
            number: string,
            types: string[]
        ): void | Cypress.Chainable<null>

        /**
         * Search for a Pokémon in the search input.
         *
         * @param query string - The query for the Pokémon you want to search for
         *
         * @example cy.searchForPokemon("pikachu") // Type in the search field and click the button to search
         */
        searchForPokemon(
            query: string
        ): Cypress.Chainable<JQuery<HTMLButtonElement>>
    }
}
