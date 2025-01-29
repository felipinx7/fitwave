import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

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
  


// Parte de Cima da Section
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2rem;

  @media ${Breakpoints.lg} {
    align-items: baseline;
    flex-direction: column-reverse;
    gap: 2rem;
  }
  @media ${Breakpoints.md} {
    padding-bottom: 1rem;
  }
`;

export const TextOla = styled.h1`
  font-size: 2.16rem;
  color: ${colors.fontverde};
  font-weight: 500;
`;

// Destaque do texto Olá
export const Spanh1 = styled.span`
  font-size: 2.16rem;
  color: ${colors.fontverde};
  font-weight: bold;
`;

// Criação da Container De Perfil de cima do Header
export const ContainerInfoPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${Breakpoints.lg} {
    flex-direction: row-reverse;
  }
`;

export const FotoPerfil = styled.img`
  width: 4rem;
  height: 4rem;
  background-color: ${colors.fontverde};
  border-radius: 50%;
`;

export const ContainerTextsPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;

  @media ${Breakpoints.lg} {
    text-align: left;
  }
`;

export const TextNomePersonal = styled.h5`
  color: ${colors.fontverde};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TextCargo = styled.p`
  font-size: 0.9rem;
  color: ${colors.fontverde};
  font-weight: 500;
`;
// Fim do Header