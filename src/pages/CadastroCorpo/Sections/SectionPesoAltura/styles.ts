import styled from "styled-components";
import ImagemFundo from "../../.../../../../assets/img/Textura-linhas.png";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionAlturaPeso = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 1rem;
`;

export const ContainerInformacoesPrincipais = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ConatinerTextosPrincipais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 2rem 0;
`;

export const TextQueremosSaberSobreVoce = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: black;
  text-align: center;

  @media ${Breakpoints.sm} {
    font-size: 30px;
  }
`;

export const ParagarfoInformePesoAltura = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 600;
  text-align: center;


  @media ${Breakpoints.sm} {
    font-size: 15px;
  }
`;
export const ContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ContainerDosInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const FormPesoAltura = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const LabelInfoUser = styled.label`
  font-size: 33.64px;
  font-weight: 500;
  color: black;
  text-align: center;
`;

export const InputCorpoUser = styled.input`
  width: 70%;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: #00d939;
  border-radius: 5px;
  outline: none;
  transition: background 0.3s;

  &::-webkit-slider-runnable-track {
    height: 15px;
    background: #ddd;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #00d939;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #006e00;
    transition: background 0.3s;
  }

  &::-webkit-slider-thumb:focus {
    background: #009c29;
  }

  &:hover {
    background: #00d939;
  }

  &:active::-webkit-slider-thumb {
    background: #009c29;
  }
`;

export const ContainerValue = styled.div`
  color: #00d939;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 0 2rem;

`;
export const ButtonObterPlano = styled.button`
    width: 50%;
  display: inline-block;
  padding: 10px 20px;
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  background: #00d939;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 5rem;

  @media ${Breakpoints.lg} {

    width: 100%;
  }
`;
