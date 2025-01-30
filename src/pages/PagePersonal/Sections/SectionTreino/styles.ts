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
  verdeForte: "#057333",
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

export const ConatinerButtonAdicionar = styled.div`
  width: 4rem;
  height: 4rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${colors.verdeForte};
  position: fixed;
  cursor: pointer;
  color: ${colors.corBranca};
  font-size: 4rem;
  right: 0;
  font-weight: 600;
  bottom: 0;
  transform: translate(-100%, -100%);

  @media ${Breakpoints.lg} {
    transform: translate(-100%, -160%);
  }
`;

interface CintainerCadastrarTreinoProps {
  showContainerCadastrar: boolean;
}
export const ContainerCadastrarTreino = styled.form<CintainerCadastrarTreinoProps>`
  display: ${(props) => (props.showContainerCadastrar ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  position: fixed;
  height: 80%;
  overflow-y: auto;
  padding: 4rem 1.5rem;
  background-color: ${colors.verdeForte};
  border-radius: 20px;
  transform: translate(50%, -30%);
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  z-index: 100;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.verdeClaro};
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.fontverde};
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.backgroundPrimary};
    border-radius: 10px;
  }

  @media ${Breakpoints.lg} {
    width: 95%;
    transform: translate(0%, -30%);
  }
`;

export const ContainerFotoTreino = styled.input`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  background-color: ${colors.corCinza};
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.1rem;
  color: ${colors.corBranca};
  transition: background-color 0.3s ease-in-out;
  border: 2px solid ${colors.verdeForte};

  &:hover {
    background-color: ${colors.backgroundVerderFraco};
  }
`;

export const containerLabels = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const label = styled.label`
  font-weight: 600;
  font-size: 1.5rem;
  color: ${colors.corBranca};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  background-color: ${colors.corBranca};
  font-size: 1.4rem;
  color: ${colors.verdeClaro};
  border: 2px solid ${colors.verdeFraco};
  border-radius: 10px;
  padding-left: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colors.textFontInput};
  }

  &:focus {
    border-color: ${colors.fontverde};
    box-shadow: 0 0 5px ${colors.fontverde};
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 3.5rem;
  background-color: ${colors.corBranca};
  font-size: 1.4rem;
  color: ${colors.verdeClaro};
  border: 2px solid ${colors.verdeFraco};
  border-radius: 10px;
  padding-left: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${colors.fontverde};
    box-shadow: 0 0 5px ${colors.fontverde};
    outline: none;
  }
`;

export const buttonCadastrarTreino = styled.button`
  width: 100%;
  height: 5rem;
  border-radius: 20px;
  font-size: 1.6rem;
  color: ${colors.corBranca};
  font-weight: 700;
  border: none;
  padding: 1rem 2rem;
  text-align: center;
  background-color: ${colors.fontverde};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${colors.verdeClaro};
  }

  &:active {
    background-color: ${colors.verdeFraco};
  }

  &:disabled {
    background-color: ${colors.corCinza};
    cursor: not-allowed;
  }
`;

export const containerInfoFhecarCard = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: black;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.corBranca};
  transform: translate(-20%, 10%);
`;

export const tituloCard = styled.h1`
  color: ${colors.corBranca};
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
  height: auto;
`;
