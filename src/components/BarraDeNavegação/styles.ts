import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";
import { Interface } from "readline";

export const DivNavegacao = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: auto;
  height: auto;
  border-radius: 14.49px;
  padding: 1rem 0;

  @media ${Breakpoints.lg} {
    padding: 1rem 0.5rem;
  }
`;
export const BarraDeNavegacao = styled.div`
  width: 100%;
  height: 4.2rem;
  border-radius: 14.49px;
  background-color: #00d939;
  display: flex;
  padding: 0 2rem;
`;

export const ContainerTipoUser = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  gap: 1rem;
  width: 50%;
`;

export const ContainerCardPersonalAdm = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5rem;
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
  cursor: ${(props) => (props.showArrowDow ? "pointer" : "default")};
  svg {
    display: ${(props) => (props.showArrowDow ? "block" : "none")};
    font-size: 2rem;
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

export const ContainerSino = styled.div`
  font-size: 2rem;
  height: 50%;
  color: white;
  cursor: pointer;
  position: relative;
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

export const ContainerBarras = styled.div`
  font-size: 2rem;
  height: 50%;
  color: white;
  cursor: pointer;
`;
