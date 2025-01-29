import styled from "styled-components";

interface CardDetalhesInfoProps {
  showCardDetalhes: boolean;
}

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

export const containerGeral = styled.div<CardDetalhesInfoProps>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.showCardDetalhes ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const TextDetalhesTreino = styled.h2`
  font-weight: 600;
  font-size: 1.9rem;
  color: ${colors.corBranca};
`;

export const CardDetalhesInfo = styled.div<CardDetalhesInfoProps>`
  max-width: 500px;
  width: 100%;
  position: fixed;
  height: auto;
  max-height: 100%;
  border-radius: 20px;
  background-color: ${colors.verdeForte};
  padding: 2rem;
  display: ${(props) => (props.showCardDetalhes ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const containerFechar = styled.div`
  width: 2rem;
  height: 2rem;
  top: 0;
  right: 0;
  border-radius: 50%;
  transform: translate(-40%, 30%);
  position: absolute;
  background-color: ${colors.corBranca};
  z-index: 9999999;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.corCinza};
  }
`;

export const ImagemExercicios = styled.img`
  width: 100%;
  height: 10rem;
  border-radius: 18px;
`;

export const containerInfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ContainerInfoTexts = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
`;

export const TextDescricao = styled.div`
  color: ${colors.corBranca};
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 1rem;
`;

export const textInfo = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.corBranca};
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 1rem;
  flex-direction: column;
`;

export const ContainerButtonEdicao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const buttonEnviar = styled.div`
  background-color: ${colors.verdeClaro};
  border-radius: 10px;
  border: none;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  gap: 1rem;
  font-weight: 600;
  color: ${colors.corBranca};
  text-align: center;

  &:hover {
    background-color: ${colors.backgroundHover};
  }
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
