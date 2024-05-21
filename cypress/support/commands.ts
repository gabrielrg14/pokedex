Cypress.Commands.add("navigateToPokemonPage", (name: string) => {
    cy.get(`main section a[aria-label='${name}']`).should("be.visible").click()
})

Cypress.Commands.add(
    "validatePokemonPage",
    (title: string, name: string, number: string, types: string[]) => {
        cy.contains("main section h1", title).should("be.visible")
        cy.contains("main section span", number).should("be.visible")
        cy.get(`main section img[alt='${name}']`).should("be.visible")
        types.forEach((type) => {
            cy.contains("main section span", type).should("be.visible")
        })
    }
)

Cypress.Commands.add("searchForPokemon", (query: string) => {
    cy.intercept("GET", `**/pokemon/${query}`).as("getSearch")

    cy.get("main section input[placeholder='Search by name or number']").type(
        query
    )
    cy.contains("main section button", "🔍").click()
    cy.wait("@getSearch")
})
