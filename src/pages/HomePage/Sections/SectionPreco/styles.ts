import styled from "styled-components";
import ImagemListras from "../../../../assets/img/Textura-linhas.png"
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionPreco = styled.section`
  background-image: url(${ImagemListras});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 8rem 2rem;
  background-color: black;


  @media ${Breakpoints.md} {
    transform: translateY(-5rem);
  }
`;

export const ContainerInfoPrincipal = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media ${Breakpoints.lg} {
    flex-direction: column;
    padding: 0 1rem;
  }
`;
export const ContainerTexto = styled.div``;

export const ConatinerCard = styled.div`
    @media ${Breakpoints.lg} {
        width: 100%;
    }
`;

export const TextPrincipal = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 800;

  font-family: "Goldman", sans-serif;

  
`;

export const SpantextoEsta = styled.span`
  font-family: "Goldman", sans-serif;
  color: #00D939;
`;
