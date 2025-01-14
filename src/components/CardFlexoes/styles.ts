import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const Cardflexao = styled.div`
  max-width: 500px;
  position: relative;
  border: 2px solid #00d939;
  border-radius: 13.26px;
`;

interface labelprops {
  ischecked: boolean;
}

export const Labelflexao = styled.label<labelprops>`
  height: 3rem;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 1;
  text-align: center;
  padding: 2.2rem;
  cursor: pointer;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.ischecked ? "#00D939" : "transparent")};
  color: ${(props) => (props.ischecked ? "white" : "black")};
  border-radius: ${(props) => (props.ischecked ? "11px" : "0px")};

  &:hover {
    background-color: #00d939;
    color: white;
    border-radius: 11px;
  }

  @media ${Breakpoints.sm} {
    height: auto;
    padding: 1rem;
  }
`;

export const InputFlexao = styled.input`
  display: none;
`;

export const spanFlexoes = styled.span<labelprops>`
  font-weight: 400;
  font-size: 20px;

  &:hover {
    color: white;
  }
  
  color: ${(props) => (props.ischecked ? "white" : "black")};
`;
