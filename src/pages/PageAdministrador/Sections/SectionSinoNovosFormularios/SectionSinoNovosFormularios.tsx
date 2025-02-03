import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { CardClientesNovos } from "../../../../components/CardNovosClientes/CardNovosClientes";
import { NovosUsuarios } from "../../../../constants/constasts";

type User = {
  nome: string;
  sobrenome: string;
  email: string;
  data: string;
  foto: string;
  status: boolean;
  dataDePagamento: string;
  areaDeFoco: string;
  categoria: string;
  peso: number;
  telefone: string;
  senha: string;
  sexo: string;
  principaisObjetivos: string;
  treinosSemanais: number;
  altura: number;
};

interface SectinSinoNovosFormulariosProps {
  numeroNotificacao: number;
  onNotificacoesChange: (num: number) => void;
  isActive: boolean;
  handleShowContainer?: () => void;
}

export const SectionSinoNovosFormularios: React.FC<
  SectinSinoNovosFormulariosProps
> = ({
  numeroNotificacao,
  onNotificacoesChange,
  isActive,
  handleShowContainer,
}) => {
  const [ValueInput, setValueInput] = useState("");
  const [Newusers, setNewusers] = useState(NovosUsuarios);
  const [isclicked, setsclicked] = useState<number | null>(null);

  const NumeroDeCardsNovos = (arr: User[]): number =>
    arr.filter((user) => user.status).length;

  useEffect(() => {
    onNotificacoesChange(NumeroDeCardsNovos(Newusers));
  }, [Newusers, onNotificacoesChange]);

  const handleClick = (index: number) => {
    setsclicked((prevIsClicked) => (prevIsClicked === index ? null : index));
  };

  const handleNovoCard = (index: number) => {
    const updatedUsers = [...Newusers];
    updatedUsers[index].status = false;
    setNewusers(updatedUsers);
  };

  const filteredUsers = Newusers.filter((user) =>
    user.nome.toLowerCase().includes(ValueInput.toLowerCase())
  ).filter((user) => {
    if (isclicked === 1) {
      return user.status === true;
    }
    return true;
  });

  const todosLidos = Newusers.every((user) => user.status === false);

  return (
    <S.SectionSino>
      <S.ContainerInformacoesFiltros className={isActive ? "active" : ""}>
        <S.ContainerLidaENaoLida>
          <S.ButtonsLidos
            isClicked={isclicked === 1}
            onClick={() => handleClick(1)}
          >
            Não Lidas ({numeroNotificacao})
          </S.ButtonsLidos>
          <S.ButtonsLidos
            isClicked={isclicked === 0}
            onClick={() => handleClick(0)}
          >
            Todas
          </S.ButtonsLidos>
        </S.ContainerLidaENaoLida>
        <S.ContainerInput>
          <S.InputFiltro
            type="text"
            placeholder="Pesquise aqui."
            value={ValueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </S.ContainerInput>
      </S.ContainerInformacoesFiltros>

      <S.ContaierCardsNovosClientes>
        {filteredUsers.length === 0 ? (
          <S.ContainerTextTodoslidos>
            <S.MensagemTodosLidos>
              Nenhum Resultado encontrado :(
            </S.MensagemTodosLidos>
          </S.ContainerTextTodoslidos>
        ) : (
          filteredUsers.map((user, index) => (
            <CardClientesNovos
              key={index}
              dataDeEnvio={user.data}
              isNovo={user.status}
              handleNovoCard={() => handleNovoCard(index)}
              handleShowContainer={handleShowContainer}
              foto={user.foto}
              email={user.email}
              dataPagamento={user.dataDePagamento}
              AreaFoco={user.areaDeFoco}
              Categoria={user.categoria}
              Peso={user.peso}
              telefone={user.telefone}
              senha={user.senha}
              sexo={user.sexo}
              PrincipalObjetivo={user.principaisObjetivos}
              TreinoSemanais={user.treinosSemanais}
              Altura={user.altura}
              nome={user.nome}
              sobrenome={user.sobrenome}
            />
          ))
        )}
      </S.ContaierCardsNovosClientes>
    </S.SectionSino>
  );
};
