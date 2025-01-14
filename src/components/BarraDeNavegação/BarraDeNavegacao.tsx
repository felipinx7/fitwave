import React, { useState } from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IconType } from "react-icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


interface BarraDeNavegacaoProps {
  TextoBotao: string;
  IconeTipoUser: IconType;
  TextTipoUser: string;
  ExibirSeta: boolean;
}

export const BarraDeNavegacao: React.FC<BarraDeNavegacaoProps> = (props) => {

  return (
    <S.DivNavegacao>
      <S.BarraDeNavegacao>
        <S.ContainerTipoUser>
          <S.ContainerTipo>
            <props.IconeTipoUser />
          </S.ContainerTipo>
          <S.TextTipoUser showArrowDow={props.ExibirSeta}>
            {props.TextTipoUser} {props.ExibirSeta &&(
                <MdOutlineKeyboardArrowDown/>
            )}
          </S.TextTipoUser>
        </S.ContainerTipoUser>
        <S.ContainerInfo>
          <S.ContainerBarras>
            <FaBars />
          </S.ContainerBarras>
          <S.ContainerSino>
            <FaBell />
            <S.ValorDeNotificacaoSino>
                <S.ValorNotificacao>0+</S.ValorNotificacao>
            </S.ValorDeNotificacaoSino>
          </S.ContainerSino>
          <S.ButtonColaborador>+ {props.TextoBotao}</S.ButtonColaborador>
        </S.ContainerInfo>
      </S.BarraDeNavegacao>
    </S.DivNavegacao>
  );
};
