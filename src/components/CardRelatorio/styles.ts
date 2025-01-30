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

export const Card = styled.article`
  width: 90%;
  height: auto;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.verdeFraco};
  border-radius: 10px;

  @media ${Breakpoints.lg} {
    width: 100%;
  }
`;

export const ContainerPerfil = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ContainerFotoPerfil = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${Breakpoints.bg} {
    width: 50%;
  }
`;

export const FotoPerfil = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  background-color: ${colors.verdeForte};
`;

export const ContainerTextos = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.1rem;
  width: 100%;
`;

export const textoNome = styled.h4`
  color: ${colors.fontverde};
  font-weight: 600;
  font-size: 1.3rem;
`;
export const textoEmai = styled.p`
  color: ${colors.fontverde};
  font-weight: 600;
  font-size: 1rem;
`;

export const containerButton = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const ButtonRelatorio = styled.button`
  width: 40%;
  height: 50%;
  border: none;
  background-color: ${colors.fontverde};
  color: ${colors.corBranca};
  font-size: 1.3rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  @media ${Breakpoints.lg} {
    width: 60%;
  }

  &:hover{
    background-color: ${colors.backgroundHover};
  }
`;

