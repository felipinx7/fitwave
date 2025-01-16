import React, { useState } from "react";
import * as S from "./styles";
import { LuPencil } from "react-icons/lu";
import { FaTrashCan } from "react-icons/fa6";
import { TelaInfoPerfil } from "../TelaInfoPerfil/TelaInfoPerfil";


interface CardClienteseColaboradoreProps{
    nome: string,
    sobrenome: string,
    email: string,
    dataEntrada: string,
    Status: string,
    fotoPerfil: string
}

export const CardClientesColabores: React.FC<CardClienteseColaboradoreProps> = (props) => {
  const [showCardInfo, setshowCardInfo] = useState(false);

  const handleShowCardInfo = () => {
    setshowCardInfo(!showCardInfo);
  };
  return (
    <>
      {" "}
      <S.Card>
        <S.ContainerInfoUser onClick={handleShowCardInfo}>
          <S.ImagemUser src={props.fotoPerfil} />
          <S.TextInfoUser>
            <S.TextNome>{props.nome} {props.sobrenome}</S.TextNome>
            <S.TextEmail>{props.email}</S.TextEmail>
          </S.TextInfoUser>
        </S.ContainerInfoUser>
        <S.ContainerData>
          <S.TextDataDeEntradaUser>{props.dataEntrada}</S.TextDataDeEntradaUser>
        </S.ContainerData>
        <S.ContainerStatusEeditar>
          <S.ContainerStatus>{props.Status}</S.ContainerStatus>
          <S.ContainerEditar>
            <S.ContainerLapis>
              <LuPencil />
            </S.ContainerLapis>
            <S.ContainerLixo>
              <FaTrashCan />
            </S.ContainerLixo>
          </S.ContainerEditar>
        </S.ContainerStatusEeditar>
      </S.Card>
        <TelaInfoPerfil
          ExibirLapis={true}
          tema="CardFuncionario"
          showCardInfo={showCardInfo}
          handleShowCardInfo={handleShowCardInfo}
          exibirFecharContainer={true}
        />
    </>
  );
};
