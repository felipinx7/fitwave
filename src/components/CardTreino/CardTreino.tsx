import React, { useState } from "react";
import * as S from "./styles";
import { CardDetalhesTreino } from "../CardDetalhesTreino/CardDetalhesTreino";
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";

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
  const [showContainerCadastrar, setShowContainerCadastrar] = useState(false);
  const [showCardEnviar, setShowCardEnviar] = useState(false);

  const [nome, setNome] = useState(props.nome);
  const [descricao, setDescricao] = useState(props.descricao);
  const [categoria, setCategoria] = useState(props.categoria);
  const [repeticao, setRepeticao] = useState(props.repeticao);
  const [execucao, setExecucao] = useState(props.execucao);
  const [intervalo, setIntervalo] = useState(props.intervalo);
  const [duracao, setDuracao] = useState(props.duracao);

  const handleShowContainerCadastrar = () => {
    setShowContainerCadastrar((prev) => !prev);
  };

  const handleShowCardDetalhes = () => {
    setShowCardDetalhes((prev) => !prev);
  };

  const handleShowCardEnviar = () => {
    setShowCardEnviar((prev) => !prev);
  };

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
          Detalhes do Treino
        </S.buttonDetalhes>
        <S.ContainerButtonEdicao>
          <S.buttonsEdicao onClick={handleShowContainerCadastrar}>
            <RiPencilFill />
          </S.buttonsEdicao>
          <S.buttonsEdicao onClick={handleExcluirCard}>
            <MdDelete />
          </S.buttonsEdicao>
        </S.ContainerButtonEdicao>
      </S.Card>

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
        handleShowCard={handleShowCardEnviar}
      />

      <S.ContainerCadastrarTreino showContainerCadastrar={showContainerCadastrar}>
        <S.containerInfoFhecarCard onClick={handleShowContainerCadastrar}>
          <IoClose />
        </S.containerInfoFhecarCard>
        <S.tituloCard>Editar Treino</S.tituloCard>
        <S.ContainerFotoTreino type="file" accept="image/*" />

        <S.containerLabels>
          <S.label>Nome do Exercício:</S.label>
          <S.Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

          <S.label>Descrição:</S.label>
          <S.Input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

          <S.label>Categoria:</S.label>
          <S.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Selecione a categoria</option>
            <option value="Cardio">Cardio</option>
            <option value="Glúteos">Glúteos</option>
            <option value="Pernas">Pernas</option>
            <option value="Costas">Costas</option>
            <option value="Peitoral">Peitoral</option>
          </S.Select>

          <S.label>Quantidade de Repetições:</S.label>
          <S.Input type="number" value={repeticao} onChange={(e) => setRepeticao(Number(e.target.value))} />

          <S.label>Execuções por Repetição:</S.label>
          <S.Input type="number" value={execucao} onChange={(e) => setExecucao(Number(e.target.value))} />

          <S.label>Intervalo (segundos):</S.label>
          <S.Input type="number" value={intervalo} onChange={(e) => setIntervalo(Number(e.target.value))} />

          <S.label>Duração:</S.label>
          <S.Input type="text" value={duracao} onChange={(e) => setDuracao(e.target.value)} />
        </S.containerLabels>

        <S.buttonCadastrarTreino>EDITAR TREINO</S.buttonCadastrarTreino>
      </S.ContainerCadastrarTreino>
    </>
  );
};
