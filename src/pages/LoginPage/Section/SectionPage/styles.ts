import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionPage = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;

  @media ${Breakpoints.lg} {
    flex-direction: column-reverse;
  }
`;

export const ContainerDoLogin = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;

  @media ${Breakpoints.lg} {
    z-index: 1;
    background-color: white;
    justify-content: center;
    width: 100%;
    padding: 4rem 1rem 5rem 1rem;
    height: auto;
    margin-bottom: 30px;
    border-radius: 90px 90px 0 0;
  }
  @media ${Breakpoints.md} {
    padding: 4rem 1rem 9rem 1rem;
  }
  @media ${Breakpoints.sm} {
    padding: 4rem 1rem 3rem 1rem;
  }
`;

export const ContainerMulher = styled.div`
  background-color: black;
  width: 50%;
  height: auto;
  position: relative;

  @media ${Breakpoints.lg} {
    width: 100%;
    height: 85%;
  }
`;
export const ImagemMulher = styled.img`
  width: 100%;
  height: 120%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  @media ${Breakpoints.lg} {
    height: 98.5vh;
    transform: translateY(-13rem);
    top: 10rem;
  }
`;

export const ContainerTextosPrincipais = styled.div``;

export const TextBoasVindas = styled.h2`
  font-size: 60.56px;
  color: #6b6b6b;
  line-height: 1;
  font-weight: 500;

  @media ${Breakpoints.lg} {
    text-align: center;
    font-size: 50px;
  }

  @media ${Breakpoints.sm} {
    font-size: 40px;
  }
`;

export const SpanBoasVindas = styled.span`
  color: #00d939;
  font-family: "Goldman", sans-serif;
  font-weight: 800;
`;

export const ParagrafoInformarDados = styled.p`
  font-size: 25.86px;
  text-align: center;
  font-weight: 400;

  @media ${Breakpoints.sm} {
    font-size: 20px;
  }
`;

export const FormularioLogin = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: 456px;
  width: 100%;
  gap: 1rem;
`;

export const LabelLogin = styled.label`
  color: #00d939;
  font-weight: 600;
  font-size: 20px;
  transform: translateY(1rem);
`;

export const containerInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #808080;
  }
`;

export const Containerolho = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 25rem;
  margin-top: -1.2rem;
  font-size: 1.5rem;
  color: #808080;
  cursor: pointer;
`;

export const InputLogin = styled.input`
  position: relative;
  height: 50px;
  width: 100%;
  border-radius: 8.52px;
  border: none;
  background-color: #e4e4e4;
  padding: 0 3rem;
  outline: none;
  font-size: 19px;
  font-weight: 600;
  transition: all 0.1s ease-in-out;

  &::placeholder {
    font-size: 19px;
  }

  &:focus {
    border: 2px solid #00d939;
  }
`;

export const ContainerInformacaoParteBaixo = styled.div`
  width: 100%;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${Breakpoints.lg} {
    padding-top: 3rem;
  }
`;

export const TextNaotemconta = styled.span`
  width: 100%;
  color: black;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const SpanNaoTemConta = styled.a`
  color: #00d939;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
`;

export const ButtonAcessar = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 15.96px;
  border: none;
  background-color: #00d939;
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
`;
