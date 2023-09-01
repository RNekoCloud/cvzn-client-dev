import { styled } from "styled-components"

export const CardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    min-height: 50%;
    min-width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
`

export const CardTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`
