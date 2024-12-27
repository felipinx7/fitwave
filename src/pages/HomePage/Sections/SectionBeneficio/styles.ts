import styled from "styled-components";
import FundoListras from "../../../../assets/img/Textura-linhas.png";
import ImagemMulher from "../../../../assets/img/imagem-mulher.png";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionBeneficio = styled.section`
  background-color: black;
  background-image: url(${FundoListras});
  width: 100%;
  height: 120vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media ${Breakpoints.md} {
    position: relative;
    min-height: 150vh;
    top: -5rem;
  }
`;

export const WraperCardsBeneficios = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 1rem;
  transform: translateY(-6rem);
  padding: 0 2rem;

  @media ${Breakpoints.bg} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(0);
    padding: 2rem 0;
    gap: 2rem;
  }
  @media ${Breakpoints.md} {
    padding: 3rem 2rem;
    transform: translateY(7rem);
  }
`;

//Divs Principais

export const WraperMain = styled.div`
  max-width: 1240px;
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  margin: 0 auto;
`;

export const WraperText = styled.div``;

export const WraperCardVerificacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WraperTextoeCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WraperMulher = styled.div`
  width: 50%;
  background-image: url(${ImagemMulher});
  background-size: cover;
  background-color: transparent;
`;

//Componenetes das divs acimas

export const TextoFitwave = styled.p`
  color: white;
  font-size: 16px;
  letter-spacing: 5px;
`;
export const TextoIdeal = styled.h2`
  color: white;
  font-weight: 800;
  font-family: "Goldman", sans-serif;
  font-size: 42px;
`;

export const SpanIdeal = styled.span`
  font-family: "Goldman", sans-serif;
  color: #00d939;
`;
