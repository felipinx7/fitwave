import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const Card = styled.div`
    max-width: 500px;
    position: relative;
    border: 2px solid #00D939;
    border-radius: 13.26px;
`
export const labelCard = styled.label<{ isChecked: boolean }>`
    height: 3rem;
    font-size: 38.66px;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 2.2rem;
    cursor: pointer;
    justify-content: center;
    transition: all 0.2s ease;
    background-color: ${(props) => (props.isChecked ? "#00D939" : "transparent")};
    color: ${(props) => (props.isChecked ? "white" : "black")};
    border-radius: ${(props) => (props.isChecked ? "11px" : "0px")};


    &:hover{
        background-color: #00D939;
        color: white;
        border-radius: 11px;
    }

    @media ${Breakpoints.sm}{
        height: auto;
        padding: 1rem;
    }


`

export const InputCard = styled.input`
display: none;
`