import React from "react";
import * as S from "./styles";

interface CardEnviarTreinoProps {
  showCardEnviar: boolean;
  handleShowCardEnviar: () => void;
}

export const CardEnviarTreino: React.FC<CardEnviarTreinoProps> = (props) => {
  return (
    <S.containerCardEnviar showCard={props.showCardEnviar}>
      <S.Card>
        <S.textEnviarAluno>ENVIAR PARA O ALUNO</S.textEnviarAluno>
        <S.InputEnviarTreino placeholder="Pesquise aqui" />
        <S.FomularioEnvio></S.FomularioEnvio>
        <S.ContainerEnvio></S.ContainerEnvio>
      </S.Card>
    </S.containerCardEnviar>
  );
};
