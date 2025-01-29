import React from "react";
import * as S from "./styles";

interface HeaderInfoProps{
    nome: string,
    cargo: string,
    foto: string
}

export const HeaderInfo: React.FC<HeaderInfoProps> = (props) => {
  return (
    <S.HeaderInfo>
      <S.TextOla>
        <S.Spanh1>Olá, </S.Spanh1>{props.nome}!
      </S.TextOla>
      <S.ContainerInfoPerfil>
        <S.ContainerTextsPerfil>
          <S.TextNomePersonal>{props.nome}</S.TextNomePersonal>
          <S.TextCargo>{props.cargo}</S.TextCargo>
        </S.ContainerTextsPerfil>
        <S.FotoPerfil src={props.foto}/>
      </S.ContainerInfoPerfil>
    </S.HeaderInfo>
  );
};
