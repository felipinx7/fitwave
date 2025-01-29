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

// Interface para as propriedades do Card
interface CardProps {
  showCard: boolean;
}

export const containerCardEnviar = styled.div<CardProps>`
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.showCard ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 99999999;
  position: absolute;
  left: 0;
  top: 0;
  padding: 2rem;
  align-items: center;

  @media ${Breakpoints.lg} {
    justify-content: flex-start;
  }
`;

export const Card = styled.div`
  width: 60%;
  height: 39rem;
  border-radius: 20px;
  position: fixed;
  background-color: ${colors.verdeForte};
  display: flex;
  z-index: 99999999;
  padding: 2rem;
  text-align: center;
  flex-direction: column;

  @media ${Breakpoints.lg} {
    width: 90%;
  }
`;

export const textEnviarAluno = styled.h2`
  width: 100%;
  height: 10%;
  color: ${colors.corBranca};
  font-weight: 500;
`;

export const InputEnviarTreino = styled.input`
  background-color: ${colors.verdeFraco};
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  border: none;
  color: ${colors.corBranca};
  text-align: center;
  border-radius: 20px;
  margin-bottom: 1rem;

  &::placeholder {
    color: ${colors.corBranca};
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const FomularioEnvio = styled.form`
  height: 50%;
  width: 100%;
  overflow-y: auto;
  background-color: ${colors.corBranca};
`;

export const ContainerEnvio = styled.div`
  width: 100%;
  background-color: ${colors.verdeForte};
  height: 40%;
`;
