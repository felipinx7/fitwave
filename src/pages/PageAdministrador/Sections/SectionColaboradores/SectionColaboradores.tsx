import React from "react";
import * as S from "./styles";
import { BarraDeNavegacao } from "../../../../components/BarraDeNavegação/BarraDeNavegacao";
import { TbUserHexagon } from "react-icons/tb";

export const SectionColaboradores: React.FC = () => {
  return (
    <S.SectionColaborador>
      <BarraDeNavegacao
        TextTipoUser="Administradores"
        IconeTipoUser={TbUserHexagon}
        TextoBotao="Novo Colaborador"
        ExibirSeta={true}
      />
    </S.SectionColaborador>
  );
};
