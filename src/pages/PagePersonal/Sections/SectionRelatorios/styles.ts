import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

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
};

// Criação da Section Geral Para o Conteúdo
export const Relatorio = styled.section`
  min-height: 100vh;
  width: calc(100% - 300px);
  overflow-y: auto;
  z-index: 2;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
  right: 0;
  padding: 1rem;
  flex-direction: column;
  background-color: ${colors.backgroundPrimary};

  @media ${Breakpoints.lg} {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export const containerInput = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const CampodeInput = styled.input`
  width: 90%;
  height: 2.5rem;
  background-color: ${colors.verdeFraco};
  padding: 1.5rem;
  border: none;
  border-radius: 20px;
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.verdeClaro};
  outline: none;

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.verdeClaro};
  }

  &:focus {
    border: 3px solid ${colors.verdeClaro};
  }

  @media ${Breakpoints.lg} {
    width: 100%;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  gap: 1rem;
`;

export const ContainerMensagem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MensagemNenhumResultado = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: ${colors.fontverde };
`;
