import { MutableRefObject, useEffect, useMemo, useState } from "react"

import { NextSeo } from "next-seo"

import * as S from "./styles"
import Image from "next/image"
import { IPokemon, IType } from "interfaces"
import { Card, Button, SpriteFloatingMenu } from "components"
import { formatName, getColorsByType } from "utils"
import { Filter } from "store"
import { POKEMON_PAGINATION_LIMIT } from "common"
import { Search } from "styled-icons/material-outlined"

type HomeTemplateProps = {
    pokemons: IPokemon[]
    types: IType[]
    isLoading: boolean
    filter: Filter
    prevSearchRef: MutableRefObject<string>
    searchPokemon: (search: string) => void
    filterByType: (type: string) => void
    nextPokemonPagination: (limit: number) => void
}

export const HomeTemplate = ({
    pokemons,
    types,
    isLoading,
    filter,
    prevSearchRef,
    searchPokemon,
    filterByType,
    nextPokemonPagination
}: HomeTemplateProps) => {
    const [search, setSearch] = useState(filter.search)
    const typeSelected = useMemo(() => filter.type, [filter.type])
    const pokemonLimit = useMemo(() => filter.limit, [filter.limit])

    useEffect(() => {
        setSearch(filter.search)
    }, [filter.search])

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

            <S.Content>
                <S.TitleDiv>
                    <S.Title>Choose your Pokémon</S.Title>
                </S.TitleDiv>

                <S.Wrapper>
                    <S.TopArea>
                        <S.SearchInput
                            name="search-input"
                            type="search"
                            spellCheck={false}
                            placeholder="Search by name or number"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" ? searchPokemon(search) : null
                            }
                        />

                        <S.SearchButton
                            type="button"
                            title="Search"
                            onClick={() => searchPokemon(search)}
                            disabled={search === ""}
                        >
                            <Search size={18} />
                        </S.SearchButton>
                    </S.TopArea>

                    <S.PokemonCount>
                        <Image
                            src={`/images/types/${typeSelected}.svg`}
                            width={32}
                            height={32}
                            alt={typeSelected}
                        />
                        <S.Counter>
                            {isLoading && typeSelected !== "all"
                                ? formatName(typeSelected)
                                : pokemons.length}
                        </S.Counter>
                    </S.PokemonCount>

                    {((isLoading && search === "") || pokemons.length > 0) && (
                        <S.BottomArea>
                            <S.TypeList>
                                {types.map((type, index) => (
                                    <li key={index}>
                                        <S.TypeItem
                                            className={
                                                typeSelected === type.name
                                                    ? "selected"
                                                    : ""
                                            }
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 125,
                                                    behavior: "smooth"
                                                })
                                                filterByType(type.name)
                                            }}
                                        >
                                            <Image
                                                src={`/images/types/${type.name}.svg`}
                                                width={24}
                                                height={24}
                                                alt={type.name}
                                            />
                                            <S.Type
                                                typeColor={
                                                    getColorsByType(type.name)
                                                        .backgroundColor
                                                }
                                            >
                                                {formatName(type.name)}
                                            </S.Type>
                                        </S.TypeItem>
                                    </li>
                                ))}
                            </S.TypeList>

                            <S.PokemonCards>
                                <S.PokemonList>
                                    {pokemons.map((pokemon, index) => (
                                        <S.PokemonItem key={index}>
                                            <Card
                                                pokemon={pokemon}
                                                isLoading={isLoading}
                                            />
                                        </S.PokemonItem>
                                    ))}
                                </S.PokemonList>

                                {typeSelected === "all" &&
                                    pokemons.length >=
                                        POKEMON_PAGINATION_LIMIT && (
                                        <Button
                                            onClick={() =>
                                                nextPokemonPagination(
                                                    pokemonLimit
                                                )
                                            }
                                        >
                                            Load more Pokémon
                                        </Button>
                                    )}
                            </S.PokemonCards>
                        </S.BottomArea>
                    )}

                    {!isLoading && pokemons.length === 0 && (
                        <S.SearchError>
                            <S.TextNotFound>
                                Pokémon{" "}
                                <strong>
                                    {'"'}
                                    {prevSearchRef.current}
                                    {'"'}
                                </strong>{" "}
                                not found! <br />
                                <small>
                                    Try again by searching for your full name or
                                    your Pokédex number.
                                </small>
                            </S.TextNotFound>

                            <Button onClick={() => searchPokemon("")}>
                                Back to list
                            </Button>
                        </S.SearchError>
                    )}
                </S.Wrapper>

                <SpriteFloatingMenu />
            </S.Content>
        </>
    )
}
