import React, { useState } from "react";
import * as S from "./styles";
import { CardDetalhesTreino } from "../CardDetalhesTreino/CardDetalhesTreino";
import { FaTimes } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { CardEnviarTreino } from "../CardEnviarTreino/CardEnviarTreino";

interface CardTreinoProps {
  nome: string;
  categoria: string;
  duracao: string;
  img: string;
  nivel?: string;
  repeticao: number;
  execucao: number;
  intervalo: number;
  descricao: string;
  id: number;
  onDelete: (id: number) => void;
}

export const CardTreino: React.FC<CardTreinoProps> = (props) => {
  const [showCardDetalhes, setShowCardDetalhes] = useState(false);
  // Função para mostrar/ocultar os detalhes do treino
  const handleShowCardDetalhes = () => {
    setShowCardDetalhes((prev) => !prev);
  };
  const [showCardEnviar, setshowCardEnviar] = useState(false);

  const handleshowCardEnviar = () => {
    setshowCardEnviar((prev) => !prev);
  };

  // Função de exclusão do treino
  const handleExcluirCard = () => {
    props.onDelete(props.id);
    console.log(`O treino com ID ${props.id} foi excluído`);
  };

  return (
    <>
      <S.Card>
        <S.ImagemTreino src={props.img} alt={props.nome} />
        <S.ContainerTetxos>
          <S.TextInfosCard>Nome: {props.nome}</S.TextInfosCard>
          <S.TextInfosCard>Categoria: {props.categoria}</S.TextInfosCard>
          <S.TextInfosCard>Duração: {props.duracao}</S.TextInfosCard>
        </S.ContainerTetxos>
        <S.buttonDetalhes onClick={handleShowCardDetalhes}>
          Detalhes do Treio
        </S.buttonDetalhes>
        {/* Botões de edição e exclusão */}
        <S.ContainerButtonEdicao>
          <S.buttonsEdicao>
            <RiPencilFill />
          </S.buttonsEdicao>
          <S.buttonsEdicao onClick={handleExcluirCard}>
            <MdDelete />
          </S.buttonsEdicao>
        </S.ContainerButtonEdicao>
      </S.Card>

      {/* Componente de detalhes do treino */}
      <CardDetalhesTreino
        nome={props.nome}
        duracao={props.duracao}
        repeticao={props.repeticao}
        execucao={props.execucao}
        intervalo={props.intervalo}
        showCardDetalhes={showCardDetalhes}
        handleshowCardDetalhes={handleShowCardDetalhes}
        descricao={props.descricao}
        handleExluirCard={handleExcluirCard}
        handleShowCard={handleshowCardEnviar}
        
      />
    </>
  );
};
