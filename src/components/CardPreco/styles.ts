import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const CardPreco = styled.article`
  max-width: 550px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 35.69px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);


   @media ${Breakpoints.lg} {
    max-width: none;
    align-items: baseline;
}
`;

export const TextoMensalidade = styled.p`
    font-size: 20px;
    font-weight: 500;
    transform: translateY(20px);
    letter-spacing: 5px;
    color: #00D939;
`;

export const TextPrecoPlano = styled.h1`
    font-family: 'Goldman', sans-serif;
    font-weight: bold;
    font-size: 4rem;
    color: white;
    word-break: break-word;

    @media ${Breakpoints.lg} {
        font-size: 3.4rem;
    }
`;

export const SpanMes = styled.span`
    color: white;
    font-size: 20px;
`;

export const ContainerCardVerificacao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
;
