import React, { useState } from "react";
import * as S from "./styles";
import { SectionNovosClientes } from "../../pages/PageAdministrador/Sections/SectionNovosClientes/SectionNovosClientes";

interface CardClienteProps {
  foto: string;
  dataDeEnvio: string;
  isNovo: boolean;
  handleNovoCard: () => void;
  handleShowContainer?: () => void;
  nome: string;
  sobrenome: string;
  email: string;
  dataPagamento: string;
  AreaFoco: string;
  Categoria: string;
  Peso: number;
  telefone: string;
  senha: string;
  sexo: string;
  PrincipalObjetivo: string;
  TreinoSemanais: number;
  Altura: number;
}

export const CardClientesNovos: React.FC<CardClienteProps> = (props) => {
  const [showContainerForm, setshowContainerForm] = useState(false);

  const handleNovoCard = () => {
    props.handleNovoCard();
    setshowContainerForm((prev) => !prev);
  };
  return (
    <>
      {/* Preenchendo a SectionNovosClientes com as props do CardClientesNovos */}
      <SectionNovosClientes
        nome={props.nome}
        sobrenome={props.sobrenome}
        email={props.email}
        dataPagamento={props.dataPagamento}
        AreaFoco={props.AreaFoco}
        Categoria={props.Categoria}
        Peso={props.Peso}
        telefone={props.telefone}
        senha={props.senha}
        sexo={props.sexo}
        PrincipalObjetivo={props.PrincipalObjetivo}
        TreinoSemanais={props.TreinoSemanais.toString()}
        Altura={props.Altura}
        showContainer={showContainerForm}
        handleShowContainer={props.handleShowContainer}
      />
      <S.CardNovoCliente className={props.isNovo ? "CardNovo active" : ""}>
        <S.ContainerInfoBasica>
          <S.ContainerFotoPerfil>
            <S.fotoPerfil src={props.foto} />
            <S.InfoNomeEmail>
              <S.TextNome>
                {props.nome} {props.sobrenome}
              </S.TextNome>
              <S.textEmail>{props.email}</S.textEmail>
            </S.InfoNomeEmail>
          </S.ContainerFotoPerfil>
        </S.ContainerInfoBasica>
        <S.ContainerAcessarForm>
          <S.ButtonAcessarForm
            className={props.isNovo ? "CardNovo" : ""}
            onClick={handleNovoCard}
          >
            Acessar
          </S.ButtonAcessarForm>
          <S.ContainerInfoEnvio className={props.isNovo ? "CardNovo" : ""}>
            <S.TextEnvio>{props.dataDeEnvio}</S.TextEnvio>
          </S.ContainerInfoEnvio>
        </S.ContainerAcessarForm>
      </S.CardNovoCliente>
    </>
  );
};
