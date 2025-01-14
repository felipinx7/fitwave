import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";

export const SectionCadastroFinalizado = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
  padding: 1rem 1rem 2rem;
`;
export const ContainerInfoPrincipais = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export const ContainerContentMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ContainerTextosPrincipais = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  line-height: 1;
  flex-direction: column;
  height: auto;
`;

export const IconeTerminado = styled.img``;

export const TextCadastroFinalizado = styled.h1`
  font-size: 40px;
  color: black;
  font-weight: 600;
  text-align: center;
`;

export const ParagrafoAguarde = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;
  text-align: center;
`;
export const ButtonFinalizar = styled.button`
  max-width: 600px;
  width: 100%;
  background-color: #00d939;
  font-size: 25px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color:rgb(3, 174, 48);
  }
`;
