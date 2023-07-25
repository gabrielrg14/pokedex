import { MutableRefObject, SetStateAction } from "react"

import { NextSeo } from "next-seo"

import * as S from "templates/Home/styles"
import Image from "next/image"
import Card from "components/Card"

import { Pokemon } from "common/utils/pokemon"
import { getColorsByPokemonType } from "common/utils/colorTypes"

export const LIMIT = 12

export interface Type {
    name: string
    url: string
}

type HomeTemplateProps = {
    state: {
        prevSearchRef: MutableRefObject<string>
        search: string
        setSearch: (value: SetStateAction<string>) => void
        typeSelected: string
        setTypeSelected: (value: SetStateAction<string>) => void
    }
    pokemons: Pokemon[]
    types: Type[]
    searchPokemon: (search: string) => void
    loadPokemons: (query: string | null, type?: string | null) => Promise<void>
}

const HomeTemplate = ({
    state,
    pokemons,
    types,
    searchPokemon,
    loadPokemons
}: HomeTemplateProps) => {
    return (
        <>
            <NextSeo
                title="Pokédex"
                description="Pokédex project that consumes the PokéAPI to display information of all existing Pokémon."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Pokédex, Pokémon, PokéAPI, Project, Frontend, React, Next"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            />

            <S.TitleDiv>
                <S.Title>Choose your Pokémon</S.Title>
            </S.TitleDiv>

            <S.Container>
                <S.TopArea>
                    <S.SearchInput
                        type="text"
                        spellCheck={false}
                        placeholder="Search by name or number"
                        value={state.search}
                        onChange={(e) => state.setSearch(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter"
                                ? searchPokemon(state.search)
                                : null
                        }
                    />

                    <S.SearchButton
                        type="button"
                        onClick={() => searchPokemon(state.search)}
                        disabled={state.search === ""}
                    >
                        🔍
                    </S.SearchButton>
                </S.TopArea>

                <S.PokemonCount>
                    <Image
                        src={`/images/types/${state.typeSelected}.svg`}
                        width={32}
                        height={32}
                        alt={`Type ${state.typeSelected}`}
                    />
                    <S.Counter>{pokemons.length}</S.Counter>
                </S.PokemonCount>

                {pokemons.length > 0 && (
                    <S.BottomArea>
                        <S.TypeList>
                            {types.map((type, index) => (
                                <li key={index}>
                                    <S.TypeItem
                                        className={
                                            state.typeSelected === type.name
                                                ? "selected"
                                                : ""
                                        }
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 125,
                                                behavior: "smooth"
                                            })
                                            state.setTypeSelected(type.name)
                                            loadPokemons(null, type.name)
                                        }}
                                    >
                                        <Image
                                            src={`/images/types/${type.name}.svg`}
                                            width={24}
                                            height={24}
                                            alt={`Type ${type.name}`}
                                        />
                                        <S.Type
                                            typeColor={
                                                getColorsByPokemonType(
                                                    type.name
                                                ).backgroundColor
                                            }
                                        >
                                            {type.name}
                                        </S.Type>
                                    </S.TypeItem>
                                </li>
                            ))}
                        </S.TypeList>

                        <S.PokemonList>
                            <S.PokemonCards>
                                {pokemons.map((pokemon, index) => (
                                    <Card key={index} pokemon={pokemon} />
                                ))}
                            </S.PokemonCards>

                            {state.typeSelected === "all" &&
                                pokemons.length >= LIMIT && (
                                    <S.ButtonLoad
                                        className="btn-default"
                                        onClick={() => loadPokemons(null)}
                                    >
                                        Load more Pokémon
                                    </S.ButtonLoad>
                                )}
                        </S.PokemonList>
                    </S.BottomArea>
                )}

                {pokemons.length === 0 && (
                    <S.SearchError>
                        <S.TextNotFound>
                            Pokémon{" "}
                            <strong>
                                {'"'}
                                {state.prevSearchRef.current}
                                {'"'}
                            </strong>{" "}
                            not found! <br />
                            <small>
                                Try again by searching for your full name or
                                your Pokédex number.
                            </small>
                        </S.TextNotFound>

                        <S.ButtonLoad
                            className="btn-default"
                            onClick={() => searchPokemon("")}
                        >
                            Back to list
                        </S.ButtonLoad>
                    </S.SearchError>
                )}
            </S.Container>
        </>
    )
}

export default HomeTemplate
