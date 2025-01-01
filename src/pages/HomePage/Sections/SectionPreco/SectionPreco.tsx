import React from "react";
import * as S from "./styles";
import { CardPreco } from "../../../../components/CardPreco/CardPreco";

export const SectionPreco: React.FC = () => {
  return (
    <S.SectionPreco id="Preco">
      <S.ContainerInfoPrincipal>
        <S.ContainerTexto>
          <S.TextPrincipal>TUDO ISSO <br /><S.SpantextoEsta>ESTÁ  AO SEU <br /> ALCANCE </S.SpantextoEsta> POR:</S.TextPrincipal>
        </S.ContainerTexto>
        <S.ConatinerCard>
          <CardPreco />
        </S.ConatinerCard>
      </S.ContainerInfoPrincipal>
    </S.SectionPreco>
  );
};
