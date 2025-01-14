import styled from "styled-components";
import ImagemFundoCard from "../../assets/img/fundo-card-plano.svg";
import { Breakpoints } from "../../styles/BreakPoints";

export const CardPlanoPronto = styled.article`
  background: linear-gradient(to right, #00d939 0%, #00731e 100%);
  width: 591px;
  height: 501px;
  border-radius: 25.21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ContainerImagemMulher = styled.div`
  width: 100%;
  height: 14rem;
  border-radius: 23.57px;
  background-image: url(${ImagemFundoCard});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;
export const ContainerTextosInformacoesUser = styled.div`
  display: flex;
  align-items: baseline;
  text-align: left;
  flex-direction: column;
  line-height: 1;
  padding: 0.5rem;
  width: 100%;
`;

export const TextParteCorpo = styled.h1`
  font-size: 52.84px;
  font-weight: bold;
  color: white;

  @media ${Breakpoints.sm}{
    font-size: 30px;
}
`;

export const TextDiasDeDasafio = styled.h2`
  font-size: 52.84px;
  font-weight: bold;
  color: white;

  @media ${Breakpoints.sm}{
    font-size: 30px;
}

`;


export const ParagrafoDescricaoDesafio = styled.p`
    color: white;
    font-size: 15px;
    font-weight: bold;
`

