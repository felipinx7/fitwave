import e from "express";
import styled from "styled-components";

export const Card = styled.article`
  max-width: 1250px;
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #d8ffe2;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



export const ContainerInfoUser = styled.div`
  width: auto;
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
`;

export const TextNome = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
`;

export const TextEmail = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: black;
`;

export const ContainerData = styled.div`
  display: flex;
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
  width: auto;
`;

export const ContainerStatus = styled.div`
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
  background-color: rgb(99, 236, 135);
`;

export const ContainerEditar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const ContainerLapis = styled.div`
  svg {
    font-size: 2rem;
  }
`;

export const ContainerLixo = styled.div`
  svg {
    font-size: 2rem;
  }
`;
