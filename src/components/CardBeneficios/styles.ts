import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const CardBeneficios = styled.article`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  background-color: #00d939;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s ease;


  @media ${Breakpoints.bg}{
    max-width: 750px  ;
  }
  @media ${Breakpoints.md} {
    max-width: 850px;
    width: 100%;
  }
`;

export const IconeDoBeneficio = styled.svg`
  font-size: 4rem;
  color: white;
  width: 60px;
  height: 70px;
  top: 0;
`;

export const TituloBeneficio = styled.h3`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 24px;
`;

export const SpanTitulo = styled.span`
  font-family: "Goldman", sans-serif;
  color: #05714f;
  word-break: break-word;
`;

export const DescricaoBeneficio = styled.p`
    font-size: 19.17px;
    font-weight: 500;
    color: white;
    line-height: 25px;
    font-family: 'Poppins', sans-serif;
`;
