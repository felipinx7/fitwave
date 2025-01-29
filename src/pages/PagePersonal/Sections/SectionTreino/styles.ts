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
  textFontInput: "rgba(96, 214, 105, 1)",
  backgroundVerderFraco: "rgba(185, 246, 197, 1)",
};

// Interface Global de Manipulação
interface ContainerProps {
  isActive: boolean;
}

// Criação da Section Geral Para o Conteúdo
export const Treinos = styled.section`
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

export const containerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

// Criação do Input de Pesquisa
export const InputPesquisa = styled.input`
  width: 80%;
  height: 3rem;
  border-radius: 20px;
  background-color: ${colors.verdeFraco};
  border: none;
  color: ${colors.textFontInput};
  font-size: 1.1rem;
  text-align: center;
  outline: none;
  font-weight: 600;
  transition: all 0.1s ease;

  &::placeholder {
    color: ${colors.textFontInput};
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
  }
  &:focus {
    outline: 3px solid ${colors.verdeClaro};
  }
`;

// Criação do Filtro ao lado do Input
export const containerFiltro = styled.div``;

export const InputSelected = styled.select`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  color: ${colors.verdeClaro};
  background-color: ${colors.verdeFraco};
  border-radius: 10px;
  border: none;

  &option {
    width: 100%;
    padding: 0.3rem;
    height: 3rem;
    background-color: ${colors.backgroundPrimary};
    color: ${colors.corBranca};
    border: none;
  }
  &:focus {
    border-color: ${colors.verdeClaro};
    outline: none;
    color: ${colors.verdeClaro};
  }
`;

// Parte dos Filtros de Categoria
export const ContainerFiltros = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding-top: 1rem;

  @media ${Breakpoints.md} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

// Butão de Filtro
export const Filtro = styled.button<ContainerProps>`
  width: 10rem;
  height: auto;
  padding: 0.5rem;
  border: none;
  font-weight: 600;
  background-color: ${(props) =>
    props.isActive
      ? `${colors.verdeClaro}`
      : `${colors.backgroundVerderFraco}`};
  border-radius: 5px;
  font-size: 1rem;
  color: ${(props) =>
    props.isActive ? `${colors.corBranca}` : `${colors.verdeClaro}`};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.verdeClaro};
    color: ${colors.corBranca};
  }

  @media ${Breakpoints.md} {
    width: 100%;
  }
`;

// Criação das Categorias

// Criaação da contaninerGeral das Categorias

export const ContainerGeralCategorias = styled.div`
  width: 100%;
  min-height: auto;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

export const ContainerCardsTreinos = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  flex-grow: 1;
  flex-basis: 200;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`;

export const TextosTitulos = styled.h1`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${colors.verdeClaro};
`;

// Categoria de Cardio
export const ContainerCardio = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

// Categoria de Cardio
export const ContainerGluteos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

// Categoria de Cardio
export const ContainerPernas = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

// Categoria de Costas
export const ContainerCostas = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

// Categoria de Peitoral
export const ContainerPeitoral = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
`;

export const ContainerMensagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: unset;
  width: 100%;
  position: absolute;

  height: 100%;
`;

export const MensagemErro = styled.h1`
  align-items: center;

  font-size: 2rem;
  font-weight: bold;
  color: ${colors.verdeClaro};
`;
//Fim das Categorias
