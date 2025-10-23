Cypress.on("uncaught:exception", (err) => {
    if (err.message.includes("play() request was interrupted")) {
        return false
    }
})

Cypress.Commands.add("navigateToPokemonPage", (name: string) => {
    cy.get(`main section a[aria-label='${name}']`).should("be.visible").click()
})

Cypress.Commands.add(
    "validatePokemonPage",
    (name: string, number: string, types: string[]) => {
        cy.contains("main section h1", name).should("be.visible")
        cy.contains("main section span", number).should("be.visible")
        cy.get(`main section img[alt='${name}']`).should("be.visible")
        types.forEach((type) => {
            cy.contains("main section span", type).should("be.visible")
        })
    }
)

Cypress.Commands.add("validatePokemonCry", (number: string) => {
    cy.get(`audio[id='pokemon-cry-${number}']`).as("pokemonCry").should("exist")
    cy.get("@pokemonCry").should((cries) => {
        const pokemonCry = cries[0] as HTMLAudioElement
        const cryWasPlayed =
            pokemonCry.duration > 0 && pokemonCry.played.length > 0
        expect(cryWasPlayed).to.be.equal(true)
    })
})

Cypress.Commands.add("searchForPokemon", (query: string) => {
    cy.intercept("GET", `**/pokemon/${query}`).as("getSearch")

    cy.get("main section input[name='search-input']").type(query)
    cy.get("main section button[title='Search']").click()
    cy.wait("@getSearch")
})
