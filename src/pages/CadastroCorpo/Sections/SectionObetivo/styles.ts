import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";

export const SectionObjetivos = styled.section`
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
`;

export const ContainerInfoPrincipais = styled.form`
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const ContainerTextosPrincipais = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TextoPrincipaisObjetivos = styled.h1`
  font-size: 45px;
  font-weight: 600;
  color: black;
  text-align: center;
`;

export const ParagrafoSaberSobreVoce = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: black;
  text-align: center;
`;

export const ContainerCardObjetivos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0 2rem 0 ;
`;


export const ButtonProximo = styled.button`
  max-width: 600px;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  background-color: #00d939;
  border: none;
  font-size: 25px;
  color: white;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(0, 179, 48);
  }
`;
