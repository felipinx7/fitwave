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

export const Perfil = styled.section`
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

export const ContainerInfoUsuario = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 2rem;
  background-color: ${colors.verdeFraco};
  border-radius: 20px;
  display: flex;
  gap: 2rem;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: column;
`;

export const containerFotoPerfil = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FotoPerfil = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${colors.fontverde};
`;

export const containerInfoClientes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: auto;

  @media ${Breakpoints.sm} {
    flex-direction: column;
  }
`;

export const containerInput = styled.div`

  @media ${Breakpoints.sm} {
    width: 100%;
  }
`;

export const label = styled.label`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${colors.fontverde};
`;

export const inputUser = styled.input`
  width: 100%;
  height: 3rem;
  background-color: rgba(99, 236, 135, 1);
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.corBranca};
  border: none;

  &::placeholder {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${colors.backgroundPrimary};
  }
`;

export const ContainerInfoCorpo = styled.div`
  width: 100%;
  height: auto;
`;

export const textAviso = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.fontverde};
  text-align: center;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerParteDireita = styled.div`
  width: 50%;
  height: 100%;

  @media ${Breakpoints.sm} {
    width: 100%;
  }
`;

export const ContainerParteEsquerda = styled.div`
  width: 50%;
  height: 100%;

  @media ${Breakpoints.sm} {
    width: 100%;
  }
`;

export const containerInfoMassaCorporal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${Breakpoints.sm} {
    flex-direction: column;
  }
`;
