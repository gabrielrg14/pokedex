import { http, HttpResponse } from "msw"
import { API_URL } from "common"
import { pokemonMocks, typeMocks } from "test/mocks"

export const handlers = [
    http.get(`${API_URL}/pokemon`, () => {
        return HttpResponse.json(
            { results: pokemonMocks.list },
            { status: 200 }
        )
    }),

    http.get(`${API_URL}/pokemon/not-a-pokemon`, () => {
        return HttpResponse.json(null, { status: 404 })
    }),

    http.get(`${API_URL}/pokemon/${pokemonMocks.venusaur.name}`, () => {
        return HttpResponse.json(pokemonMocks.venusaur, { status: 200 })
    }),

    http.get(`${API_URL}/pokemon-species/${pokemonMocks.venusaur.id}`, () => {
        return HttpResponse.json(pokemonMocks.venusaurSpecies, { status: 200 })
    }),

    http.get(`${API_URL}/pokemon/${pokemonMocks.charizard.name}`, () => {
        return HttpResponse.json(pokemonMocks.charizard, { status: 200 })
    }),

    http.get(`${API_URL}/pokemon-species/${pokemonMocks.charizard.id}`, () => {
        return HttpResponse.json(pokemonMocks.charizardSpecies, { status: 200 })
    }),

    http.get(`${API_URL}/pokemon/${pokemonMocks.blastoise.name}`, () => {
        return HttpResponse.json(pokemonMocks.blastoise, { status: 200 })
    }),

    http.get(`${API_URL}/pokemon-species/${pokemonMocks.blastoise.id}`, () => {
        return HttpResponse.json(pokemonMocks.blastoiseSpecies, { status: 200 })
    }),

    http.get(`${API_URL}/type`, () => {
        return HttpResponse.json({ results: typeMocks.list }, { status: 200 })
    }),

    http.get(`${API_URL}/type/not-a-type`, () => {
        return HttpResponse.json(null, { status: 404 })
    }),

    http.get(`${API_URL}/type/${typeMocks.types.grass.name}`, () => {
        return HttpResponse.json(
            { pokemon: [{ pokemon: pokemonMocks.venusaur }] },
            { status: 200 }
        )
    }),

    http.get(`${API_URL}/type/${typeMocks.types.fire.name}`, () => {
        return HttpResponse.json(
            { pokemon: [{ pokemon: pokemonMocks.charizard }] },
            { status: 200 }
        )
    }),

    http.get(`${API_URL}/type/${typeMocks.types.water.name}`, () => {
        return HttpResponse.json(
            { pokemon: [{ pokemon: pokemonMocks.blastoise }] },
            { status: 200 }
        )
    })
]
