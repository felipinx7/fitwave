import React from "react";
import * as S from "./styles"
import ImagemFundoNotebook from "../../../../assets/img/img-fundo-main.png"
import { Header } from "../../../../components/Header/Header";
import { ButtonTreinar } from "../../../../components/ButtonTreinar/ButtonTreinar";
import ImagemFundoMobile from "../../../../assets/img/fundo-main-celular.png"

export const SectionMain: React.FC = () => {
  return(
    <S.SectionPrincipal>
        <S.ImagemFundoIncialNotebook src={ImagemFundoNotebook}/>
        <S.ImagemFundoIncialMobile src={ImagemFundoMobile}/>
        <Header/>
        <S.WraperTextos>
            <S.TextMain>
          LIBERTA O TEU PONTENCIAL! <br />
          <S.SpanJunte>JUNTE-SE A NÓS </S.SpanJunte>E <br />
          SENTE A DIFERENÇA.
        </S.TextMain>
        <S.Paragrafo>
        Estás pronto  para começar a ver resultados <br />reais no  treino?
        </S.Paragrafo>
        <ButtonTreinar/>
        </S.WraperTextos>
      
    </S.SectionPrincipal>
  )
};
