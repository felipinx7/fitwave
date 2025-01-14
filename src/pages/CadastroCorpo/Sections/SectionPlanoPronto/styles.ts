import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionPlanoCorpo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem 0;
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
`;

export const ContainerIndoPrincipais = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
`

export const ContainerTextosPrincipais = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  flex-direction: column;
`;
export const TextoPlanoPronto = styled.h1`
  font-size: 40px;
  color: black;
  font-weight: 600;
  text-align: center;
`;

export const ParagrafoSelecionamosPlanos = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 500;
  text-align: center;


`;
export const containerCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
  height: 100%;
`;

export const ButtonObterPlano = styled.button`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  width: 50%;
  height: 4rem;
  background-color: #00D939;
  border: none;
  border-radius: 10px;
  height: auto;


  @media ${Breakpoints.lg}{
    width: 100%;
  }
`;
