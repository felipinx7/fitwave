import React, { useState } from "react";
import * as S from "./styles";
import { FaTimes } from "react-icons/fa";

interface CardTreinoAlunoProps {
  nome: string;
  Persnoal: string;
  data: string;
  shocontainer: boolean;
  duracao: string;
  repeticoes: string;
  descricao: string;
  series: string;
  intervalo: string;
  MarcarConcluida:  () => void
}

export const CardTreinoAluno: React.FC<CardTreinoAlunoProps> = (props) => {
  const [MostrarContainerVisualizar, setMostrarContainerVisualizar] =
    useState(false);

  const handleMostrarContainerVisualizar = () => {
    setMostrarContainerVisualizar((prev) => !prev);
    console.log("Tou aqui sim viu!");
  };
  return (
    <>
      <S.Container showContainer={props.shocontainer}>
        <S.Imagem src="https://via.placeholder.com/60" alt="Treino" />
        <S.Info>
          <S.Nome>Nome: {props.nome} </S.Nome>
          <S.Personal>Personal: {props.Persnoal}</S.Personal>
          <S.Envio>Envio: {props.data}</S.Envio>
        </S.Info>
        <S.Botao
          showContainer={props.shocontainer}
          onClick={handleMostrarContainerVisualizar}
        >
          Visualizar
        </S.Botao>
        <S.textFinalizado showContainer={props.shocontainer} >
          FINALIZADO
        </S.textFinalizado>
      </S.Container>
      <S.ContainerVisualizarTreino
        method=""
        MostrarContainer={MostrarContainerVisualizar}
      >
        <S.ContaierFechar onClick={handleMostrarContainerVisualizar}>
            <FaTimes/>
        </S.ContaierFechar>
        <S.TextDetalhes>Detalhe do Treino</S.TextDetalhes>
        <S.containerInfoIndentificador>
          <S.textGerais>Nome: {props.nome}</S.textGerais>
          <S.textGerais>Duração: {props.duracao}</S.textGerais>
        </S.containerInfoIndentificador>
        <S.containerInfoIndentificador>
          <S.textGerais>Dia do Treino: </S.textGerais>
          <S.InputDiaTreino type="date" placeholder="Adicione aqui" required />
        </S.containerInfoIndentificador>
        <S.containerInfoIndentificador>
          <S.textGerais>Personal: {props.Persnoal}</S.textGerais>
          <S.textGerais>Séries: {props.series}</S.textGerais>
          <S.textGerais>Repetição: {props.repeticoes}</S.textGerais>
        </S.containerInfoIndentificador>
        <S.containerInfoIndentificador>
          <S.textGerais>Intervalo: {props.intervalo}</S.textGerais>
        </S.containerInfoIndentificador>
        <S.containerInfoIndentificador>
          <S.textGerais>Descrição: {props.descricao}</S.textGerais>
        </S.containerInfoIndentificador>
        <S.buttonMarcarFeito onClick={props.MarcarConcluida} type="submit">CONCLUIR</S.buttonMarcarFeito>
      </S.ContainerVisualizarTreino>
    </>
  );
};
