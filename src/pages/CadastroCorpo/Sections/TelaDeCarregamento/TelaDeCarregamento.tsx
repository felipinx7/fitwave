import React from "react";
import * as S from "./styles"
import LogoFitwave from "../../../../assets/img/Logo-FitWave.svg"
import ImagemFundo from "../../../../assets/img/fundo-tela-inicial.svg";
import { useNavigate } from "react-router-dom";



export const SectionTelaCarregamento: React.FC = () =>{

    const navigate = useNavigate()

    const linkPageLogin = () =>{
        navigate("/login")
    }


    return(
        <S.TelaDeCarregamento>
            <S.ContainerInfoPrincipais onClick={linkPageLogin}>
                <S.LogoFitwave src={LogoFitwave}/>

                <S.TextCliqueParaContinuar>Clique aqui para continuar</S.TextCliqueParaContinuar>
            </S.ContainerInfoPrincipais>
        </S.TelaDeCarregamento>
    )
}