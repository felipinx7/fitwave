import React from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import * as Imagens from "../../../../assets/index";
import { CardBoasVindas } from "../../../../components/CardBoasVindas/CardBoasVindas";

export const SectionHome: React.FC = () => {
  return (
    <S.Home>
      <HeaderInfo nome="Felipe Lima" cargo="Aluno" foto="dj" />
      <CardBoasVindas />
      <S.CardTotalAlunos>
        
      </S.CardTotalAlunos>
      <S.CardTotalAlunos>

      </S.CardTotalAlunos>
    </S.Home>
  );
};
