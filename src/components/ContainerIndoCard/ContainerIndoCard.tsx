import React from "react";
import * as S from "./styles";

export const ContainerInfoCards: React.FC = () => {
  return (
    <S.ContainerInfoCard>
      <S.ContainerTextos>
        <S.ContainerNome>
          <S.textInfoCard>Nomes</S.textInfoCard>
        </S.ContainerNome>
        <S.ContainerEntrada>
          <S.textInfoCard>Entrada</S.textInfoCard>
        </S.ContainerEntrada>
        <S.containerStatusEeditar>
          <S.textInfoCard>Status</S.textInfoCard>
          <S.textInfoCard>Editar</S.textInfoCard>
        </S.containerStatusEeditar>
      </S.ContainerTextos>
      <hr />
    </S.ContainerInfoCard>
  );
};
