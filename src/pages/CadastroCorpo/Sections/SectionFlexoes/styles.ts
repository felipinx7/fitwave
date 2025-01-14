import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";

export const SectionFlexoes = styled.section`
  width: 100%;
  height: auto;
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
`;

export const ContainerPrincipal = styled.form`
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

export const TextosPrincipais = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1;
  align-items: center;
  padding: 1rem 0 ;
`;

export const TextoQuantasFlexoes = styled.h1`
  font-weight: 600;
  font-size: 40px;
  color: black;
`;
export const ParagrafoSempausas = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: black;
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`

export const containerButton = styled.div`
    width: 100%;
    height: auto;
`