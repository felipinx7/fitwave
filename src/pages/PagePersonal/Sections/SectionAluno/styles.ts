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
  verdeForte: "#057333", // Correção do nome da variável
};

// Criação da Section Geral Para o Conteúdo
export const Alunos = styled.section`
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

// Criação da container Filtros e Inputs

export const ContainerFiltro = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const InputPesquisa = styled.input`
  width: 80%;
  height: 3.5rem;
  background-color: ${colors.verdeFraco};
  border: none;
  border-radius: 20px;
  font-size: 1.1rem;
  color: ${colors.verdeClaro};
  font-weight: 600;
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 1.1rem;
    color: ${colors.verdeClaro};
    font-weight: 600;
  }
  &:focus {
    border: 3px solid ${colors.fontverde};
  }
`;

export const Selectnivel = styled.select`
  background-color: ${colors.verdeFraco};
  color: ${colors.verdeClaro};
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  outline: none;

  &:focus {
    border: 2px solid ${colors.fontverde};
    background-color: ${colors.backgroundFundoContainers};
  }

  option {
    background-color: ${colors.corBranca};
    color: ${colors.verdeForte}; // Correção da cor
    padding: 0.5rem;
  }
`;

// Fim dos Campos de Pesquisa

// Parte dos Alunos

export const containerLinha = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 1rem;

  hr {
    width: 100%;
    height: auto;
    background-color: transparent;
    border: 1px solid ${colors.verdeClaro};
  }
`;

export const TextAlunos = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: left;
  width: 100%;
  color: ${colors.fontverde};
`;

export const containerCardsALunos = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  flex-direction: column;
`;

export const containerAdicionarCliente = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: fixed;
  background-color: ${colors.verdeForte};
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.corBranca};
  right: 0;
  bottom: 0;
  transform: translate(-100%, -100%);
  cursor: pointer;
`;

// Tela de Cadastro
export const ContainerCadastarCliente = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Select = styled.select`
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  padding: 0.5rem;
  outline: none;
  color: #777;
`;

export const CadastroContainer = styled.div`
  background-color: ${colors.verdeForte};
  width: 400px;
  height: 70%;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-track{
    background-color: ${colors.backgroundFundoContainers};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: ${colors.verdeClaro};
    border-radius: 10px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${colors.corBranca};
`;

export const FotoPerfil = styled.input`
  width: 80px;
  height: 80px;
  background-color: ${colors.corBranca};
  border-radius: 50%;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 500rem;
  color: ${colors.corBranca};
  position: relative;
  left: 39%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${colors.corBranca};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: ${colors.corBranca};
  border: none;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 10px;
  color: #777;
  width: 100%;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${colors.verdeClaro};
  color: ${colors.corBranca};
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${colors.fontverde};
  }
`;

export const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.corBranca};
  text-align: center;
  padding-bottom: 2rem;
`;
