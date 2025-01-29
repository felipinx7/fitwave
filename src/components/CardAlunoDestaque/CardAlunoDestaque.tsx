import React from "react";
import * as S from "./styles";
import { AlunosDestaques } from "../../constants/constasts"
import * as Imagens from "../../assets/index"

export const CardAlunoDestaque: React.FC = () => {
  return (
    <>
      {AlunosDestaques.map((card, index) => (
        <S.Card key={index}>
          <S.ContainerInfo>
            <S.FotoPerfil src=""/>
            <S.ContainerTextsInfo>
              <S.TextNome>{card.nome}</S.TextNome>
              <S.TextEmail>{card.email}</S.TextEmail>
            </S.ContainerTextsInfo>
          </S.ContainerInfo>
          <S.ContainerIconeAvanco>
            <S.ImagemIconeAvanca src={Imagens.IconeAvanço}/>
          </S.ContainerIconeAvanco>
        </S.Card>
      ))}
    </>
  );
};
