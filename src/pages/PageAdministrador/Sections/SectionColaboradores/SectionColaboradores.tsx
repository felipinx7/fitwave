import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeNavegacao } from "../../../../components/BarraDeNavegação/BarraDeNavegacao";
import { TbUserHexagon } from "react-icons/tb";
import { ContainerInfoCards } from "../../../../components/ContainerIndoCard/ContainerIndoCard";
import { CardClientesColabores } from "../../../../components/CardClientesColabores/CardClientesColabores";

export const SectionColaboradores: React.FC = () => {
  const [ShowOpcaoTroca, setShowOpcaoTroca] = useState(false);

  const handleShowOpcaoTroca = () => {
    setShowOpcaoTroca(!ShowOpcaoTroca);
  };
  return (
    <S.SectionColaborador>
      <BarraDeNavegacao
        TextTipoUser="Administradores"
        IconeTipoUser={TbUserHexagon}
        TextoBotao="Novo Colaborador"
        ExibirSeta={true}
        ShowOpcaoTroca={ShowOpcaoTroca}
        handleShowOpcaoTroca={handleShowOpcaoTroca}
        ExibirFormCliente={true}
        ExibirFormColaborador={false}
        SectionAtual="Colaborador"
      />
      <ContainerInfoCards/>
      <S.ContainerCardColaboaradores>
        <CardClientesColabores/>
      </S.ContainerCardColaboaradores>
    </S.SectionColaborador>
  );
};
