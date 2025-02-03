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
  verdeFprte: "#057333",
};

// Criação da Section Geral Para o Conteúdo
export const Status = styled.section`
  min-height: 100vh;
  width: calc(100% - 300px);
  overflow-y: auto;
  z-index: 2;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
  right: 0;
  padding: 1rem;
  background-color: ${colors.backgroundPrimary};

  @media ${Breakpoints.lg} {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export const containerInput = styled.input`
  width: 100%;
  height: 3rem;
  background-color: ${colors.verdeFraco};
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.verdeClaro};
  border: none;
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.verdeClaro};
  }
`;

export const ContainerFitros = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

interface FiltrProps {
  Active: boolean;
}

export const Filtro = styled.button<FiltrProps>`
  border: none;
  background-color: ${(props) =>
    props.Active ? `${colors.fontverde}` : `${colors.verdeFraco}`};
  font-size: 1.2rem;
  width: 50%;
  height: auto;
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-radius: 20px;
  color: ${colors.corBranca};
`;

export const containerCardsClientes = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;
