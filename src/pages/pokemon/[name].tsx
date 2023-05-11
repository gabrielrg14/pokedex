import { useRouter } from 'next/router';
import Head from 'next/head';

import { API_URL } from "src/common/utils/api";
import { Pokemon as PokemonInterface, formatPokemonName } from "src/common/utils/pokemon";
import { getColorsByPokemonType } from "src/common/utils/colorTypes";

import Loading from "src/components/Loading";
import PokemonNumber from "src/components/PokemonNumber";
import RowTypes from "src/components/RowTypes";
import StatBar from "src/components/StatBar";

import { 
    Container,
    PokemonCard,
    PokemonTitle,
    PokemonName,
    SpanNumber,
    DivImage,
    PokemonImage,
    PokemonData,
    DivData,
    DataTitle,
    PokemonStats,
    Stat,
    StatInfo
} from "src/common/styles/pages/pokemon";

interface Context {
    params: {
        name: string
    }
}

interface PokemonProps {
    pokemon: PokemonInterface
}

export const getStaticPaths = async() => {
    const res = await fetch(`${API_URL}/pokemon?limit=151`) // Pré-render only Pokémons of first generation
    const data = await res.json()

    const paths = data.results.map((pokemon: PokemonInterface) => {
        return {
            params: { name: pokemon.name }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async(context: Context) => {
    const name = context.params.name
    const res = await fetch(`${API_URL}/pokemon/${name}`)

    let data = null;
    let notFound = false;

    try {
        data = await res.json()
    } catch(err) {
        notFound = true;
    }

    return {
        notFound,
        props: { 
            pokemon: data,
        }
    }
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }): JSX.Element => {

    const router = useRouter()

    if(router && router.isFallback) {
        return <Loading />;
    }

    let backgroundStyle = getColorsByPokemonType(pokemon?.types[0].type.name).background;
    if(pokemon?.types.length === 2) { // Pokémon with 2 types
        backgroundStyle = `linear-gradient(
            to right,
            ${getColorsByPokemonType(pokemon?.types[0].type.name).backgroundColor} 50%,
            ${getColorsByPokemonType(pokemon?.types[1].type.name).backgroundColor} 50%
        )`;
    }

    // Removes abilities that have the same name
    const abilitiesName = pokemon?.abilities.map(item => item.ability.name)
    const abilitiesFiltered = abilitiesName.filter((item, index) => abilitiesName.indexOf(item) === index)

    return (
        <>
            <Head>
                <title>{`${formatPokemonName(pokemon?.name)} | Pokédex`}</title>
                <meta name="keywords" content={`${formatPokemonName(pokemon?.name)}, Pokémon #${pokemon?.id}, Pokédex, Pokédex Number, Types, Height, Weight, Abilities, Stats`} />
                <meta name="description" content={`Pokédex data for the Pokémon ${pokemon?.name}`} />
            </Head>

            <Container
                style={{ background: backgroundStyle }}>
                <PokemonCard>
                    <PokemonTitle>
                        <PokemonName>
                            {formatPokemonName(pokemon?.name)}
                        </PokemonName>
                        <SpanNumber>
                            <PokemonNumber number={pokemon?.id} />
                        </SpanNumber>
                    </PokemonTitle>
                    
                    <DivImage>
                        {pokemon?.sprites?.other['official-artwork']?.front_default &&
                            <PokemonImage
                                src={pokemon?.sprites.other['official-artwork'].front_default} 
                                width={256} height={256} 
                                alt={pokemon?.name} 
                                priority
                            />
                        }
                    </DivImage>

                    <RowTypes types={pokemon?.types}/>

                    <PokemonData>
                        <DivData>
                            <DataTitle>Height</DataTitle>
                            <p>{pokemon?.height / 10}m</p>
                        </DivData>
                        <DivData>
                            <DataTitle>Weight</DataTitle>
                            <p>{pokemon?.weight / 10}kg</p>
                        </DivData>
                        <DivData>
                            <DataTitle>Abilities</DataTitle>
                            {abilitiesFiltered.map((ability, index) => (
                                <p key={index}>{ability.replace("-", " ")}</p>
                            ))}
                        </DivData>
                    </PokemonData>

                    <PokemonStats>
                        <DataTitle>Stats</DataTitle>
                        {pokemon?.stats.map((item, index) => (
                            <Stat key={index}>
                                <StatInfo>
                                    <span>{item.stat.name.replace("special-", "Sp. ")}</span>
                                    <span>{item.base_stat}</span>
                                </StatInfo>
                                <StatBar 
                                    type={pokemon?.types[0].type.name} 
                                    stat={item.stat.name} baseStat={item.base_stat} 
                                />
                            </Stat>
                        ))}
                    </PokemonStats>
                </PokemonCard>
            </Container>
        </>
    )
}

export default Pokemon;