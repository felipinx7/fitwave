import React from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";

export const SectionPerfil: React.FC = () => {
  return (
    <S.Perfil>
      <HeaderInfo nome="Felipe Lima" cargo="Aluno" foto="dj"  />
    </S.Perfil>
  );
};
