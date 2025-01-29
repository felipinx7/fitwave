import React, { useEffect } from "react";
import * as S from "./styles"
import LogoFitwave from "../../../../assets/img/logo-fitwave-preta.svg"
import ImagemFundo from "../../../../assets/img/fundo-tela-inicial.svg";
import { useNavigate } from "react-router-dom";



export const SectionTelaCarregamento: React.FC = () =>{
    const navigate = useNavigate()

    useEffect(() =>{
        const time = setTimeout(() => {
            navigate("/login")
        }, 3000);


        return () => clearTimeout(time)
    }, [navigate])

    return(
        <S.TelaDeCarregamento>
            <S.ContainerInfoPrincipais>
                <S.LogoFitwave src={LogoFitwave}/>

                <S.TextCliqueParaContinuar>Clique aqui para continuar</S.TextCliqueParaContinuar>
            </S.ContainerInfoPrincipais>
        </S.TelaDeCarregamento>
    )
}