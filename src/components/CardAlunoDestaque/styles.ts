import styled from "styled-components";

export const Colors = {
  BackGroundFundo: "#D9D9D9",
};

export const Card = styled.article`
  width: 100%;
  height: 4rem;
  border-radius: 5.97px;
  padding: 0.5rem 1rem;
  background-color: ${Colors.BackGroundFundo};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ContainerTextsInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  flex-direction: column;
  gap: 0.2rem;
`;

export const TextNome = styled.p`
  font-size: 0.82rem;
  font-weight: bold;
  color: black;
`;

export const TextEmail = styled.p`
  font-weight: bold;
  font-size: 0.65rem;
  color: black;
`;

export const FotoPerfil = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${Colors.BackGroundFundo};
`;

export const ContainerIconeAvanco = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImagemIconeAvanca = styled.img``;
