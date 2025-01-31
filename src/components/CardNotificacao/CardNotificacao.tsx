import React from "react";
import * as S from "./styles";

interface CardNotificacaoProps {
  notificacao: string;
  data: string;
}

export const CardNotificacao: React.FC<CardNotificacaoProps> = (props) => {
  return (
    <S.Card>
      <S.containerConteudo>
        <S.textNotificacao>{props.notificacao}</S.textNotificacao>
      </S.containerConteudo>
      <S.containerData>
        <S.textData>{props.data}</S.textData>
      </S.containerData>
    </S.Card>
  );
};
