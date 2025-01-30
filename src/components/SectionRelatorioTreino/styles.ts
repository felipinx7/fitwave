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

interface RelatorioProps {
  MostrarSection: boolean;
}

export const Section = styled.section<RelatorioProps>`
  display: ${(props) => (props.MostrarSection ? "flex" : "none")};
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 2;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: absolute;
  right: -1%;
  top: 0;
  padding: 1rem 0.5rem;
  flex-direction: column;
  background-color: #f0fcec;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media ${Breakpoints.lg} {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: 1rem 0.5rem 5rem;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 20px;
  background-color: ${colors.verdeFraco};
  padding: 0.5rem;
`;

export const ContainerPerfil = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerFotoPerfil = styled.div`
  width: 10%;
  height: 100%;

  @media ${Breakpoints.md} {
    width: 15%;
  }
`;

export const FotoCliente = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${colors.verdeClaro};
`;

export const ContainerTextos = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 1rem;
`;

export const textnome = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.verdeClaro};
`;

export const textInfo = styled.p`
  color: ${colors.verdeClaro};
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ContainerMassaCorpora = styled.div`
  width: 100%;
  height: 50%;
  background-color: rgba(99, 236, 135, 0.39);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TextResumo = styled.h1`
  width: 100%;
  text-align: left;
  padding: 2rem;
  font-size: 1.3rem;
  color: ${colors.verdeClaro};
  font-weight: 600;
`;

export const ContainerGeral = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 4rem;
`;

export const InfoContainerCorpo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

export const textnomeTitulo = styled.p`
  color: ${colors.verdeClaro};
  font-weight: 500;
  font-size: 1.1rem;
`;

export const ValorCorpo = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${colors.verdeForte};
`;

export const ContainerPeso = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
export const ContainerAltura = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
export const ContainerImc = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
export const ContainerProgresso = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ContainerHistoricoTreinos = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${colors.backgroundVerderFraco};
  border-radius: 20px;
  margin-top: 2rem;
`;

export const TituloHistorico = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.verdeClaro};
  margin-bottom: 1rem;
`;

export const TabelaTreinos = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.corBranca};
  border-radius: 10px;
  overflow: hidden;
`;

export const CabecalhoTabela = styled.thead`
  background-color: ${colors.verdeClaro};
  color: ${colors.corBranca};
  font-weight: bold;
  text-align: left;
`;

export const LinhaTabela = styled.tr`
  &:nth-child(even) {
    background-color: ${colors.corBranca};
  }

  &:nth-child(odd) {
    background-color: ${colors.corBranca};
  }
`;

export const CelulaTabela = styled.td`
  padding: 0.8rem;
  border-bottom: 1px solid ${colors.corCinza};
  font-size: 1rem;
`;

export const CelulaCabecalho = styled.th`
  padding: 1rem;
  font-size: 1.1rem;
`;

export const containerComentarioPersonal = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.verdeFraco};
  border-radius: 20px;
  padding: 2rem;
  overflow: hidden;
`;

export const InputComentarioPersonal = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 2rem;
  border: none;
  border-radius: 20px;
  background-color: ${colors.corBranca};
  outline: none;

  &:focus {
    border: 2px solid ${colors.verdeClaro};
  }
`;

export const buttonGerarPdf = styled.button`
  width: 50%;
  height: 3rem;
  background-color: ${colors.verdeClaro};
  border-radius: 20px;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.corBranca};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.backgroundHover};
  }
`;

export const ContainerFechar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${colors.verdeClaro};
  font-size: 2.3rem;
  font-weight: 600;
  color: ${colors.corBranca};
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transform: translateY(180%);

  @media ${Breakpoints.lg} {
    right: 0;
    left: unset;
    transform: translate(-2rem, 2rem);
  }
`;
