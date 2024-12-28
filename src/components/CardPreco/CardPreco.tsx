import React from "react";
import * as S from "./styles"
import { ButtonTreinar } from "../ButtonTreinar/ButtonTreinar";
import { CardVerificacao } from "../CardVerificacao/CardVerificacao";
import { Cardconfere } from "../CardConfere/CardConfere";

export const CardPreco: React.FC = () =>{
    return(
        <S.CardPreco>
            <S.TextoMensalidade>MENSALIDADE FIXA</S.TextoMensalidade>
            <S.TextPrecoPlano>R$49,99<S.SpanMes>/MÊS</S.SpanMes></S.TextPrecoPlano>
            <S.ContainerCardVerificacao>
                <Cardconfere descricao="Treinos personalizados."/>
                <Cardconfere descricao="Resultados Rápidos."/>
                <Cardconfere descricao="Preços Acessível."/>
            </S.ContainerCardVerificacao>
            <ButtonTreinar/>
        </S.CardPreco>
    )
}