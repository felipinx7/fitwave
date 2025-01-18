import React, { useState } from "react";
import * as S from "./styles";

interface ContainerInfoCardsProps{
  AdicionarClasse: boolean
  handleAdicionarClasse: () => void
}

export const ContainerInfoCards: React.FC<ContainerInfoCardsProps> = (props) => { 


  return (
    <S.ContainerInfoCard className={props.AdicionarClasse ? "active" : ""}>
      <S.ContainerTextos className={props.AdicionarClasse ? "active" : ""}>
        <S.ContainerNome>
          <S.textInfoCard>Nomes</S.textInfoCard>
        </S.ContainerNome>
        <S.ContainerEntrada>
          <S.textInfoCard>Entrada</S.textInfoCard>
        </S.ContainerEntrada>
        <S.containerStatusEeditar>
          <S.TextStatus>Status</S.TextStatus>
          <S.textInfoCard>Editar</S.textInfoCard>
        </S.containerStatusEeditar>
      </S.ContainerTextos>
      <hr className={props.AdicionarClasse ? "active" : ""} />
    </S.ContainerInfoCard>
  );
};
