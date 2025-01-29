import React from "react";
import * as S from "./styles";
import { AlunosNovos } from "../../constants/constasts";

export const CardNovosAlunos: React.FC = () => {
  return (
    <>
      {AlunosNovos.map((card, index) => (
        <S.Card key={index}>
          <S.ContainerInfo>
            <S.FotoPerfil src="" />
            <S.ContainerTextsInfo>
              <S.TextNome>{card.nome}</S.TextNome>
              <S.TextEmail>{card.email}</S.TextEmail>
            </S.ContainerTextsInfo>
          </S.ContainerInfo>
        </S.Card>
      ))}
    </>
  );
};
