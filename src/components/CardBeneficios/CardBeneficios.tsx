import React from "react";
import * as S from "./styles";
import { IconType } from "react-icons";

interface CardProps {
  icone: IconType;
  Titulo: string;
  spanTitulo: string;
  Descricao: string;
}

export const CardBeneficio: React.FC<CardProps> = (props) => {
  return (
    <S.CardBeneficios>
      <S.IconeDoBeneficio>
        <props.icone />
      </S.IconeDoBeneficio>
      <S.TituloBeneficio>
        {props.Titulo}
        <br />
        <S.SpanTitulo>{props.spanTitulo}</S.SpanTitulo>
      </S.TituloBeneficio>
      <S.DescricaoBeneficio>{props.Descricao}</S.DescricaoBeneficio>
    </S.CardBeneficios>
  );
};
