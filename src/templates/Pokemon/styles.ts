import styled from "styled-components"
import Image from "next/image"
import { Container } from "components"
import { mediaQueries as media } from "utils"

export const Background = styled.div`
    height: 100%;
    padding: var(--default-size) 0;
`

export const Wrapper = styled(Container)`
    height: 100%;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const PokemonCard = styled.div`
    padding: var(--lg-size) 8rem;
    background-color: #f7fcfe;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border-radius: 12px;
    border: 2px solid var(--dark-color);

    ${media.lessThan("mobile")`
        padding: var(--default-size);
    `}
`

export const PokemonTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PokemonName = styled.h1`
    font-size: var(--xl-size);
    text-transform: capitalize;
    text-align: center;
`

export const Number = styled.span``

export const DivImage = styled.div`
    text-align: center;
`

export const PokemonImage = styled(Image)`
    width: auto;
    height: auto;
`

export const PokemonData = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    flex-wrap: wrap;
    text-align: center;
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: var(--default-size) 0 0;
    padding: 0 var(--default-size);
    text-transform: capitalize;
`

export const DataTitle = styled.h2`
    font-size: var(--default-size);
    margin-bottom: 0.4rem;
    text-align: center;
`

export const PokemonStats = styled.div`
    padding: 0 var(--default-size);
    margin: var(--default-size) 0 0;
    text-transform: capitalize;
`

export const Stat = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-size);
    margin: 0 0 0.4rem;

    ${media.lessThan("mobile")`
        flex-direction: column;
        gap: 0.4rem;
        margin: 0 0 var(--default-size);
    `}
`

export const StatInfo = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-size);
    width: 100%;
`
