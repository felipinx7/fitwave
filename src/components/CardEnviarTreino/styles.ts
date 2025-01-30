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
  padding: 1rem;
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
  outline: none;

  &::placeholder {
    color: ${colors.corBranca};
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const FomularioEnvio = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 38%;
  overflow-y: auto;
`;

export const ContainerEnvio = styled.div`
  width: 100%;
  background-color: ${colors.verdeForte};
  height: 50%;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextDicas = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colors.corBranca};
`;

export const InputDica = styled.input`
  width: 100%;
  height: 70%;
  border: none;
  background-color: #d9d9d9d9;
  font-size: 1.2rem;
  color: ${colors.verdeForte};
  padding: 2rem;

  &::placeholder {
    font-size: 1.2rem;
    color: ${colors.verdeForte};
  }
`;

export const buttonEnviar = styled.button`
  width: 100%;
  height: 5rem;
  background-color: ${colors.verdeClaro};
  color: ${colors.corBranca};
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 10px;
  border: none;
`;

export const ContainerFechar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: absolute;
  background-color: ${colors.corBranca};
  top: 0;
  right: 0;
  transform: translate(-20%, 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg{
    font-size: 1.5rem;
    color: ${colors.verdeForte};
  }
`;
