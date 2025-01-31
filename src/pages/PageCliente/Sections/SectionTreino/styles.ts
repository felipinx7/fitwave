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

export const Treino = styled.section`
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

export const InputPesquisa = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 20px;
  border: none;
  background-color: ${colors.verdeFraco};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.fontverde};
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.fontverde};
  }
  &:focus {
    border: 2px solid ${colors.fontverde};
  }
`;

export const ContainerFiltros = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0;
`;

interface FiltroProps {
  active: boolean;
}

export const filtro = styled.button<FiltroProps>`
  width: 40%;
  cursor: pointer;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active ? `${colors.fontverde}` : ` ${colors.verdeFraco}`};
  font-size: 1.2rem;
  color:  ${colors.corBranca};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.fontverde};
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

export const containerMensagemerro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const MensagemNenhumTreino = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.fontverde};
`;
