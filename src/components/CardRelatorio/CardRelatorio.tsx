import React, { useState } from "react";
import * as S from "./styles";
import { SectionRelatorioTreino } from "../SectionRelatorioTreino/SectionRelatorioTreino";

interface CardRelatorioProps {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  peso: number;
  altura: number;
  imc: number;
  categoria: string[];
  data: number[];
  caloriasperdidas: number[];
  duracao: number[];
}

export const CardRelatorio: React.FC<CardRelatorioProps> = (props) => {
  const [mostrarSection, setmostrarSection] = useState(false);

  const handlemostrarSection = () => {
    setmostrarSection((prev) => !prev);
  };
  return (
    <>
      <S.Card>
        <S.ContainerFotoPerfil>
          <S.ContainerFotoPerfil>
            <S.FotoPerfil src="dk" />
          </S.ContainerFotoPerfil>
          <S.ContainerTextos>
            <S.textoNome>
              {props.nome} {props.sobrenome}
            </S.textoNome>
            <S.textoEmai>{props.email}</S.textoEmai>
          </S.ContainerTextos>
        </S.ContainerFotoPerfil>
        <S.containerButton>
          <S.ButtonRelatorio onClick={handlemostrarSection}>
            Relatório
          </S.ButtonRelatorio>
        </S.containerButton>
      </S.Card>
      <SectionRelatorioTreino
        nome={props.nome}
        sobrenome={props.sobrenome}
        email={props.email}
        peso={props.peso}
        altura={props.altura}
        imc={props.imc}
        telefone={props.telefone}
        MostarSection={mostrarSection}
        handleMostrarSection={handlemostrarSection}
        categoria={props.categoria[0]}
        data={props.data.map(Number)}
        caloriasperdidas={props.caloriasperdidas}
        duracao={props.duracao}
      />
    </>
  );
};
