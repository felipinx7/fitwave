import React, { useState } from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import { ButtonFiltroCliente } from "../../../../constants/constasts";
import { CardTreinoAluno } from "../../../../components/CardTreinoAluno/CardTreinoAluno";
import { treinosClienteTela } from "../../../../constants/constasts";

export const SectionTreino: React.FC = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [active, setActive] = useState<number | null>(ButtonFiltroCliente[0].param);
  const [treinos, setTreinos] = useState(treinosClienteTela); // Estado para os treinos com pendências

  const handleActive = (param: number) => {
    setActive(param === active ? null : param);
  };

  // Função para alternar a pendência de um treino específico
  const MarcarConcluida = (id: number) => {
    setTreinos((prevTreinos) =>
      prevTreinos.map((treino) =>
        treino.id === id ? { ...treino, pendencia: !treino.pendencia } : treino
      )
    );
  };

  // Filtragem dos treinos baseada na pendência e na pesquisa
  const treinosFiltrados = treinos.filter((treino) => {
    const pesquisaMatch = treino.nome.toLowerCase().includes(pesquisa.toLowerCase());

    if (active === 1) {
      return pesquisaMatch && treino.pendencia === false;
    } else if (active === 2) {
      return pesquisaMatch && treino.pendencia === true;
    }
    return pesquisaMatch;
  });

  return (
    <S.Treino>
      <HeaderInfo nome="Felipe Lima" cargo="Aluno" foto="dj" />
      <S.InputPesquisa
        type="text"
        placeholder="Pesquise seu Treino"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      <S.ContainerFiltros>
        {ButtonFiltroCliente.map((card, index) => (
          <S.filtro
            key={index}
            active={active === card.param}
            onClick={() => handleActive(card.param)}
          >
            {card.nome}
          </S.filtro>
        ))}
      </S.ContainerFiltros>

      <S.ContainerCards>
        {treinosFiltrados.length > 0 ? (
          treinosFiltrados.map((card, index) => (
            <CardTreinoAluno
              key={index}
              nome={card.nome}
              Persnoal={card.personal}
              data={card.envio}
              shocontainer={card.pendencia}
              duracao={card.duracao}
              series={card.series}
              repeticoes={card.repeticoes}
              intervalo={card.intervalo}
              descricao={card.descricao}
              MarcarConcluida={() => MarcarConcluida(card.id)} // Passando a função com o ID
            />
          ))
        ) : (
          <S.containerMensagemerro>
            <S.MensagemNenhumTreino>Nenhum treino encontrado :(</S.MensagemNenhumTreino>
          </S.containerMensagemerro>
        )}
      </S.ContainerCards>
    </S.Treino>
  );
};
