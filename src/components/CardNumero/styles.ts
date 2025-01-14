import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const CardNumero = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  border: 2px solid #00d939;
  border-radius: 13.26px;

  @media ${Breakpoints.sm} {
    flex-grow: 1;
    flex-basis: 140px;
  }
`;

interface labelNumeroprops {
  isChecked: boolean;
}

export const labelNumero = styled.label<labelNumeroprops>`
  font-size: 53px;
  font-weight: 600;
  width: 140px;
  height: 100px;
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

  &:hover {
    background-color: #00d939;
    color: white;
    width: -webkit-fill-available;
    height: 100px;
    height: 100px;
    border-radius: 11px;
    border: 2px solid #00d939;
  }

  @media ${Breakpoints.sm} {
    width: -webkit-fill-available;
    height: auto;
    padding: 1rem;
    background-color: ${(props) => (props.isChecked ? "#00D939" : "transparent")};
  color: ${(props) => (props.isChecked ? "white" : "black")};
  border-radius: ${(props) => (props.isChecked ? "11px" : "0px")};

    &:hover{
        width: -webkit-fill-available;
        height: 100%;
    }
  }
`;

export const InputNumero = styled.input`
  display: none;
`;
