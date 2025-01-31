import React from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import { CardNotificacao } from "../../../../components/CardNotificacao/CardNotificacao";
import { notificacoes } from "../../../../constants/constasts";

export const SectioNotificacao: React.FC = () => {
  return (
    <S.HoNotificacaome>
      <HeaderInfo nome="Felipe Lima" cargo="Aluno" foto="dj" />
      <S.textSuasNotificacao>Suas Notificação</S.textSuasNotificacao>
      <hr />
      <S.ContainerCardNotificacao>
        {notificacoes.map((card, index) => (
          <CardNotificacao notificacao={card.texto} data={card.data} />
        ))}
      </S.ContainerCardNotificacao>
    </S.HoNotificacaome>
  );
};
