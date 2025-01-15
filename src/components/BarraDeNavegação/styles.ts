import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const CardColaboradorECliente = styled.div`
  height: calc(100vh - 146.46px);
  background-color: #f1f1f1;
  width: 25%;
  right: 0;
  top: 0;
  display: none;
  align-items: center;
  flex-direction: column;
  position: absolute;
  transform: translate(0, 9.1rem);
  transition: all 0.7s ease;
  padding: 0 0.5rem;
  gap: 2rem;
  z-index: 1;

  &.active {
    display: flex;
    transform: translate(0, 9.1rem);
  }
`;

export const DivsTextoESeta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
  transition: all 0.5s ease;

  svg {
    font-size: 2rem;
    color: rgba(85, 85, 85, 1);
    cursor: pointer;
  }
`;

export const TextNovoColaborador = styled.h3`
  display: flex;
  gap: 1rem;
  color: rgba(85, 85, 85, 1);
  font-size: 1.4rem;
`;

export const ContainerInputFoto = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ContainerCamera = styled.div`
  position: absolute;
  z-index: 2;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #bfbfbf;
  cursor: pointer;
  transform: translate(3rem, 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconeCamera = styled.svg`
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-1rem, -33%);
  font-size: 2rem;
  color: #525252;
  pointer-events: none;
`;

export const InputFoto = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
export const TextFotoPerfil = styled.p`
  font-size: 1rem;
  font-weight: 600;
  transform: translateY(-0.5rem);
`;

export const DivNavegacao = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: auto;
  height: auto;
  border-radius: 14.49px;
  padding: 1rem 0;
  transition: all 1s ease;

  @media ${Breakpoints.lg} {
    padding: 1rem 0.5rem;
  }
`;

interface ContainerParaInputCardColaborador {
  SwhoInputTipo: boolean;
}

export const FormColaborador = styled.form<ContainerParaInputCardColaborador>`
  width: 100%;
  height: auto;
  overflow-y: auto;
  display: ${(props) => (props.SwhoInputTipo ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;


  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color:rgb(137, 136, 136);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 217, 57, 1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-corner {
    background-color: rgba(0, 217, 57, 1);
  }
`;

export const FormCliente = styled.form<ContainerParaInputCardColaborador>`
  width: 100%;
  height: auto;
  overflow-y: auto;
  display: ${(props) => (props.SwhoInputTipo ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color:rgb(137, 136, 136);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 217, 57, 1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-corner {
    background-color: rgba(0, 217, 57, 1);
  }
`;

export const ContainerParaInputCard = styled.div`
  width: 100%;
  background-color: #dbdbdb;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: baseline;
  padding: 1rem 0.3rem;
  gap: 0.5rem;
  border-radius: 5.58px;
`;
export const LabelContainerCard = styled.label`
  color: #646464;
  font-weight: 600;
  font-size: 1.1rem;
`;



export const containerParaFormCliente = styled.div`
  width: 100%;
  background-color: #dbdbdb;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 1rem 0.3rem;
  gap: 0.5rem;
  border-radius: 5.58px;
`;

export const InputCardInfo = styled.input`
  height: auto;
  width: 80%;
  border-radius: 5.58px;
  border: none;
  background-color: transparent;
  outline: none;
  color: #767676;
  font-weight: 600;
  font-size: 1rem;
`;

export const SelectCardInfo = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  font-size: 1rem;
  color: #333;

  &:focus {
    outline: none;
  }

  option {
    color: #333;
    background-color: #fff;
  }
`;

export const ButtonEnviarInfoCard = styled.button`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  font-size: 1.3rem;
  color: white;
  font-weight: 600;
  background-color: #00d939;
  border-radius: 5.98px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgb(4, 134, 39);
  }
`;

// PARTE DA BARRA VERDE

export const BarraDeNavegacao = styled.div`
  width: 100%;
  height: 4.2rem;
  border-radius: 14.49px;
  background-color: #00d939;
  display: flex;
  padding: 0 2rem;
  transition: all 1s ease;

  &.active {
    width: 80%;

    @media ${Breakpoints.gg} {
      width: 75%;
    }
  }
`;

export const ContainerTipoUser = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  gap: 1rem;
  width: 50%;
`;

interface ContainerTipoProps {
  ShowOpcaoTroca: boolean;
}

export const ContainerGeralCardPersonalAdm = styled.div<ContainerTipoProps>`
  position: absolute;
  max-width: 1240px;
  margin: 0 auto;
  width: 90%;
  height: auto;
  transform: translateY(5rem);
  display: ${(props) => (props.ShowOpcaoTroca ? "block" : "none")};

  @media ${Breakpoints.sm} {
    left: 0;
    padding: 0 1rem;
  }
`;

export const ContainerCardPersonalAdm = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: start;
  padding: 0 0.5rem;
  gap: 0.5rem;
  max-width: 300px;
  width: 100%;
  height: 4rem;
  background-color: #59bc73;
  border-radius: 17px;
  left: 0;
  cursor: pointer;
`;

export const TextPersonalAdm = styled.h3`
  font-size: 1.3rem;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0rem;
`;

export const ContainerQuadrado = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12.55px;
  background-color: white;
  font-size: 3rem;
  color: #8a998e;
`;
export const ContainerTipo = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12.55px;
  background-color: white;
  font-size: 3rem;
  color: #8a998e;
`;

interface TextTipoUserProps {
  showArrowDow: boolean;
}

export const TextTipoUser = styled.h3<TextTipoUserProps>`
  font-size: 1.3rem;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0rem;
  svg {
    display: ${(props) => (props.showArrowDow ? "block" : "none")};
    font-size: 2rem;
    cursor: ${(props) => (props.showArrowDow ? "pointer" : "default")};
  }
`;

export const ContainerInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

export const ButtonColaborador = styled.button`
  background-color: white;
  max-width: 190px;
  width: 100%;
  height: 2.4rem;
  border: none;
  border-radius: 2.89px;
  font-size: 1.1rem;
  color: #00d939;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(255, 249, 249);
  }
`;

interface ClickContaineSinorProps {
  clickContainer: boolean;
}

export const ContainerSino = styled.div<ClickContaineSinorProps>`
  font-size: 2rem;
  height: 70%;
  width: 8%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.clickContainer ? "#59bc73" : "transparent"};

  &:hover {
    background-color: #59bc73;
  }
`;

export const ValorDeNotificacaoSino = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #00d939;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ValorNotificacao = styled.p`
  color: white;
  font-weight: 500;
  font-size: 0.6rem;
`;
interface ClickContainerBarrasProps {
  clickContainerBarras?: boolean;
}

export const ContainerBarras = styled.div<ClickContainerBarrasProps>`
  font-size: 2rem;
  height: 70%;
  width: 8%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.clickContainerBarras ? "#59bc73" : "transparent"};

  &:hover {
    background-color: #59bc73;
  }
`;

interface ContainerFiltroProps {
  ShowFiltros: boolean;
}

export const ContainerFiltro = styled.div<ContainerFiltroProps>`
  max-width: 250px;
  border-radius: 17px;
  width: 100%;
  display: ${(props) => (props.ShowFiltros ? "flex" : "none")};
  height: auto;
  background-color: #59bc73;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 1rem;
  position: absolute;
  font-size: 1.3rem;
  color: #347244;
  font-weight: bold;
  transform: translate(-100%, 80%);
`;

export const FiltroInput = styled.input`
  appearance: none;
  width: 40px;
  height: 40px;
  border: 2px solid #ffff;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:checked {
    background-color: rgb(0, 255, 68);
    border-color: #ffff;
  }

  &:checked::before {
    content: "\2713";
    font-size: 16px;
    color: white;
    position: absolute;
    top: -1px;
    left: 4px;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 255, 0, 0.3);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 214px;
  top: 87%;
  transform: translateY(-59%);
  pointer-events: none;
  pointer-events: none;
`;

export const containerInputsFiltros = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0rem;
`;
export const LabelInputsFiltros = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  flex-direction: row-reverse;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div:after {
    left: 0.24em;
    top: 0;
    width: 0.3em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }

  input:checked ~ div:after {
    display: block;
  }
  input:checked ~ div {
    background-color: transparent;
  }

  .div:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
`;

export const checkmark = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 1em;
  width: 1em;
  background: transparent;
  border-radius: 5px;
  border: 2px solid #ffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 1px 1px rgba(0, 5);

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;
