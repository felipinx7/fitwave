import React, { useState } from "react";
import * as S from "./styles"

interface TelaAlertLogoutprops{
    tela: string,
    caminho: (param: string) => void;
    fechar: boolean;
    handleFechar: () => void;
}

export const TelaAlertaLogout: React.FC<TelaAlertLogoutprops> = (props) =>{
    return(
        <S.ConatinerAlerta fechar={props.fechar}>
            <S.TelaAlerta>
                <S.Titulo>
                    Você tem Certeza que quer sair da Tela de {props.tela}?
                </S.Titulo>
                <S.ContainerButoes>
                    <S.ButtoSair onClick={() => props.caminho("logout")}>Sair</S.ButtoSair>
                    <S.ButtoSair onClick={props.handleFechar}>Cancelar</S.ButtoSair>
                </S.ContainerButoes>
            </S.TelaAlerta>
        </S.ConatinerAlerta>
    )
}