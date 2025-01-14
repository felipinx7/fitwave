import React from "react";
import * as S from "./styles"



interface ProgressoProps{
    progresso: number;
}

export const BarraDeProgresso: React.FC<ProgressoProps> = (props) =>{
    return(
        <S.BarraDeProgresso>
            <S.Progresso progesso={props.progresso}/>
        </S.BarraDeProgresso>
    )
}