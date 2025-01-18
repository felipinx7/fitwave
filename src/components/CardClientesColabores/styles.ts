import e from "express";
import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

interface CradProps {
  bgColor: boolean;
  Clicou?: boolean;

}

export const Card = styled.article<CradProps>`
  max-width: 1250px;
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: ${(props) =>
    props.bgColor ? "#d8ffe2" : "rgba(255, 76, 70, 0.53)"};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: ${(props) => (props.Clicou ? "scale(1.03)" : "scale(1.0)")};
  transition: all 1s ease-in-out;
  z-index: 1;
  
  @media ${Breakpoints.lg} {
  }

  &.active {
    width: 90%;
  }


`;

export const ContainerInfoUser = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

export const ImagemUser = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const TextInfoUser = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: auto;
  text-align: left;

  @media ${Breakpoints.sm} {
    width: 100%;
  }
`;

export const TextNome = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: black;

  @media ${Breakpoints.sm} {
    font-size: 1rem;
    word-wrap: break-word;
  }
`;

export const TextEmail = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: black;

  @media ${Breakpoints.sm} {
    width: 100%;
    font-size: 0.8rem;
    word-wrap: break-word;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;

  @media ${Breakpoints.lg} {
    display: none;
  }
`;

export const TextDataDeEntradaUser = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
`;

export const ContainerStatusEeditar = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 25%;
  height: 100%;

  @media ${Breakpoints.lg} {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const ContainerStatus = styled.div<CradProps>`
  max-width: 400px;
  width: 100%;
  height: auto;
  padding: 0.5rem;
  border-radius: 10.35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  font-weight: 600;
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.bgColor ? "rgb(99, 236, 135)" : "#FF4C46"};

  @media ${Breakpoints.lg} {
    display: none;
  }
`;

interface ContainerEditarProps {
  ToggleIcone: boolean;
}

export const ContainerEditar = styled.div<ContainerEditarProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${Breakpoints.lg} {
    justify-content: center;
    display: ${(props) => (props.ToggleIcone ? "flex" : "none")};
    align-items: center;
    height: 100%;
  }
  @media ${Breakpoints.ms} {
    flex-direction: column;
  }
`;
export const ContainerLapis = styled.div`
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;

export const ContainerEditarMobile = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media ${Breakpoints.lg} {
    display: flex;

    svg {
      font-size: 2rem;
      background-color: transparent;
    }
  }
`;
export const ContainerLixo = styled.div`
  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;
