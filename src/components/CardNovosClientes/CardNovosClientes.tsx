import React, { useState } from "react";
import * as S from "./styles";

interface CardClienteProps {
  nome: string;
  sobrenome: string;
  foto: string;
  emaill: string;
  dataDeEnvio: string;
  isNovo: boolean;
  handleNovoCard: () => void;
}

export const CardClientesNovos: React.FC<CardClienteProps> = (props) => {
  const [NovoCard, setNovoCard] = useState(props.isNovo);

  const handleNovoCard = () => {
    setNovoCard(false);
    props.handleNovoCard();
  };

  return (
    <S.CardNovoCliente className={props.isNovo ? "CardNovo active" : ""}>
      <S.ContainerInfoBasica>
        <S.ContainerFotoPerfil>
          <S.fotoPerfil src={props.foto} />
          <S.InfoNomeEmail>
            <S.TextNome>{props.nome} {props.sobrenome}</S.TextNome>
            <S.textEmail>{props.emaill}</S.textEmail>
          </S.InfoNomeEmail>
        </S.ContainerFotoPerfil>
      </S.ContainerInfoBasica>
      <S.ContainerAcessarForm>
        <S.ButtonAcessarForm className={props.isNovo ? "CardNovo" : ""} onClick={handleNovoCard}>
          Acessar
        </S.ButtonAcessarForm >
        <S.ContainerInfoEnvio className={props.isNovo ? "CardNovo" : ""}>
          <S.TextEnvio>{props.dataDeEnvio}</S.TextEnvio>
        </S.ContainerInfoEnvio>
      </S.ContainerAcessarForm>
    </S.CardNovoCliente>
  );
};
