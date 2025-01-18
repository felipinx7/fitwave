import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

interface ContainerInfoProps {
  showCardInfo: boolean;
}

interface CardInfoprops {
  Tema: "Perfil" | "CardFuncionario";
}

export const ContainerInfo = styled.div<ContainerInfoProps & CardInfoprops>`
  width: 100%;
  height: calc(100vh - 146.44px);
  background-color: none;
  z-index: 0;
  z-index: 2;
  position: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "relative";
      case "CardFuncionario":
        return "absolute";
    }
  }};
  overflow-y: auto;
  display: ${(props) => (props.showCardInfo ? "block" : "none")};
  bottom: 0;
  transform: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "translate(0, 0)";
      case "CardFuncionario":
        return "translate(8.5rem, 12rem)";
    }
  }

  };

  @media ${Breakpoints.lg} {
    transform: ${({ Tema }) => {
      switch (Tema) {
        case "Perfil":
          return "translate(0, 0)";
        case "CardFuncionario":
          return "translate(-0.5rem, 14rem)";
      }
    }};
  }
`;

export const CardInfo = styled.div<CardInfoprops>`
  width: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "100%";
      case "CardFuncionario":
        return "82.4%";
    }
  }};
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 70px 70px;
  background-color: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "#cfcfcf";
      case "CardFuncionario":
        return "#D8FFE2";
    }
  }};
  z-index: 0;
  position: relative;

  @media ${Breakpoints.lg} {
    width: 100%;
    height: auto;
    padding: 2rem 0;
  }
`;

export const InformacoesPrincipais = styled.form`
  max-width: 1240px;
  width: 100%;
  height: 100%;
  display: flex;

  @media ${Breakpoints.lg} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ConatinerInformacoesUsuario = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${Breakpoints.lg} {
    width: 70%;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  @media ${Breakpoints.md} {
    width: 100%;
  }
`;

export const ContainerInformacaoLado = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export const InfoFotoPerfil = styled.div`
  gap: 0.5rem;
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 4rem 0;

  @media ${Breakpoints.lg} {
    padding: 0;
  }
`;

interface ContainerPhotoProps {
  isDisable: boolean;
}

export const ContainerPhoto = styled.article<ContainerPhotoProps>`
  width: 150px;
  height: 150px;
  position: relative;
  border: ${(props) =>
    props.isDisable ? "none" : "2px solid rgba(0, 217, 57, 1)"};
  border-radius: 50%;
  background-color: white;
`;

export const InputFotoPerfil = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0;
`;

export const ImagemPrevia = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const textFotoPerfil = styled.p`
  font-size: 1.2rem;
  color: black;
  font-weight: 600;
  white-space: nowrap;
`;

export const ContainerIconePhoto = styled.article`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  bottom: 0;
  left: 85%;
  transform: translateX(-50%);
`;

export const InformacoesBasicas = styled.div`
  width: 80%;
  height: 50%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media ${Breakpoints.lg} {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerInputELabelBasic = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
`;

export const labelContainerBasic = styled.label`
  font-weight: 600;
  font-size: 1.2rem;
`;

interface InputsContainerBasicProps {
  isDisabled: boolean;
  Tema: "Perfil" | "CardFuncionario";
}

export const InputsContainerBasic = styled.input<InputsContainerBasicProps>`
  background-color: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "#e7e7e7";
      case "CardFuncionario":
        return "white";
    }
  }};
  max-width: 400px;
  height: 3rem;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  padding: 0 1rem;
  border: ${(props) => (props.isDisabled ? "none" : "2px solid #00C834")};
  outline: ${(props) => (props.isDisabled ? "#00C834" : "none")};

  &::placeholder {
    font-size: 1.1rem;
    color: black;
  }
`;

export const InfoParteBaixo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
  gap: 2rem;

  @media ${Breakpoints.lg} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const InputTelefone = styled.input<InputsContainerBasicProps>`
  max-width: 250px;
  width: 100%;
  height: 3rem;
  border: ${(props) => (props.isDisabled ? "none" : "2px solid #00C834")};
  outline: ${(props) => (props.isDisabled ? "#00C834" : "none")};
  border-radius: 20px;
  background-color: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "#e7e7e7";
      case "CardFuncionario":
        return "white";
    }
  }};
  font-size: 1rem;
  font-weight: 600;
  color: black;
  padding: 0 1rem;
  text-align: center;

  &::placeholder {
    font-size: 1.1rem;
    color: black;
  }

  @media ${Breakpoints.lg} {
    max-width: 400px;
    width: 100%;
  }
`;

interface InputCargoProps {
  Tema: "Perfil" | "CardFuncionario";
}

export const InputCargo = styled.input<InputCargoProps>`
  max-width: 400px;
  width: 100%;
  height: 3rem;
  background-color: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "#e7e7e7";
      case "CardFuncionario":
        return "white";
    }
  }};
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  padding: 0 1rem;
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 1.1rem;
    color: black;
  }
`;

interface InputNumeroCadastroProps {
  Tema: "Perfil" | "CardFuncionario";
}

export const InputNumeroCadastro = styled.input<InputNumeroCadastroProps>`
  max-width: 250px;
  width: 100%;
  height: 3rem;
  background-color: ${({ Tema }) => {
    switch (Tema) {
      case "Perfil":
        return "#e7e7e7";
      case "CardFuncionario":
        return "white";
    }
  }};
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  padding: 0 1rem;
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 1.1rem;
    color: black;
  }

  @media ${Breakpoints.lg} {
    max-width: 400px;
    width: 100%;
  }
`;

interface InputsStatusprops {
  isActive: boolean;
}

export const InpustStatus = styled.input<InputsStatusprops>`
  max-width: 250px;
  width: 100%;
  height: 3rem;
  background-color: ${(props) =>
    props.isActive ? "#63EC87" : "hsl(0, 82.00%, 78.20%)"};
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  padding: 0 1rem;
  text-align: center;
  outline: none;

  &::placeholder {
    font-size: 1.1rem;
    color: black;
  }

  @media ${Breakpoints.lg} {
    max-width: 400px;
    width: 100%;
  }
`;

export const ButtonAtualizarInfo = styled.button`
  max-width: 400px;
  width: 100%;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  background-color: #00c834;
  font-size: 1.4rem;
  color: white;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(8, 182, 54) !important;
  }
`;

export const ContainerLapis = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 0 0 42.79px 0;
  background-color: #00d939;
  z-index: 1;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgb(2, 180, 50);
  }
`;

export const ContainerFecharContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 0 42.79px 0 0;
  background-color: #00d939;
  z-index: 1;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transform: translateY(17.5rem);

  &:hover {
    background-color: rgb(2, 180, 50);
  }

  @media ${Breakpoints.lg} {
    top: 0;
    left: unset;
    right: 0;
    transform: translateY(0);
    border-radius: 0 0 0 42.79px;
  }
`;
