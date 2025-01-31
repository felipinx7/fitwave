import styled from "styled-components";
import { Colors } from "../CardAlunoDestaque/styles";
import { Breakpoints } from "../../styles/BreakPoints";

export const Container = styled.div<TextFinalizadoProps>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.showContainer ? "#1FE624" : "rgba(185, 246, 197, 1)"};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: auto;
`;

export const Imagem = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const Nome = styled.p`
  font-weight: bold;
  color: white;
  font-size: 16px;
`;

export const Personal = styled.p`
  color: white;
  font-size: 14px;
`;

export const Envio = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const Botao = styled.button<TextFinalizadoProps>`
  background: #00d939;
  color: white;
  font-weight: bold;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: ${(props) => (props.showContainer ? "none" : "block")};

  &:hover {
    background: #1fe624;
  }
`;

interface TextFinalizadoProps {
  showContainer: boolean;
}

export const textFinalizado = styled.h1<TextFinalizadoProps>`
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  display: ${(props) => (props.showContainer ? "block" : "none")};
`;

interface ContainerVisualizarTreinoProps {
  MostrarContainer: boolean;
}

export const ContainerVisualizarTreino = styled.form<ContainerVisualizarTreinoProps>`
  width: auto;
  height: auto;
  transform: translateY(-40%);
  position: fixed;
  background-color: #00d939;
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  display: ${(props) => (props.MostrarContainer ? "flex" : "none")};
`;

export const TextDetalhes = styled.h1`
  text-align: center;
  width: 100%;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 0;
`;

export const containerInfoIndentificador = styled.form`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;

  @media ${Breakpoints.sm} {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const textGerais = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
`;

export const InputDiaTreino = styled.input`
  width: 50%;
  height: auto;
  background-color: #057333;
  font-size: 1.2rem;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const buttonMarcarFeito = styled.button`
  width: 80%;
  height: auto;
  background-color: #00ff43;
  border-radius: 10px;
  border: none;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

export const ContaierFechar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #057333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  position: absolute;
  right: 0;
  transform: translateX(-10%);
  cursor: pointer;
`;
