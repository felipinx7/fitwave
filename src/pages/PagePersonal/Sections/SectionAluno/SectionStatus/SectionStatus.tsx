import React, { useState } from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../../components/HeaderInfo/HeaderInfo";
import { CardStatus } from "../../../../../components/CardStatus/CardStatus";
import { treinosPendentes } from "../../../../../constants/constasts";

export const SectionStatus: React.FC = () => {
  const [treinos, setTreinos] = useState(treinosPendentes);
  const [filtro, setFiltro] = useState<"pendentes" | "concluidos">("pendentes");

  const handleActive = (status: boolean, index: number) => {
    const newTreinos = [...treinos];
    newTreinos[index].pendente = !status;
    setTreinos(newTreinos);
  };

  const filteredTreinos = treinos.filter(treino =>
    filtro === "pendentes" ? treino.pendente : !treino.pendente
  );

  return (
    <S.Status>
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="so" />
      <S.containerInput placeholder="Pesquise aqui" />
      <S.ContainerFitros>
        <S.Filtro
          onClick={() => setFiltro("pendentes")}
          Active={filtro === "pendentes"}
        >
          Treinos Pendentes
        </S.Filtro>
        <S.Filtro
          onClick={() => setFiltro("concluidos")}
          Active={filtro === "concluidos"}
        >
          Treinos Concluídos
        </S.Filtro>
      </S.ContainerFitros>
      <S.containerCardsClientes>
        {filteredTreinos.map((treino, index) => (
          <CardStatus
            key={index}
            nomeTreino={treino.treino}
            dataFinishi="01/09/2023"
            active={treino.pendente}
            pedencia={treino.pendente}
            nome={treino.nome}
          />
        ))}
      </S.containerCardsClientes>
    </S.Status>
  );
};
