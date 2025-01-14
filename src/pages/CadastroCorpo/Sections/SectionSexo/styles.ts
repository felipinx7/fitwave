import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";
import ImagemFundoListras from "../../../../assets/img/Textura-linhas.png";

export const Sectionsexo = styled.section`
  background-image: url(${ImagemFundoListras});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding: 0 1.5rem;

  @media ${Breakpoints.lg} {
    height: auto;
    padding: 1rem 1rem;
  }
`;

export const ContainerTextosPrincipais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  line-height: 1.5;
  padding: 2rem 0;

  @media ${Breakpoints.sm} {
    padding: 1.5rem 0;
  }
`;

export const TextoQualSexo = styled.h1`
  font-size: 2.5rem;
  color: black;
  font-weight: 600;

  @media ${Breakpoints.md} {
    font-size: 2rem;
  }

  @media ${Breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const ParagrafoQueremosSaber = styled.p`
  font-size: 1.25rem;
  font-weight: 500;

  @media ${Breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const FormularioSexo = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${Breakpoints.md} {
    gap: 1.5rem;
  }
`;

export const ContainerInputsGenero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  gap: 1.5rem;

  @media ${Breakpoints.sm} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContainerMulher = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &:hover {
    transform: scale(1.05);
    background-color: rgb(231, 71, 124);
    border-radius: 20px;
    color: white;
  }

  @media ${Breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const ImagemMulher = styled.img`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;

  @media ${Breakpoints.sm} {
    max-width: 150px;
  }
`;

export const ContainerHomen = styled(ContainerMulher)`
  background-color: transparent;

  &:hover {
    background-color: rgb(0, 140, 220);
  }
`;

export const ImagemHomem = styled(ImagemMulher)`
  max-width: 250px;

  @media ${Breakpoints.sm} {
    max-width: 150px;
  }
`;

export const InputSexo = styled.input`
  width: 1rem;
  height: 1rem;
`;

export const LabelGenero = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media ${Breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const ButtonProximo = styled.button`
  max-width: 500px;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  background-color: #00d939;
  border: none;
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(0, 179, 48);
  }

  @media ${Breakpoints.sm} {
    font-size: 1.2rem;
    height: 2.5rem;
  }
`;
