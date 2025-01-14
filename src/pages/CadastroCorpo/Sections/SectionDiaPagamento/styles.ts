import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Textura-linhas.png";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionDiaPagamento = styled.section`
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
`;

export const ContainerInfoPricpais = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

export const ContainerTextosPrincipais = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  line-height: 1.6;
  text-align: center;
`;

export const TextDiaPagamento = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: black;

  @media ${Breakpoints.sm} {
    font-size: 30px;
  }
`;

export const ParagrafoDiaFixo = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 500;

  @media ${Breakpoints.sm} {
    font-size: 15px;
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 2rem;
`;

export const CardPreco = styled.article`
  max-width: 550px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 35.69px;
  background-color: #e1e1e1;
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media ${Breakpoints.lg} {
    max-width: none;
    align-items: baseline;
  }
`;

export const TextoMensalidade = styled.p`
  font-size: 18.45;
  font-weight: 500;
  transform: translateY(20px);
  letter-spacing: 5px;
  color: black;
`;

export const TextPrecoPlano = styled.h1`
  font-family: "Goldman", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  color: #05714f;
  word-break: break-word;

  @media ${Breakpoints.lg} {
    font-size: 3.4rem;
  }
`;

export const SpanMes = styled.span`
  color: #05714f;
  font-size: 20px;
`;

export const ContainerCardVerificacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormDiaPagamento = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const ContainerDiaPagamento = styled.div`
  position: relative;
  width: 30%;
  border-radius: 20px;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #00d939;

  @media ${Breakpoints.lg} {
    width: 50%;
  }
  @media ${Breakpoints.sm} {
    width: 80%;
  }
  @media ${Breakpoints.xs} {
    width: 100%;
  }
`;

export const ContainerCalendario = styled.div`
  width: 50%;
  height: 3rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00d939;
`;

export const ContainerInput = styled.div`
  width: 50%;
  height: 3rem;
  padding: 0 0.3rem;
`;

export const IconeCalendario = styled.svg`
  font-size: 2rem;
  color: white;
  width: 40px;
  height: 35px;
`;

export const TextTodoDia = styled.h4`
  color: white;
  font-weight: 500;
  font-size: 15px;
`;

export const InputDiaPagamento = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 15px;
  color: #a4a4a4;
  font-weight: 500;
  background-color: transparent;
  color: black;
  /* padding: 1rem 0rem 1rem 13rem; */

  &::placeholder {
    padding: 1rem 0rem 1rem 0rem;
    font-size: 15px;
    color: #a4a4a4;
    font-weight: 500;
  }
`;
export const ButtonEnviarInfo = styled.button`
  width: auto;
  height: auto;
  border-radius: 10px;
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: #00d939;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem;

  &:hover {
    background-color: rgb(0, 158, 42);
  }
`;
