import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const CardPlanos = styled.article`
  max-width: 350px;
  width: 100%;
  height: auto;
  border-radius: 35.69px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${Breakpoints.lg} {
    max-width: 730px;
    align-items: baseline;
}
`;

export const IconeCard = styled.svg`
  font-size: 5rem;
  color: #00d939;
  width: 77px;
  height: 82px;
`;

export const TituloCard = styled.h2`
  font-family: "Goldman", sans-serif;
  font-size: 29.72px;
  font-weight: 500;
  line-height: 1;
`;

export const SpanPasso = styled.span`
  color: #00d939;
  font-size: 24.69px;
  font-family: "Goldman", sans-serif;
  font-weight: 500;
`;

export const ContainerCardConfere = styled.div`
`;

export const CardConfere = styled.article`
  max-width: 300px;
  width: 100%;
  height: auto;
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
`;

export const IconeConfere = styled.img``;

export const DescricaoConfere = styled.p`
  font-size: 19px;
  font-weight: 500;
  font-family: "Goldman", sans-serif;
  text-align: left;
  
  `;
