import React from "react";
import * as S from "./styles";

export const CardPlanoPronto: React.FC = () => {
  return (
    <S.CardPlanoPronto>
      <S.ContainerImagemMulher />
      <S.ContainerTextosInformacoesUser>
        <S.TextParteCorpo>Corpo Todo</S.TextParteCorpo>
        <S.TextDiasDeDasafio>Desafio 3x7</S.TextDiasDeDasafio>
      </S.ContainerTextosInformacoesUser>
      <S.ParagrafoDescricaoDesafio>
      É essencial adotar um plano de dias bem estruturado para alcançar objetivos a longo prazo. O incentivo constante e a organização das atividades garantem um progresso consistente. Estabelecer metas diárias, focar em hábitos saudáveis e perseverar ao longo do tempo são fundamentais para o sucesso. Faça de cada dia uma conquista!
      </S.ParagrafoDescricaoDesafio>
    </S.CardPlanoPronto>
  );
};
