import React, { useState } from "react";
import * as S from "./styles";
import { CardPlanoPronto } from "../../../../components/CardPlanoPronto/CardPlanoPronto";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { useNavigate } from "react-router-dom";

export const SectionPlanoPronto: React.FC = () => {
  const [etapa, setetapa] = useState(7);
  const etapastotais = 9;

  const progresso = (etapa / (etapastotais - 1)) * 100;

  const navigate = useNavigate()

  const LinkParaPageDiaPagamento = () =>{
    navigate("/diaPagamento")
  }

  return (
    <S.SectionPlanoCorpo>
      <S.ContainerIndoPrincipais>
        <BarraDeProgresso progresso={progresso}/>
        <S.ContainerTextosPrincipais>
          <S.TextoPlanoPronto>Seu plano está pronto!</S.TextoPlanoPronto>
          <S.ParagrafoSelecionamosPlanos>
            Selecionamos este plano que melhor se adapta com suas escolhas
          </S.ParagrafoSelecionamosPlanos>
          <S.containerCard>
            <CardPlanoPronto />
          </S.containerCard>
          <S.ContainerButton>
            <S.ButtonObterPlano onClick={LinkParaPageDiaPagamento}>OBTER PLANO</S.ButtonObterPlano>
          </S.ContainerButton>
        </S.ContainerTextosPrincipais>
      </S.ContainerIndoPrincipais>
    </S.SectionPlanoCorpo>
  );
};
