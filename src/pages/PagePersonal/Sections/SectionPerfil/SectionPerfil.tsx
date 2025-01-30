import React from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";

export const SectionPerfil: React.FC = () => {
  return (
    <S.Perfil>
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="sjkj" />
      <S.ContainerFormGeral>
        <S.ContainerForm>
          <S.InputFotoPerfil type="file" accept="image/*" placeholder="p" required />
          <S.ContainerNome>
            <S.inptnomes>
              <S.Label>Nome</S.Label>
              <S.Input type="text" placeholder="Digite seu nome" />
            </S.inptnomes>
            <S.inptnomes>
              <S.Label>Sobrenome</S.Label>
              <S.Input type="text" placeholder="Digite seu sorenome" />
            </S.inptnomes>
          </S.ContainerNome>
          <S.Label>Email:</S.Label>
          <S.Input type="text" placeholder="Digite seu email" required/>
          <S.Label>Telefone</S.Label>
          <S.Input type="tel" placeholder="Digite o telefone" required/>
          <S.Label>Cargo</S.Label>
          <S.Input type="text" placeholder="Cargo" required/>
          <S.ButtonEditar type="submit">Editar Perfil</S.ButtonEditar>
        </S.ContainerForm>
      </S.ContainerFormGeral>
    </S.Perfil>
  );
};
