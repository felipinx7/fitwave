import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

interface ContainerAlertaprops{
    fechar: boolean
}

export const ConatinerAlerta = styled.div<ContainerAlertaprops>`
  width: 100%;
  height: auto;
  display: ${(props) => (props.fechar ? "flex" : "none")};
  justify-content: center;
  transition:  all 0.3s ease;
`;


export const TelaAlerta = styled.article`
  position: absolute;
  width: 40%;
  height: auto;
  background-color: #63ec87;
  transform: translateY(2rem);
  border-radius: 8.57px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;


  @media ${Breakpoints.md}{
    width: 70%;
  }
`;
export const Titulo = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
`;
export const ContainerButoes = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const ButtoSair = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: green;
  border-radius: 8.57px;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    background-color:rgb(5, 114, 12);
  }
`;
