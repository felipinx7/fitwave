import React, { useState } from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import { CardAluno } from "../../../../components/CardAluno/CardAluno";
import { FaTimes } from "react-icons/fa";

export const SectionAluno: React.FC = () => {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  return (
    <S.Alunos>
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="popo" />
      <S.ContainerFiltro>
        <S.InputPesquisa type="text" placeholder="Pesquise o aluno" />
        <S.Selectnivel>
          <option value="">Nível</option>
          <option value="iniciante">Iniciante</option>
          <option value="Intermediario">Intermediário</option>
          <option value="Avancado">Avançado</option>
        </S.Selectnivel>
      </S.ContainerFiltro>
      <S.containerLinha>
        <S.TextAlunos>Alunos da Academia</S.TextAlunos>
        <hr />
      </S.containerLinha>
      <S.containerCardsALunos>
        <CardAluno />
      </S.containerCardsALunos>
      <S.containerAdicionarCliente onClick={() => setMostrarCadastro(true)}>
        +
      </S.containerAdicionarCliente>

      {mostrarCadastro && (
        <S.ContainerCadastarCliente>
          <S.CadastroContainer>
            <S.CloseButton onClick={() => setMostrarCadastro(false)}>
              <FaTimes size={20} />
            </S.CloseButton>
            <S.Titulo>Editar Info</S.Titulo>
            <S.Form>
              <S.FotoPerfil
                type="file"
                accept="*/image"
                placeholder="d"
                required
              />
              <S.Label>Nome:</S.Label>
              <S.Input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                required
              />

              <S.Label>Sobrenome:</S.Label>
              <S.Input
                type="text"
                name="sobrenome"
                placeholder="Digite seu sobrenome"
                required
              />

              <S.Label>Email:</S.Label>
              <S.Input
                type="email"
                name="email"
                placeholder="Digite seu email"
                required
              />

              <S.Label>Telefone:</S.Label>
              <S.Input
                type="text"
                name="telefone"
                placeholder="(XX) XXXXX-XXXX"
                required
              />

              <S.Label>Senha:</S.Label>
              <S.Input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                required
              />

              <S.Button>Cadastrar</S.Button>
            </S.Form>
          </S.CadastroContainer>
        </S.ContainerCadastarCliente>
      )}
    </S.Alunos>
  );
};
