import styled from "styled-components";
import * as Imagens from "../../../../assets/index";
import { Breakpoints } from "../../../../styles/BreakPoints";

const Colors = {
  fontText: "rgba(0, 217, 57, 1)",
  HoverButton: "rgb(14, 151, 51)",
  backgroundInput: "#DBDBDB",
  colorFontLabel: "#646464",
  colorPlaceholder: "rgba(118, 118, 118, 0.49)",
  Branco: "white",
};

export const ContainerVoltar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transform: translate(-10rem, 4rem);

  svg {
    color: ${Colors.fontText};
    font-weight: 800;
    font-size: 5rem;
    transform: rotate(180deg);
  }

  @media ${Breakpoints.lg} {
    transform: translate(-3rem, 4rem);
  }
  @media ${Breakpoints.ms} {
    transform: translate(-3rem, 1rem);
  }
`;

interface SectionProps {
  showContainer?: boolean;
}

export const Section = styled.section<SectionProps>`
  background-image: url(${Imagens.texturasLinhas});
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 999999999999999999;
  display: ${(props) => (props.showContainer ?? false ? "block" : "none")};
  top: 0;
  left: 0;
`;

export const containerHeaderSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  gap: 0.5rem;
  flex-direction: column;
`;

export const ContainerGeral = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

export const TituloPrincipal = styled.h1`
  color: ${Colors.fontText};
  font-size: 3rem;
  font-weight: bold;
`;

export const ImagenLogo = styled.img`
  width: 10rem;
  height: auto;
`;

// Criação do Formulário
export const containerForm = styled.form`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerGeralForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media ${Breakpoints.lg} {
    flex-direction: column;
  }
`;

export const ContainerParteDireita = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  flex-direction: column;
  gap: 1rem;

  @media ${Breakpoints.lg} {
    width: 100%;
  }
`;

export const ContainerParteEsquerda = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: baseline;
  flex-direction: column;
  gap: 1rem;

  @media ${Breakpoints.lg} {
    width: 100%;
  }
`;

export const containerInput = styled.div`
  width: 100%;
  height: 4rem;
  background-color: ${Colors.backgroundInput};
  border-radius: 10.16px;
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 0.8rem;
  padding: 0 1rem;

  @media ${Breakpoints.sm} {
    flex-direction: column;
    align-items: baseline;
    height: auto;
  }
`;

export const labelInput = styled.p`
  color: ${Colors.colorFontLabel};
  font-weight: 600;
  font-size: 1.9rem;
  width: auto;
  white-space: nowrap;

  @media ${Breakpoints.sm} {
    white-space: normal;
  }
`;

export const InputForm = styled.input`
  width: 80%;
  height: auto;
  background-color: transparent;
  border: none;
  color: ${Colors.colorPlaceholder};
  font-weight: 500;
  font-size: 1.3rem;

  &::placeholder {
    color: ${Colors.colorPlaceholder};
    font-weight: 500;
    font-size: 1.3rem;
  }
`;

export const buttonCadastrar = styled.button`
  width: 50%;
  height: auto;
  padding: 0.5rem;
  background-color: ${Colors.fontText};
  border: none;
  font-size: 2.2rem;
  border-radius: 10px;
  font-weight: 700;
  color: ${Colors.Branco};
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${Breakpoints.lg} {
    width: 100%;
  }

  &:hover {
    background-color: ${Colors.HoverButton};
  }
`;
