import React from "react";
import * as S from "./styles";

interface CardStatusProps {
  pedencia: boolean;
  nomeTreino: string;
  dataFinishi: string;
  active: boolean;
  nome: string;
}

export const CardStatus: React.FC<CardStatusProps> = (props) => {
  return (
    <S.Card isChecked={props.active}>
      <S.ContainerPerfil>
        <S.FotoPerfil src="k" />
      </S.ContainerPerfil>
      <S.ContainerTextos>
        <S.textnome>{props.nome}</S.textnome>
        <S.Info>{props.nomeTreino}</S.Info>
      </S.ContainerTextos>
      <S.ContainerStatusCard>
        <S.divPendente isChecked={props.active}>Pendente</S.divPendente>
        <S.ContainerData isChecked={props.active}>
          {props.dataFinishi}
        </S.ContainerData>
      </S.ContainerStatusCard>
    </S.Card>
  );
};
