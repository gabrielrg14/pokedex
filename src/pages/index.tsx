import { useState, useRef, useCallback } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { API_URL } from "src/common/utils/api";
import { Pokemon } from "src/common/utils/pokemon";
import { getColorsByPokemonType } from "src/common/utils/colorTypes";

import Card from "src/components/Card";

import { 
    TitleDiv,
    Title,
    Container,
    TopArea,
    SearchInput,
    SearchButton,
    BottomArea,
    TypeList,
    TypeItem,
    Type,
    PokemonList,
    PokemonCount,
    Counter,
    PokemonCards,
    SearchError,
    TextNotFound,
    ButtonLoad
} from "src/common/styles/pages/index";

const LIMIT = 12; 

interface Type {
    name: string,
    url: string
}

interface HomeProps {
    pokemons: Pokemon[],
    types: Type[]
}

export const getStaticProps = async() => {
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

const Home: React.FC<HomeProps> = ({ pokemons, types }): JSX.Element => {

    const [search, setSearch] = useState("");
    const [typeSelected, setTypeSelected] = useState("all");
    const [pokemonList, setPokemonList] = useState(pokemons);
    const [pokemonLimit, setPokemonLimit] = useState(LIMIT);

    const prevSearchRef = useRef("");

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
        <>
            <Head>
                <title>Pokédex</title>
                <meta name="keywords" content="Pokédex, Pokémon, PokéAPI, Listing, Search, Selection" />
                <meta name="description" content="Pokémon listing with search field and type for selection" />
            </Head>

            <TitleDiv>
                <Title>Choose your Pokémon</Title>
            </TitleDiv>
            
            <Container>
                <TopArea>
                    <SearchInput 
                        type="text"
                        spellCheck={false}
                        placeholder="Search by name or number"
                        value={search} 
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={e => e.key === "Enter" ? searchPokemon(search) : null} />

                    <SearchButton 
                        type="button" 
                        onClick={() => searchPokemon(search)}
                        disabled={search === ""}
                    >
                        🔍
                    </SearchButton>
                </TopArea>

                <PokemonCount>
                    <Image src={`/images/types/${typeSelected}.svg`} 
                        width={32} height={32} 
                        alt={`Type ${typeSelected}`} 
                    />
                    <Counter>{pokemonList?.length}</Counter>
                </PokemonCount>

                {pokemonList?.length > 0 &&
                    <BottomArea>
                        <TypeList>
                            {typesFiltered?.map((type, index) => (
                                <li key={index}>
                                    <TypeItem className={typeSelected === type.name ? "selected" : ""}
                                        onClick={() => {
                                            window.scrollTo({ top: 125, behavior: "smooth" })
                                            setTypeSelected(type.name)
                                            loadPokemons(null, type.name)
                                        }}
                                    >
                                        <Image src={`/images/types/${type.name}.svg`} 
                                            width={24} height={24} 
                                            alt={`Type ${type.name}`} 
                                        />
                                        <Type typeColor={getColorsByPokemonType(type.name).backgroundColor}>
                                            {type.name}
                                        </Type>
                                    </TypeItem>
                                </li>
                            ))}
                        </TypeList>

                        <PokemonList>
                            <PokemonCards>
                                {pokemonList?.map((pokemon, index) => (
                                    <Card key={index} pokemon={pokemon} />
                                ))}
                            </PokemonCards>

                            {(typeSelected === "all" && pokemonList?.length >= LIMIT) && (
                                <ButtonLoad className="btn-default"
                                    onClick={() => loadPokemons(null)}
                                >
                                    Load more Pokémon
                                </ButtonLoad>
                            )}
                        </PokemonList>
                    </BottomArea>
                }

                {pokemonList?.length === 0 &&
                    <SearchError>
                        <TextNotFound>
                            Pokémon <strong>{'"'}{prevSearchRef.current}{'"'}</strong> not found! <br />
                            <small>Try again by searching for your full name or your Pokédex number.</small>
                        </TextNotFound>

                        <ButtonLoad className="btn-default"
                            onClick={() => searchPokemon("")}
                        >
                            Back to list
                        </ButtonLoad>
                    </SearchError>
                }
            </Container>
        </>
    )
}

export default Home;