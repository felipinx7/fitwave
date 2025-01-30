import React, { useState } from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import { Treinos } from "../../../../constants/constasts";
import { linksButtonSelected } from "../../../../constants/constasts";
import { CardTreino } from "../../../../components/CardTreino/CardTreino";
import { CardEnviarTreino } from "../../../../components/CardEnviarTreino/CardEnviarTreino";
import { IoClose } from "react-icons/io5";

export const SectionTreino: React.FC = () => {
  // Parte dos Estados
  const [nivel, setNivel] = useState<string>("");
  const [isActive, setIsActive] = useState<number | null>(
    linksButtonSelected[0].param
  );
  const [treinos, setTreinos] = useState(Treinos);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showCardEnviar, setshowCardEnviar] = useState(false);
  const [ShowContainerCadastrar, setShowContainerCadastrar] = useState(false);

  const handleshowCardEnviar = () => {
    setshowCardEnviar((prev) => !prev);
    console.log("É aqui viu!");
  };
  const handleShowContainerCadastrar = () => {
    setShowContainerCadastrar((prev) => !prev);
  };

  // Funções de Manipulação
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNivel(e.target.value);
    console.log(nivel);
  };
  const handlevalueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLocaleLowerCase());
  };

  // Filtra os treinos pela pesquisa
  const filteredTreinos = treinos.filter(
    (card) => card.nome.toLowerCase().includes(searchTerm) // Filtra os treinos pelo nome
  );

  const handleIsActive = (param: number) => {
    setIsActive(param);
  };

  const handleDeleteTreino = (id: number) => {
    setTreinos((prevTreinos) =>
      prevTreinos.filter((treino) => treino.id !== id)
    );
  };

  // Função para Renderizar as Sections
  const filterContainer = () => {
    switch (isActive) {
      case 1:
        const cardioTreinos = filteredTreinos.filter(
          (card) =>
            card.categoria === "Cardio" &&
            (nivel === "" || card.nivel === nivel)
        );
        return (
          <S.ContainerCardio>
            <S.TextosTitulos>Categoria de Cardios</S.TextosTitulos>
            <S.ContainerCardsTreinos>
              {cardioTreinos.length > 0 ? (
                cardioTreinos.map((treino, index) => (
                  <CardTreino
                    key={index}
                    nome={treino.nome}
                    categoria={treino.categoria}
                    duracao={treino.duracao}
                    img={treino.img}
                    execucao={treino.execucoesPorRepeticao}
                    intervalo={treino.intervalo}
                    repeticao={treino.repeticoes}
                    descricao={treino.descricao}
                    id={treino.id}
                    onDelete={handleDeleteTreino}
                  />
                ))
              ) : (
                <S.ContainerMensagem>
                  <S.MensagemErro>
                    Nenhum Resultado Encontrado :(
                  </S.MensagemErro>
                </S.ContainerMensagem>
              )}
            </S.ContainerCardsTreinos>
          </S.ContainerCardio>
        );
      case 2:
        const gluteosTreinos = filteredTreinos.filter(
          (card) =>
            card.categoria === "Glúteos" &&
            (nivel === "" || card.nivel === nivel)
        );
        return (
          <S.ContainerGluteos>
            <S.TextosTitulos>Categoria de Glúteos</S.TextosTitulos>
            <S.ContainerCardsTreinos>
              {gluteosTreinos.length > 0 ? (
                gluteosTreinos.map((card, index) => (
                  <CardTreino
                    key={index}
                    nome={card.nome}
                    categoria={card.categoria}
                    duracao={card.duracao}
                    img={card.img}
                    execucao={card.execucoesPorRepeticao}
                    intervalo={card.intervalo}
                    repeticao={card.repeticoes}
                    descricao={card.descricao}
                    id={card.id}
                    onDelete={handleDeleteTreino}
                  />
                ))
              ) : (
                <S.ContainerMensagem>
                  <S.MensagemErro>
                    Nenhum Resultado Encontrado :(
                  </S.MensagemErro>
                </S.ContainerMensagem>
              )}
            </S.ContainerCardsTreinos>
          </S.ContainerGluteos>
        );
      case 3:
        const pernasTreinos = filteredTreinos.filter(
          (info) =>
            info.categoria === "Pernas" &&
            (nivel === "" || info.nivel === nivel)
        );
        return (
          <S.ContainerPernas>
            <S.TextosTitulos>Categoria de Pernas</S.TextosTitulos>
            <S.ContainerCardsTreinos>
              {pernasTreinos.length > 0 ? (
                pernasTreinos.map((card, index) => (
                  <CardTreino
                    key={index}
                    nome={card.nome}
                    categoria={card.categoria}
                    duracao={card.duracao}
                    img={card.img}
                    execucao={card.execucoesPorRepeticao}
                    intervalo={card.intervalo}
                    repeticao={card.repeticoes}
                    descricao={card.descricao}
                    id={card.id}
                    onDelete={handleDeleteTreino}
                  />
                ))
              ) : (
                <S.ContainerMensagem>
                  <S.MensagemErro>
                    Nenhum Resultado Encontrado :(
                  </S.MensagemErro>
                </S.ContainerMensagem>
              )}
            </S.ContainerCardsTreinos>
          </S.ContainerPernas>
        );
      case 4:
        const costasTreinos = filteredTreinos.filter(
          (info) =>
            info.categoria === "Costas" &&
            (nivel === "" || info.nivel === nivel)
        );
        return (
          <S.ContainerCostas>
            <S.TextosTitulos>Categoria de Costas</S.TextosTitulos>
            <S.ContainerCardsTreinos>
              {costasTreinos.length > 0 ? (
                costasTreinos.map((card, index) => (
                  <CardTreino
                    key={index}
                    nome={card.nome}
                    categoria={card.categoria}
                    duracao={card.duracao}
                    img={card.img}
                    execucao={card.execucoesPorRepeticao}
                    intervalo={card.intervalo}
                    repeticao={card.repeticoes}
                    descricao={card.descricao}
                    id={card.id}
                    onDelete={handleDeleteTreino}
                  />
                ))
              ) : (
                <S.ContainerMensagem>
                  <S.MensagemErro>
                    Nenhum Resultado Encontrado :(
                  </S.MensagemErro>
                </S.ContainerMensagem>
              )}
            </S.ContainerCardsTreinos>
          </S.ContainerCostas>
        );
      case 5:
        const peitoralTreinos = filteredTreinos.filter(
          (info) =>
            info.categoria === "Peitoral" &&
            (nivel === "" || info.nivel === nivel)
        );
        return (
          <S.ContainerPeitoral>
            <S.TextosTitulos>Categoria de Peitoral</S.TextosTitulos>
            <S.ContainerCardsTreinos>
              {peitoralTreinos.length > 0 ? (
                peitoralTreinos.map((card, index) => (
                  <CardTreino
                    key={index}
                    nome={card.nome}
                    categoria={card.categoria}
                    duracao={card.duracao}
                    img={card.img}
                    execucao={card.execucoesPorRepeticao}
                    intervalo={card.intervalo}
                    repeticao={card.repeticoes}
                    descricao={card.descricao}
                    id={card.id}
                    onDelete={handleDeleteTreino}
                  />
                ))
              ) : (
                <S.ContainerMensagem>
                  <S.MensagemErro>
                    Nenhum Resultado Encontrado :(
                  </S.MensagemErro>
                </S.ContainerMensagem>
              )}
            </S.ContainerCardsTreinos>
          </S.ContainerPeitoral>
        );
      default:
        return null; // Se nenhum valor de isActive corresponder, retorna nada
    }
  };

  return (
    <S.Treinos>
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="felipe" />

      {/* CONTAINER FILTRO E INPUT DE PESQUISA */}
      <S.containerInput>
        <S.InputPesquisa
          placeholder="Pesquise seu Treino.."
          onChange={handlevalueInput}
          value={searchTerm}
        />
        <S.containerFiltro>
          <S.InputSelected value={nivel} onChange={handleSelectChange}>
            <option value="">Selecione seu nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </S.InputSelected>
        </S.containerFiltro>
      </S.containerInput>

      {/* PARTE DOS FILTROS */}
      <S.ContainerFiltros>
        {linksButtonSelected.map((link, index) => (
          <S.Filtro
            key={index}
            isActive={isActive === link.param}
            onClick={() => handleIsActive(link.param)}
          >
            {link.nome}
          </S.Filtro>
        ))}
      </S.ContainerFiltros>

      {/* PARTE DAS CATEGORIAS */}
      <S.ContainerGeralCategorias>
        {filterContainer()}
        <S.ConatinerButtonAdicionar onClick={handleShowContainerCadastrar}>
          +
        </S.ConatinerButtonAdicionar>
        <S.ContainerCadastrarTreino
          showContainerCadastrar={ShowContainerCadastrar}
          method=""
        >
          <S.tituloCard>Cadastrar Treino</S.tituloCard>
          <S.containerInfoFhecarCard onClick={handleShowContainerCadastrar}>
            <IoClose />
          </S.containerInfoFhecarCard>
          <S.ContainerFotoTreino type="file" accept="image/*" required />

          <S.containerLabels>
            {/* Nome do Exercício */}
            <S.label>Nome do Exercício:</S.label>
            <S.Input type="text" placeholder="Ex: Agachamento" required />

            {/* Descrição */}
            <S.label>Descrição:</S.label>
            <S.Input type="text" placeholder="Descriçãõ aqui" required />

            {/* Categoria */}
            <S.label>Categoria:</S.label>
            <S.Select required>
              <option value="">Selecione a categoria</option>
              <option value="Cardio">Cardio</option>
              <option value="Glúteos">Glúteos</option>
              <option value="Pernas">Pernas</option>
              <option value="Costas">Costas</option>
              <option value="Peitoral">Peitoral</option>
            </S.Select>

            {/* Quantidade de Repetições */}
            <S.label>Quantidade de Repetições:</S.label>
            <S.Input type="number" placeholder="Ex: 3" required />

            {/* Execuções por Repetição */}
            <S.label>Execuções por Repetição:</S.label>
            <S.Input type="number" placeholder="Ex: 15" required />

            {/* Intervalo */}
            <S.label>Intervalo (segundos):</S.label>
            <S.Input type="number" placeholder="Ex: 30" required />

            {/* duração  */}
            <S.label>Duração:</S.label>
            <S.Input type="text" placeholder="Ex: 30" required />
          </S.containerLabels>
          <S.buttonCadastrarTreino>CADASTRAR TREINO</S.buttonCadastrarTreino>
        </S.ContainerCadastrarTreino>
      </S.ContainerGeralCategorias>
    </S.Treinos>
  );
};
