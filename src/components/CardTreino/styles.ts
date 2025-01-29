import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

// Variáveis de Cores
const colors = {
  backgroundPrimary: "#F0FCEC",
  fontverde: "#00D939",
  verdeFraco: "rgba(99, 236, 135, 0.39)",
  verdeClaro: "#1FE624",
  corBranca: "white",
  verdeMorto: "rgba(89, 188, 115, 0.82)",
  corCinza: "#CBCBCB",
  backgroundFundoContainers: "rgba(217, 217, 217, 0.52)",
  textFontInput: "rgba(96, 214, 105, 1)",
  backgroundHover: "rgb(10, 156, 22)",
  backgroundVerderFraco: "rgba(185, 246, 197, 1)",
  verdeForte: "rgba(5, 115, 51, 1)",
  fundoTrasparente: "rgba(255, 255, 255, 0.15)",
};


// Criação do Card
export const Card = styled.article`
  max-width: 250px;
  width: 100%;
  height: 20rem;
  display: flex;
  background-color: ${colors.backgroundVerderFraco};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  @media ${Breakpoints.ms} {
    max-width: unset;
  }
`;

export const ImagemTreino = styled.img`
  width: 100%;
  height: 40%;
  border-radius: 20px;
  background-color: ${colors.backgroundFundoContainers};
`;

export const TextInfosCard = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
`;

export const ContainerTetxos = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 0.5rem;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const buttonDetalhes = styled.button`
  border: none;
  width: 100%;
  height: 15%;
  padding: 0.5rem;
  border-radius: 20px;
  color: ${colors.corBranca};
  font-weight: 600;
  font-size: 1.1rem;
  background-color: ${colors.verdeClaro};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.fontverde};
  }
`;

export const containerEditar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const ContainerIconeEdicoes = styled.div``;

export const IconeOpcao = styled.div`
  font-size: 2rem;
  position: absolute;
  cursor: pointer;
  left: 50%;
  transform: translate();
  color: ${colors.corBranca};
  font-weight: 600;
`;

export const ContainerButtonEdicao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const buttonsEdicao = styled.button`
  background-color: ${colors.verdeClaro};
  border-radius: 10px;
  border: none;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.corBranca};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.backgroundHover};
  }
`;
