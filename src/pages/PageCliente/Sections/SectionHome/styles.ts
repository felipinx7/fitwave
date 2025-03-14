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

export const Home = styled.section`
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

export const ContainerCardsTreinos = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${Breakpoints.bg} {
    flex-direction: column;
  }
`;

// Card do Total de Alunos
export const CardTotalAlunos = styled.article`
  background-color: ${colors.backgroundFundoContainers};
  width: 100%;
  height: 25%;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  position: relative;
`;

export const IconeImagens = styled.img`
  position: absolute;
  right: 0;
  transform: translateX(-20%);
`;

export const ContainerTextos = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  flex-direction: column;
  gap: 2rem;
  line-height: 1;
`;

export const TextInfo = styled.h2`
  font-size: 2rem;
  color: ${colors.corCinza};
  font-weight: 500;
`;

export const TextNumero = styled.h1`
  font-size: 6rem;
  color: ${colors.corCinza};
  font-weight: 700;
`;

export const TextDesempenhoTreinos = styled.h1`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  font-weight: 600;
  color: ${colors.corCinza};
`;

export const ContainerGrafico = styled.div`
  width: 100%;
  height: auto;
`;
