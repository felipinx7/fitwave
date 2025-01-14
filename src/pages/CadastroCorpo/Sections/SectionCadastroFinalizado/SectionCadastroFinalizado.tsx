import React, { useState } from "react";
import * as S from "./styles";
import IconeFinalizado from "../../../../assets/img/icone-terminao.svg";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { useNavigate } from "react-router-dom";

export const SectionCadastroFinalizado: React.FC = () => {
  const [etapa, setetapas] = useState(9);
  const etapastotais = 9;

  const progresso = (etapa / (etapastotais - 1)) * 100;

  const navigate = useNavigate()

  const LinkParaLaddinPage = () =>{
    navigate("/")
  }
  return (
    <S.SectionCadastroFinalizado>
      <BarraDeProgresso progresso={progresso} />
      <S.ContainerInfoPrincipais>
        <S.ContainerContentMain>
          <S.IconeTerminado src={IconeFinalizado} />
          <S.ContainerTextosPrincipais>
            <S.TextCadastroFinalizado>
              Cadastro finalizado!
            </S.TextCadastroFinalizado>
            <S.ParagrafoAguarde>
              Aguarde a equipe Fitwave entrar em contato.
            </S.ParagrafoAguarde>
          </S.ContainerTextosPrincipais>
        </S.ContainerContentMain>

        <S.ButtonFinalizar onClick={LinkParaLaddinPage}>FINALIZAR</S.ButtonFinalizar>
      </S.ContainerInfoPrincipais>
    </S.SectionCadastroFinalizado>
  );
};
