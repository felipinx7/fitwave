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

// Criação do Card
export const Card = styled.article`
  max-width: 250px;
  width: 100%;
  height: 20rem;
  display: flex;
  background-color: ${colors.backgroundVerderFraco};
  border-radius: 10px;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  @media ${Breakpoints.ms} {
    max-width: unset;
  }
`;

export const ImagemTreino = styled.img`
  width: 100%;
  height: 40%;
  border-radius: 20px;
  background-color: ${colors.backgroundFundoContainers};
`;

export const TextInfosCard = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
`;

export const ContainerTetxos = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 0.5rem;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const buttonDetalhes = styled.button`
  border: none;
  width: 100%;
  height: 15%;
  padding: 0.5rem;
  border-radius: 20px;
  color: ${colors.corBranca};
  font-weight: 600;
  font-size: 1.1rem;
  background-color: ${colors.verdeClaro};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.fontverde};
  }
`;

export const containerEditar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const ContainerIconeEdicoes = styled.div``;

export const IconeOpcao = styled.div`
  font-size: 2rem;
  position: absolute;
  cursor: pointer;
  left: 50%;
  transform: translate();
  color: ${colors.corBranca};
  font-weight: 600;
`;

export const ContainerButtonEdicao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const buttonsEdicao = styled.button`
  background-color: ${colors.verdeClaro};
  border-radius: 10px;
  border: none;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.corBranca};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.backgroundHover};
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
  transform: translate(50%, -50%);
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
  color: black;
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
  color: black;
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
