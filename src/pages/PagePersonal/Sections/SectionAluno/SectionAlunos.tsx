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

            {/* Formulário Cadastro */}
            <S.Form method="">
              <S.FotoPerfil type="file" accept="image/*" required />
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

              <S.Label>Senha:</S.Label>
              <S.Input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                required
              />

              <S.Label>Dia de Pagamento:</S.Label>
              <S.Input type="date" name="diaPagamento" required />

              <S.Label>Sexo:</S.Label>
              <S.Select name="sexo" required>
                <option value="">Selecione o sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </S.Select>

              <S.Label>Área de Foco:</S.Label>
              <S.Select name="areaFoco" required>
                <option value="">Selecione a área de foco</option>
                <option value="corpoTodo">Corpo Todo</option>
                <option value="braco">Braço</option>
                <option value="perna">Perna</option>
                <option value="costa">Costa</option>
                <option value="peitoral">Peitoral</option>
                <option value="abdomen">Abdômen</option>
              </S.Select>

              <S.Label>Objetivo:</S.Label>
              <S.Select name="objetivo" required>
                <option value="">Selecione o objetivo</option>
                <option value="perderPeso">Perder Peso</option>
                <option value="ganharMusculos">Ganhar Músculos</option>
                <option value="manterForma">Manter Forma</option>
              </S.Select>

              <S.Label>Categoria:</S.Label>
              <S.Select name="categoria" required>
                <option value="">Selecione a categoria</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </S.Select>

              <S.Label>Treinos Semanais:</S.Label>
              <S.Input
                type="number"
                name="treinosSemanais"
                placeholder="Número de treinos por semana"
                required
                maxLength={7}
                minLength={1} 
              />

              <S.Label>Peso (kg):</S.Label>
              <S.Input
                type="number"
                name="peso"
                placeholder="Digite o peso"
                required
              />

              <S.Label>Altura (cm):</S.Label>
              <S.Input
                type="number"
                name="altura"
                placeholder="Digite a altura"
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
