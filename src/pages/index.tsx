import { GetStaticProps } from 'next';
import { useState, useRef, useCallback } from "react";

import HomeTemplate, { LIMIT, Type } from "templates/Home";

import { API_URL } from "common/utils/api";
import { Pokemon } from "common/utils/pokemon";

type HomeProps = {
    pokemons: Pokemon[]
    types: Type[]
}

export const getStaticProps: GetStaticProps = async () => {
    const fetchPokemons = await fetch(`${API_URL}/pokemon?limit=${LIMIT}`)
    const pokemons = await fetchPokemons.json()

    const fetchTypes = await fetch(`${API_URL}/type`)
    const types = await fetchTypes.json()
    types.results.unshift({ name: "all", url: "" }) // Adds type "all" to be one of the filterable options

    return {
        props: { 
            pokemons: pokemons.results,
            types: types.results
        }
    }
}

const Home = ({ pokemons, types }: HomeProps) => {

    const prevSearchRef = useRef("");
    const [search, setSearch] = useState("");
    const [typeSelected, setTypeSelected] = useState("all");
    const [pokemonList, setPokemonList] = useState(pokemons);
    const [pokemonLimit, setPokemonLimit] = useState(LIMIT);

    const loadPokemons = useCallback(async (query: string | null, type: string | null = null) => {
        if(query === "" || type === "all") {
            const res = await fetch(`${API_URL}/pokemon?limit=${pokemonLimit}`)
            const data = await res.json()
            setPokemonList([ ...data.results ])
            
        } else if(query !== null) {
            const res = await fetch(`${API_URL}/pokemon/${query.replace(/\ /g, "-").toLowerCase()}`)
            const data = res.status === 404 ? {} : await res.json()
            setPokemonList(JSON.stringify(data) === "{}" ? [] : [ data ])
            prevSearchRef.current = query;

        } else if(query === null && type === null) {
            const res = await fetch(`${API_URL}/pokemon?limit=${LIMIT}&offset=${pokemonLimit}`)
            const data = await res.json()
            setPokemonList(prevPokemonList => ([ ...prevPokemonList, ...data.results ]))
            setPokemonLimit(pokemonLimit + LIMIT)

        } else if(type !== null) {
            const res = await fetch(`${API_URL}/type/${type}`)
            const data = await res.json()
            setPokemonList([ ...data.pokemon.map((pokemon: { pokemon: Pokemon }) => pokemon.pokemon) ])
        }
    }, [pokemonLimit])

    function searchPokemon(search: string | null) {
        setSearch(search ?? "")
        loadPokemons(search)
        setTypeSelected("all")
    }

    // Remove types that do not have pokémon coming from the API
    const typesToRemove = ["unknown", "shadow"]
    const typesFiltered = types.filter(type => !typesToRemove.includes(type.name))

    return (
        <HomeTemplate
            state={{
                prevSearchRef,
                search,
                setSearch,
                typeSelected,
                setTypeSelected
            }}
            pokemons={pokemonList}
            types={typesFiltered}
            searchPokemon={searchPokemon}
            loadPokemons={loadPokemons}
        />
    )
}

export default Home;