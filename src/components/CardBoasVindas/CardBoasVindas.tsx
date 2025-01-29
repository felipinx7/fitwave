import React from "react";
import * as S from "./styles";
import * as Imagens from "../../assets/index";

export const CardBoasVindas: React.FC = () => {
  return (
    <S.Card>
      <S.ContainerTextos>
        <S.textFitwave>FITWAVE ONLINE</S.textFitwave>
        <S.FraseSlogan>
          Seja Bem-vindo(a) <S.spanSlogan> </S.spanSlogan>ao {" "}
          <S.spanSlogan>sistema online </S.spanSlogan>da fitwave
        </S.FraseSlogan>
      </S.ContainerTextos>
      <S.ContainerImagem>
        <S.ImagemBoneco src={Imagens.GarotoEstera} />
      </S.ContainerImagem>
    </S.Card>
  );
};
