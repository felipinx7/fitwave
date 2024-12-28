import ImagemFundo from "../../../../assets/img/Fundo-section-cadastro.png";
import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionCadastro = styled.section`
  background-image: url(${ImagemFundo});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-repeat: no-repeat;

  @media ${Breakpoints.lg} {
    height: auto;
    transform: translateY(-5rem);
    padding: 5rem 0;
  }
`;
export const ContainerInfoPrincipais = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  @media ${Breakpoints.lg} {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const ContainerDaImagem = styled.div`
  width: 50%;
  height: auto;
  @media ${Breakpoints.lg} {
    display: none;
  }
`;

export const ContainerImagem = styled.div`
  position: relative;
  max-width: 400px;
  height: 532.48px;
`;

export const ImagemMulherEHomem = styled.img`
  position: absolute;
  top: 1.7rem;
  right: -3.5rem;
  width: 40rem;
  height: 100%;
  z-index: 2;
`;

export const FundoVerdeImagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const ContainerDoForm = styled.div`
  width: 50%;

  @media ${Breakpoints.lg} {
    width: 100%;
  }
`;

export const TextFitwave = styled.h1`
  position: absolute;
  transform: rotate(-90deg);
  font-size: 160px;
  font-weight: bold;
  top: 10rem;
  left: -10rem;
  text-align: center;
  color: #fff;
  z-index: 1;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputCadastro = styled.input`
  max-width: 637.93px;
  width: 100%;
  height: 44.71px;
  padding: 17.53px;
  border-radius: 7.01px;
  border: none;
  font-weight: 500;
  font-size: 14.03px;
  transition: all 0.3s ease;

  &::placeholder {
    font-weight: 500;
    font-size: 14.03px;
  }
  &:focus {
    outline: 3px solid #00d939;
    box-shadow: 0 0 8px rgba(0, 217, 57, 0.6);
    transform: scale(1.05);
    background-color: white;
  }
  @media ${Breakpoints.lg} {
    width: 100%;
    max-width: none;
  }
`;

export const LabelCadastro = styled.label`
  font-size: 18.41px;
  font-weight: bold;
  color: white;
  transform: translateY(0.5rem);
`;

export const ContainerTextosForms = styled.div`
  width: 100%;
`;

export const TextMain = styled.h1`
  font-size: 36.32px;
  font-family: "Goldman", sans-serif;
  color: white;
`;

export const spanLiberttar = styled.span`
  color: #00d939;
  font-family: "Goldman", sans-serif;
`;

export const paragrafomotivador = styled.p`
  color: white;
  font-size: 13.15px;
  font-weight: 500;
`;

export const ContanierButton = styled.div`
  display: flex;
  justify-content: center;
`;
