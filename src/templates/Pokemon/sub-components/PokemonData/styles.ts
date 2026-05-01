import styled from "styled-components"

export const Wrapper = styled.div`
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
`

export const DataTitle = styled.h2`
    font-size: var(--default-size);
    margin-bottom: 0.4rem;
    text-align: center;
`
