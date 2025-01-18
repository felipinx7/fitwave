import { Interface } from "readline";
import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";


export const CardNovoCliente = styled.div`
  width: 100%;
  height: auto;
  background-color: #e3e3e3;
  cursor: pointer;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;

  &.CardNovo {
    background-color: #95FFB1;
    border-radius: 20px;
  }
`;

export const ContainerInfoBasica = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
`;
export const ContainerFotoPerfil = styled.div`
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const fotoPerfil = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const InfoNomeEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const TextNome = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: black;
  font-family: "Poppins", sans-serif;
`;

export const textEmail = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 600;
`;

export const ContainerAcessarForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;


export const ButtonAcessarForm = styled.button`
  width: 30%;
  height: 50%;
  background-color: rgba(0, 217, 57, 1);
  border: none;
  display: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(8, 160, 49);
  }

  @media ${Breakpoints.lg} {
    width: 50%;
  }

  &.CardNovo {
    display: block;
  }
`;

export const ContainerInfoEnvio = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.CardNovo {
    display: none;
  }
`;

export const TextEnvio = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
`;

