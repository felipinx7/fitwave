import styled from "styled-components";
import { Colors } from "../CardAlunoDestaque/styles";

// Variaveis de Cores
const colors = {
  backgroundPrimary: "#F0FCEC",
  fontverde: "#00D939",
  verdeFraco: "rgba(99, 236, 135, 0.39)",
  verdeClaro: "#1FE624",
  corBranca: "white",
  verdeMorto: "rgba(89, 188, 115, 0.82)",
  corCinza: "#CBCBCB",
  backgroundFundoContainers: "rgba(217, 217, 217, 0.52)",
  verdeFprte: "#057333",
  FundoCardChecked: "#63EC87",
  fundoVermelho: "rgba(255, 76, 70, 0.39)",
  vermelho: "#FF4C46",
};

interface CardProps {
  isChecked: boolean;
}

export const Card = styled.article<CardProps>`
  width: 100%;
  height: auto;
  border-radius: 20px;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isChecked ? `${colors.fundoVermelho}` : `${colors.FundoCardChecked}`};
`;

export const ContainerPerfil = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FotoPerfil = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${colors.corBranca};
`;

export const ContainerTextos = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const ContainerStatusCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const textnome = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.corBranca};
`;

export const Info = styled.p`
  color: ${colors.corBranca};
  font-weight: 600;
  font-size: 0.9rem;
`;

export const divPendente = styled.div<CardProps>`
  width: 40%;
  height: 50%;
  background-color: ${colors.vermelho};
  border-radius: 10;
  font-size: 1.2rem;
  display: ${(props) => (props.isChecked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: ${colors.corBranca};
  font-weight: 600;
  border-radius: 20px;

`;

export const ContainerData = styled.p<CardProps>`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.corBranca};
  display: ${(props) => (props.isChecked ? "none" : "flex")};
`;
