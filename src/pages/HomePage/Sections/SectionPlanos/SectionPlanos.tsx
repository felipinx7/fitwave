import React from "react";
import * as S from "./styles";
import ImagemFundo from "../../../../assets/img/Imagem-fundo-planos.png";
import { CardPlanos } from "../../../../components/CardPlano/CardPlano";
import { LuNewspaper } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
 
export const SectionPlanos: React.FC = () => {
  return (
    <>
      <S.SectionDePlanos id="Plano">
        <S.DivEnglobadoraDoTextoeCard>
          <S.ContainerTextosPrincipais>
            <S.TextoFitwave>FIT WAVE</S.TextoFitwave>
            <S.TextDuplicado data-text="O NOSSO PLANO">
              O NOSSO <S.SpanPlano>PLANO</S.SpanPlano>
            </S.TextDuplicado>
            <S.ParagrafoPlano>
              Deixe que a Fitwave te guie para um caminho mais saudável e feliz.
            </S.ParagrafoPlano>
          </S.ContainerTextosPrincipais>
          <S.WraperCardsPlanos>
            <CardPlanos
              Icone={LuNewspaper}
              Passo="1° PASSO"
              TituloCard="Inscrição"
              descricao1="Abra o site oficial."
              descricao2="Preencha o formulário."
              descricao3="Envie seus dados."
            />
            <CardPlanos
              Icone={MdAnalytics}
              Passo="2° PASSO"
              TituloCard="Avaliação"
              descricao1="Escolha um plano"
              descricao2="Verifique seus dados."
              descricao3="Confirme e conclua tudo"
            />
            <CardPlanos
              Icone={FaCalendarCheck}
              Passo="3° PASSO"
              TituloCard="Resultados"
              descricao1="Mais força muscular"
              descricao2="Mais resistência física"
              descricao3="Definição corporal."
            />
          </S.WraperCardsPlanos>
        </S.DivEnglobadoraDoTextoeCard>
      </S.SectionDePlanos>
    </>
  );
};
