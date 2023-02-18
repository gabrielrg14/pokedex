import { useState, useRef, useCallback } from 'react';

import Head from 'next/head';

import { API_URL } from "src/common/utils/api";
import { Pokemon } from "src/common/utils/pokemon";

import Card from "src/components/Card";

import { 
    TitleDiv,
    Title,
    Container,
    SearchDiv,
    SearchInput,
    SearchButton,
    PokemonList,
    BottomButton,
    SearchError
} from "src/common/styles/pages/index";

const LIMIT = 12; 

interface HomeProps {
    pokemons: Pokemon[]
}

export const getStaticProps = async() => {
    const res = await fetch(`${API_URL}/pokemon?limit=${LIMIT}`)
    const data = await res.json()

    return {
        props: { pokemons: data.results }
    }
}

const Home: React.FC<HomeProps> = ({ pokemons }): JSX.Element => {

    const [search, setSearch] = useState("");
    const [pokemonList, setPokemonList] = useState(pokemons);
    const [countPokemons, setCountPokemons] = useState(LIMIT);

    const prevSearchRef = useRef("");

    const loadPokemons = useCallback(async (query: string | null) => {
        if(query === "") {
            const res = await fetch(`${API_URL}/pokemon?limit=${countPokemons}`)
            const data = await res.json()
            setPokemonList([ ...data.results ])
            
        } else if(query !== null) {
            const res = await fetch(`${API_URL}/pokemon/${query.replace(/\ /g, "-").toLowerCase()}`)
            const data = res.status === 404 ? {} : await res.json()
            setPokemonList(JSON.stringify(data) === "{}" ? [] : [ data ])
            prevSearchRef.current = query;

        } else {
            const res = await fetch(`${API_URL}/pokemon?limit=${LIMIT}&offset=${countPokemons}`)
            const data = await res.json()
            setPokemonList(prevPokemonList => ([ ...prevPokemonList, ...data.results ]))
            setCountPokemons(countPokemons + LIMIT)
        }
    }, [countPokemons])

    return (
        <>
            <Head>
                <title>Pokédex</title>
                <meta name="keywords" content="Pokédex, Pokémon, PokéAPI, Listing, Search, Selection" />
                <meta name="description" content="Pokémon listing with search field for selection" />
            </Head>

            <TitleDiv>
                <Title>Choose your Pokémon</Title>
            </TitleDiv>
            
            <Container>
                <SearchDiv>
                    <SearchInput type="text" spellCheck={false}
                        placeholder="Search by name or number"
                        value={search} 
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={e => e.key === "Enter" ? loadPokemons(search) : null} />

                    <SearchButton type="button" 
                        onClick={() => loadPokemons(search)}
                        disabled={search === ""}>
                        🔍
                    </SearchButton>
                </SearchDiv>

                {pokemonList?.length > 0 && (
                    <PokemonList>
                        {pokemonList?.map((pokemon, index) => (
                            <Card key={index} pokemon={pokemon} />
                        ))}
                    </PokemonList>
                )}

                <BottomButton>
                    {pokemonList?.length >= LIMIT
                        ?   <button className="btn-default" onClick={() => loadPokemons(null)}>
                                Load more Pokémon
                            </button>

                        :   <>
                                {pokemonList?.length === 0 && (
                                    <SearchError>
                                        Pokémon <strong>{'"'}{prevSearchRef.current}{'"'}</strong> not found! <br />
                                        <small>Try again by searching for your full name or your Pokédex number.</small>
                                    </SearchError>
                                )}

                                <button className="btn-default" onClick={() => {
                                    setSearch("")
                                    loadPokemons("")
                                }}>
                                    Back to list
                                </button>
                            </>
                    }
                </BottomButton>
            </Container>
        </>
    )
}

export default Home;