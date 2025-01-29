import React, { useState } from "react";
import * as S from "./styles";
import { IoClose } from "react-icons/io5";
import { CardEnviarTreino } from "../CardEnviarTreino/CardEnviarTreino";

interface CardDetalhesTreinosProps {
  showCardDetalhes: boolean;
  handleshowCardDetalhes: () => void;
  handleExluirCard: () => void;
  nome: string;
  duracao: string;
  repeticao: number;
  execucao: number;
  intervalo: number;
  descricao: string;
  handleShowCard: () => void;
}

export const CardDetalhesTreino: React.FC<CardDetalhesTreinosProps> = (
  props
) => {
  const [showCardEnviar, setshowCardEnviar] = useState(false);

  const handleshowCardEnviar = () => {
    setshowCardEnviar((prev) => !prev);

    if (props.showCardDetalhes) {
      props.handleshowCardDetalhes(); // Sem argumentos
    }

    console.log("É aqui viu!");
  };

  return (
    <>
      <CardEnviarTreino
        showCardEnviar={showCardEnviar}
        handleShowCardEnviar={handleshowCardEnviar}
      />
      <S.containerGeral showCardDetalhes={props.showCardDetalhes}>
        <S.CardDetalhesInfo showCardDetalhes={props.showCardDetalhes}>
          <S.containerFechar onClick={props.handleshowCardDetalhes}>
            <IoClose />
          </S.containerFechar>
          <S.TextDetalhesTreino>Detalhe do Treino</S.TextDetalhesTreino>
          <S.containerInfoCard>
            <S.ImagemExercicios src="" />
            <S.ContainerInfoTexts>
              <S.textInfo>Nome: {props.nome}</S.textInfo>
              <S.textInfo>Duração: {props.duracao}</S.textInfo>
              <S.textInfo>Repetição: {props.repeticao} repitção</S.textInfo>
              <S.textInfo>Execução: {props.execucao} execuções</S.textInfo>
              <S.textInfo>Intervalo: {props.intervalo} intervalos</S.textInfo>
            </S.ContainerInfoTexts>
            <S.TextDescricao>Descrição: {props.descricao}</S.TextDescricao>
            <S.ContainerButtons>
              <S.buttonEnviar onClick={handleshowCardEnviar}>
                Enviar Treino
              </S.buttonEnviar>
            </S.ContainerButtons>
          </S.containerInfoCard>
        </S.CardDetalhesInfo>
      </S.containerGeral>
    </>
  );
};
