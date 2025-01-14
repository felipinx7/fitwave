import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";
import exp from "constants";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionDiasSemana = styled.section`
  width: 100%;
  height: auto;
  gap: 3rem;
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
`;

export const ContainerInfoPrincipais = styled.div`
  max-width: 1024px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 0 ;
`;



export const ContainerTextosPrincipais = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0 2rem;
`;

export const TextosMetaDiarias = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
`;

export const ParagrafoRecomendacao = styled.p`
  color: black;
  font-weight: 500;
  text-align: center;

  font-size: 20px;
`;

export const ContaineParteTextECards = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export const ParagrafoDiasDaSemana = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 500;
  text-align: center;
  transform: translateY(2rem);
`;

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 100%;
    padding: 2rem 0 ;


    @media ${Breakpoints.sm}{
        display: flex;
        flex-wrap: wrap;
        padding: 0 2rem;
    }
`;
export const ConatinerButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`;
