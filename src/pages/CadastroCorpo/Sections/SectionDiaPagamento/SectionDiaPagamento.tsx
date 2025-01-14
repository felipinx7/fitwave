import React, { useState } from "react";
import * as S from "./styles";
import { FaCalendarCheck } from "react-icons/fa";
import { CardconferePreco } from "../../../../components/CardConferePreco/CardConferePreco";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { useNavigate } from "react-router-dom";

export const SectionDiaPagamento: React.FC = () => {
  const [etapa, setetapas] = useState(8);
  const etapastotais = 9;

  const progresso = (etapa / (etapastotais - 1)) * 100;

  const navigate = useNavigate();

  const LinkParaCadastroFinalizado = () => {
    navigate("/FinalizarCadastro");
  };

  return (
    <S.SectionDiaPagamento>
      <S.ContainerInfoPricpais>
        <BarraDeProgresso progresso={progresso} />
        <S.ContainerTextosPrincipais>
          <S.TextDiaPagamento>Escolha o dia de pagamento</S.TextDiaPagamento>
          <S.ParagrafoDiaFixo>
            Esse dia de pagamento será fixo para todos os meses
          </S.ParagrafoDiaFixo>
        </S.ContainerTextosPrincipais>
        <S.ContainerCard>
          <S.CardPreco>
            <S.TextoMensalidade>MENSALIDADE FIXA</S.TextoMensalidade>
            <S.TextPrecoPlano>
              R$49,99<S.SpanMes>/MÊS</S.SpanMes>
            </S.TextPrecoPlano>
            <S.ContainerCardVerificacao>
              <CardconferePreco descricao="Treinos personalizados." />
              <CardconferePreco descricao="Resultados Rápidos." />
              <CardconferePreco descricao="Preços Acessível." />
            </S.ContainerCardVerificacao>
          </S.CardPreco>
        </S.ContainerCard>
        <S.FormDiaPagamento
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            if (form.checkValidity()) {
              LinkParaCadastroFinalizado();
            }
          }}
        >
          <S.ContainerDiaPagamento>
            <S.ContainerCalendario>
              <S.IconeCalendario>
                <FaCalendarCheck />
              </S.IconeCalendario>
              <S.TextTodoDia>Todo dia: </S.TextTodoDia>
            </S.ContainerCalendario>
            <S.ContainerInput>
              <S.InputDiaPagamento
                type="number"
                placeholder="Digite o dia aqui"
                min={1}
                max={28}
                required
              />
            </S.ContainerInput>
          </S.ContainerDiaPagamento>
          <S.ButtonEnviarInfo type="submit">
            ENVIAR INFORMAÇÕES
          </S.ButtonEnviarInfo>
        </S.FormDiaPagamento>
      </S.ContainerInfoPricpais>
    </S.SectionDiaPagamento>
  );
};
