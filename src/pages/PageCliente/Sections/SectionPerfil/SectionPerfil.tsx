import React from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";

export const SectionPerfil: React.FC = () => {
  return (
    <S.Perfil>
      <HeaderInfo nome="Felipe Lima" cargo="Aluno" foto="dj" />
      <S.ContainerInfoUsuario>
        <S.ContainerInfo>
          <S.containerFotoPerfil>
            <S.FotoPerfil src="" />
          </S.containerFotoPerfil>
          <S.containerInfoClientes>
            <S.containerInfoClientes>
              <S.ContainerParteDireita>
                <S.containerInput>
                  <S.label>Nome:</S.label>
                  <S.inputUser placeholder="Nome" />
                </S.containerInput>
                <S.containerInput>
                  <S.label>Email</S.label>
                  <S.inputUser placeholder="Email" />
                </S.containerInput>
                <S.containerInput>
                  <S.label>Senha</S.label>
                  <S.inputUser placeholder="Senha" />
                </S.containerInput>
                <S.containerInput>
                  <S.ContainerInfoCorpo>
                    <S.containerInfoMassaCorporal>
                      <S.containerInput>
                        <S.label>Altura:</S.label>
                        <S.inputUser placeholder="altura" />
                      </S.containerInput>
                      <S.containerInput>
                        <S.label>Peso:</S.label>
                        <S.inputUser placeholder="Peso" />
                      </S.containerInput>
                    </S.containerInfoMassaCorporal>
                  </S.ContainerInfoCorpo>
                </S.containerInput>
              </S.ContainerParteDireita>
              <S.ContainerParteEsquerda>
                <S.containerInput>
                  <S.label>Sobrenome</S.label>
                  <S.inputUser placeholder="Sobrenome" />
                </S.containerInput>
                <S.containerInput>
                  <S.label>Telefone</S.label>
                  <S.inputUser placeholder="Telefone" />
                </S.containerInput>
                <S.containerInput>
                  <S.label>Sexo</S.label>
                  <S.inputUser placeholder="Sexo" />
                </S.containerInput>
                <S.containerInput>
                  <S.label>Data Pagamento</S.label>
                  <S.inputUser placeholder="Data Pagamento" />
                </S.containerInput>
              </S.ContainerParteEsquerda>
            </S.containerInfoClientes>
          </S.containerInfoClientes>
            <S.textAviso>
              Todas as suas informações estão disponiveis aqui!. <br />
              Caso aja algum erro nas informações acima, consulte o seu Personal.
            </S.textAviso>
        </S.ContainerInfo>
      </S.ContainerInfoUsuario>
    </S.Perfil>
  );
};
