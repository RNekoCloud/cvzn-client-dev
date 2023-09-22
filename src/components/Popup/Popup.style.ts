import { styled } from "styled-components"

export const PopupWrapper = styled.div`
    padding: 5px;
    margin: 5px;
`

export const PopupMsg = styled.p<{$success?: boolean}>`
    color: ${props => props.$success ? "#A8DF8E" : "red"};
    font-size: 13px;
    margin: 5px;
`



