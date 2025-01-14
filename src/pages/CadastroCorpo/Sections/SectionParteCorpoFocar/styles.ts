import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionFocarCorpo = styled.section`
  background-image: url(${ImagemFundo});
  width: 100%;
  height: auto;
  padding: 0rem 0 1rem 0;
  background-position: center;
  background-size: cover;

  @media ${Breakpoints.sm} {
    padding: 0 0 0 0;
    height: 140vh;
  }
  @media ${Breakpoints.xs} {
    height: 1450vh;
  }
`;

export const ContainerPrincipal = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerTextosPrincipais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const TextAreaDeFoco = styled.h1`
  font-size: 45px;
  font-weight: 600;
  color: black;
  text-align: center;

  @media ${Breakpoints.sm} {
    font-size: 30px;
  }
`;

export const ParagrafoSelecionarMaisDeUma = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: black;
  text-align: center;

  @media ${Breakpoints.sm} {
    font-size: 20px;
  }
`;

export const ContainerOpcoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonProximo = styled.button`
  max-width: 600px;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  background-color: #00d939;
  border: none;
  font-size: 25px;
  color: white;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(0, 179, 48);
  }
`;

export const FormFocoMuscular = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-direction: column;
  padding: 0 2rem;
`;
