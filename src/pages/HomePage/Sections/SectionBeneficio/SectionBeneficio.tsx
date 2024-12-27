import React from "react";
import * as S from "./styles";
import { CardBeneficio } from "../../../../components/CardBeneficios/CardBeneficios";
import { BiTimer } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa6";
import { FaHandshakeSlash } from "react-icons/fa";
import { CardVerificacao } from "../../../../components/CardVerificacao/CardVerificacao";

export const SectionBeneficio: React.FC = () => {
  return (
    <S.SectionBeneficio>
      <S.WraperCardsBeneficios>
        <CardBeneficio
          icone={BiTimer}
          Titulo="TREINAR NO TEU"
          spanTitulo="PRÓPIO HORÁRIO"
          Descricao="Treinar no próprio horário oferece flexibilidade, adaptando a atividade ao seu estilo de vida."
        />
        <CardBeneficio
          icone={FaDumbbell}
          Titulo="PLANOS DE TREINO"
          spanTitulo="PERSONALIZADO"
          Descricao="Treinos personalizados maximizam resultados, reduzem lesões e mantêm a motivação alta."
        />
        <CardBeneficio
          icone={FaHandshakeSlash}
          Titulo="SEM FIDELIZAÇÃO"
          spanTitulo="E CONTRATOS"
          Descricao="Serviços sem fidelização e contrato oferecem liberdade, transparência e flexibilidade para o cliente."
        />
      </S.WraperCardsBeneficios>
      <S.WraperMain>
        <S.WraperTextoeCard>
          <S.WraperText>
            <S.TextoFitwave>FIT WAVE</S.TextoFitwave>
            <S.TextoIdeal>
              <S.SpanIdeal>
                O ESPAÇO IDEAL <br />
              </S.SpanIdeal>
              PARA TREINAR <br />
              COMO QUERES!
            </S.TextoIdeal>
          </S.WraperText>
          <S.WraperCardVerificacao>
            <CardVerificacao textoverificacao="Treine no seu próprio ritmo." />
            <CardVerificacao textoverificacao="Ambiente perfeito para você" />
            <CardVerificacao textoverificacao="Espaço amplo e confortável." />
            <CardVerificacao textoverificacao="Supere seus limites diários." />
            <CardVerificacao textoverificacao="Aqui, sua evolução é real." />
            <CardVerificacao textoverificacao="Desperte sua melhor versão." />
          </S.WraperCardVerificacao>
        </S.WraperTextoeCard>
        <S.WraperMulher/>
      </S.WraperMain>
    </S.SectionBeneficio>
  );
};
