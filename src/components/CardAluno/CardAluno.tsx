import React, { useState } from "react";
import * as S from "./styles";
import {
  FaBars,
  FaPencilAlt,
  FaTimes,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { usuariosClientes } from "../../constants/constasts"; // Lista de alunos



export const CardAluno: React.FC = () => {
  const [toggleIcone, settoggleIcone] = useState<number | null>(null);
  const [mostrarEdicao, setMostrarEdicao] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState<any>(null);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [usuarios, setUsuarios] = useState(usuariosClientes);

  const handletoggleIcone = (id: number) => {
    settoggleIcone(toggleIcone === id ? null : id);
  };

  const abrirEdicao = (aluno: any) => {
    setAlunoSelecionado(aluno);
    setMostrarEdicao(true);
  };

  const toggleSenha = () => {
    setSenhaVisivel((prev) => !prev);
  };

  const deletarUsuario = (id: number) => {
    setUsuarios((prevUsuarios) =>
      prevUsuarios.filter((usuario) => usuario.id !== id)
    );
  };

  return (
    <>
      {usuarios.map((card) => (
        <S.Card key={card.id}>
          <S.ContainerInfo>
            <S.ContainerFotoPerfil>
              <S.FotoCliente src="" />
            </S.ContainerFotoPerfil>
            <S.ContainerInfoAluno>
              <S.textNome>
                {card.nome} {card.sobrenome}
              </S.textNome>
              <S.TextInfo>{card.email}</S.TextInfo>
              <S.TextInfo>{card.telefone}</S.TextInfo>
            </S.ContainerInfoAluno>
          </S.ContainerInfo>

          <S.contaierButtons>
            <S.ContainerButtonMobile>
              {toggleIcone === card.id ? (
                <FaTimes onClick={() => handletoggleIcone(card.id)} />
              ) : (
                <FaBars onClick={() => handletoggleIcone(card.id)} />
              )}
              {toggleIcone === card.id && (
                <S.ContainerButtonsMobile showContainer={true}>
                  <S.buttosMobile onClick={() => abrirEdicao(card)}>
                    <FaPencilAlt />
                  </S.buttosMobile>
                  <S.buttosMobile onClick={() => deletarUsuario(card.id)}>
                    <MdDelete />
                  </S.buttosMobile>
                </S.ContainerButtonsMobile>
              )}
            </S.ContainerButtonMobile>

            <S.ContainerButao>
              <S.buttonModificacao onClick={() => abrirEdicao(card)}>
                <FaPencilAlt />
              </S.buttonModificacao>
              <S.buttonModificacao onClick={() => deletarUsuario(card.id)}>
                <MdDelete />
              </S.buttonModificacao>
            </S.ContainerButao>
          </S.contaierButtons>
        </S.Card>
      ))}

      {mostrarEdicao && alunoSelecionado && (
        <S.ContainerEditarInfo>
          <S.CadastroContainer>
            <S.CloseButton onClick={() => setMostrarEdicao(false)}>
              <FaTimes size={20} />
            </S.CloseButton>
            <S.Titulo>Editar Informações</S.Titulo>
            <S.Form>
              <S.FotoPerfil type="file" accept="image/*" required />
              <S.Label>Nome:</S.Label>
              <S.Input
                type="text"
                name="nome"
                defaultValue={alunoSelecionado.nome}
                required
              />

              <S.Label>Sobrenome:</S.Label>
              <S.Input
                type="text"
                name="sobrenome"
                defaultValue={alunoSelecionado.sobrenome}
                required
              />

              <S.Label>Email:</S.Label>
              <S.Input
                type="email"
                name="email"
                defaultValue={alunoSelecionado.email}
                required
              />

              <S.Label>Telefone:</S.Label>
              <S.Input
                type="text"
                name="telefone"
                defaultValue={alunoSelecionado.telefone}
                required
              />

              <S.Label>Senha:</S.Label>
              <S.Input
                type={senhaVisivel ? "text" : "password"}
                name="senha"
                defaultValue={alunoSelecionado.senha}
                placeholder="Digite a nova senha"
                required
              />
              <S.IconoToggle onClick={toggleSenha}>
                {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </S.IconoToggle>

              <S.Button>Salvar Alterações</S.Button>
            </S.Form>
          </S.CadastroContainer>
        </S.ContainerEditarInfo>
      )}
    </>
  );
};
