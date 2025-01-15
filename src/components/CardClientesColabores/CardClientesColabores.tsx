import React, { useState } from "react"
import * as S from "./styles"
import ImagemExemplo from "../../assets/img/fotoPerfilMulher.svg"
import { LuPencil } from "react-icons/lu";
import { FaTrashCan } from "react-icons/fa6";
import { TelaInfoPerfil } from "../TelaInfoPerfil/TelaInfoPerfil";
import styled from "styled-components";
 

export const CardClientesColabores: React.FC = () =>{

    const [showCardInfo, setshowCardInfo] = useState(false)

    const handleShowCardInfo = () => {
        setshowCardInfo(!showCardInfo)
    }

    return(
        <S.Card>
            <S.ContainerInfoUser onClick={handleShowCardInfo}>
                <S.ImagemUser src={ImagemExemplo}/>
                <S.TextInfoUser>
                    <S.TextNome>Jane Cooper</S.TextNome>
                    <S.TextEmail>janecoper@gmail.com</S.TextEmail>
                </S.TextInfoUser>
            </S.ContainerInfoUser>
            <S.ContainerData>
                <S.TextDataDeEntradaUser>09/02/20</S.TextDataDeEntradaUser>
            </S.ContainerData>
            <S.ContainerStatusEeditar>
                <S.ContainerStatus>
                Ativo
                </S.ContainerStatus>
                <S.ContainerEditar>
                    <S.ContainerLapis>
                        <LuPencil/>
                    </S.ContainerLapis>
                    <S.ContainerLixo>
                        <FaTrashCan/>
                    </S.ContainerLixo>
                </S.ContainerEditar>
            </S.ContainerStatusEeditar>
<TelaInfoPerfil
ExibirLapis={false}
tema="CardFuncionario"
showCardInfo={showCardInfo}
handleShowCardInfo={handleShowCardInfo}
/>
        </S.Card>
    )
}