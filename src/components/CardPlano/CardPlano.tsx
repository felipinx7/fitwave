import React from "react";
import * as S from "./styles";
import { IconType } from "react-icons";
import IconeConfere from "../../assets/img/Icone-confere.svg";

interface CardPlanosProps {
  Icone: IconType;
  TituloCard: string;
  Passo: string;
  descricao1: string;
  descricao2: string;
  descricao3: string;
}

export const CardPlanos: React.FC<CardPlanosProps> = (props) => {
  return (
    <S.CardPlanos>
      <S.IconeCard>
        <props.Icone />
      </S.IconeCard>
      <S.TituloCard>
        <S.SpanPasso>{props.Passo}</S.SpanPasso>
        <br />
        {props.TituloCard}
      </S.TituloCard>
      <S.ContainerCardConfere>
        <S.CardConfere>
          <S.IconeConfere src={IconeConfere} />
          <S.DescricaoConfere>{props.descricao1}</S.DescricaoConfere>
        </S.CardConfere>
        <S.CardConfere>
          <S.IconeConfere src={IconeConfere} />
          <S.DescricaoConfere>{props.descricao2}</S.DescricaoConfere>
        </S.CardConfere>
        <S.CardConfere>
          <S.IconeConfere src={IconeConfere} />
          <S.DescricaoConfere>{props.descricao3}</S.DescricaoConfere>
        </S.CardConfere>
      </S.ContainerCardConfere>
    </S.CardPlanos>
  );
};
