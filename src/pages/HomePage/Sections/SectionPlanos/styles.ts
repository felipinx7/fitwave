import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Imagem-fundo-planos.png";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionDePlanos = styled.section`
  width: 100%;
  height: auto;
  background-color: black;
  background-image: url(${ImagemFundo});
  background-size: cover;
  background-position: center;
  z-index: -2;
  padding: 3rem 0;

  
  @media ${Breakpoints.md} {
    transform: translateY(-5rem);
}
`;

export const DivEnglobadoraDoTextoeCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const ContainerTextosPrincipais = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 2rem;
`;

export const TextoFitwave = styled.p`
  color: white;
  font-family: "Goldman", sans-serif;
  letter-spacing: 5px;
`;

export const TextNossoPlano = styled.h1`
  font-size: 4rem;
  font-family: "Goldman", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: white;
`;

export const TextDuplicado = styled(TextNossoPlano)`
  &::before {
    content: attr(data-text);
    font-family: "Goldman", sans-serif;
    position: absolute;
    top: -10px;
    color: white;
    opacity: 0.1;
    z-index: -1;
    transform: scale(1.2);
  }
`;

export const SpanPlano = styled.span`
  color: #00ff00;
  font-family: "Goldman", sans-serif;
`;

export const ParagrafoPlano = styled.p`
  color: white;
  font-size: 1.3rem;
`;

export const WraperCardsPlanos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media ${Breakpoints.lg} {
    flex-direction: column;
  }
`;
