import React from "react";
import * as S from "./styles"
import IconeVerificacao from "../../assets/img/Icone-verificação.svg"


interface CardVerificacao{
    textoverificacao: string
}

export const CardVerificacao: React.FC<CardVerificacao> = (props)=>{
    return(
        <S.CardVerificacao>
            <S.IconeVerificacao src={IconeVerificacao}/>
            <S.TextoVerificacao>{props.textoverificacao}</S.TextoVerificacao>
        </S.CardVerificacao>
    )
}