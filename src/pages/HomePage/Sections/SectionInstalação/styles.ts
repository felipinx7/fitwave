import styled from "styled-components";
import ImagemListras from "../../../../assets/img/Textura-linhas.png";
import { Breakpoints } from "../../../../styles/BreakPoints";


export const SectionInstalacao = styled.section`
  background-image: url(${ImagemListras});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 10rem 0;
  background-color: black;

  @media ${Breakpoints.md} {
    transform: translateY(-5rem);
  }
`;

const TextoBase = styled.p`
  font-family: "Goldman", sans-serif;
  font-size: 3.1rem;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  line-height: 1;
  padding: 0 1rem;
`;

export const TextoMain = styled(TextoBase)`
  &::before {
    font-family: "Goldman", sans-serif;
    content: attr(data-text);
    position: absolute;
    white-space: nowrap;
    top: -20px;
    left: 100px;
    color: white;
    opacity: 0.1;
    font-weight: bold;
    z-index: -1;
    transform: scale(1.2);
  }
`;

export const SpanInstalacao = styled.span`
  font-size: 52.21px;
  color: #00d939;
  font-weight: 800;
  font-family: "Goldman", sans-serif;
  word-break: break-word;
`;

export const ContainerInfoPrincipais = styled.div`
  position: relative;
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ContainerImagem = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media ${Breakpoints.bg} {
    flex-direction: column;
  }
`;

export const ImagemEquipamentos = styled.img`


  @media ${Breakpoints.bg} {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    padding: 0 2rem;
    border-radius: 20px;
  }
`;


