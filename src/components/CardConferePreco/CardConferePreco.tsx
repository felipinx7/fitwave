import React from "react";
import * as S from "./styles"
import IconeConfere from "../../assets/img/Icone-confere.svg"


interface CardConfereProps{
    descricao: string
}

export const CardconferePreco: React.FC<CardConfereProps> = (props) =>{
    return(
        <S.CardConfere>
        <S.IconeConfere src={IconeConfere} />
        <S.DescricaoConfere>{props.descricao}</S.DescricaoConfere>
      </S.CardConfere>
    )
}