import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { CardClientesNovos } from "../../../../components/CardNovosClientes/CardNovosClientes";
import ImageTeste from "../../../../assets/img/fotoPerfilMulher.svg";

type User = {
  nome: string;
  sobrenome: string;
  email: string;
  dataDeEnvio: string;
  fotoPerfil: string;
  isNovo: boolean;
};

interface SectinSinoNovosFormulariosProps {
  numeroNotificacao: number;
  onNotificacoesChange: (num: number) => void;
  isActive: boolean
}

export const SectionSinoNovosFormularios: React.FC<SectinSinoNovosFormulariosProps> = ({
  numeroNotificacao,
  onNotificacoesChange,
  isActive,
}) => {
  const [ValueInput, setValueInput] = useState("");
  const [Newusers, setNewusers] = useState<User[]>([
    {
      nome: "Juan",
      sobrenome: "Carvalho",
      email: "juan.carvalho@example.com",
      dataDeEnvio: "18 Jan 2023, 00:00",
      fotoPerfil: ImageTeste,
      isNovo: true,
    },
    {
      nome: "Ana",
      sobrenome: "Silva",
      email: "ana.silva@example.com",
      dataDeEnvio: "18 Jan 2027, 00:00",
      fotoPerfil: ImageTeste,
      isNovo: true,
    },
    {
      nome: "Carlos",
      sobrenome: "Oliveira",
      email: "carlos.oliveira@example.com",
      dataDeEnvio: "18 Jan 2025, 00:00",
      fotoPerfil: ImageTeste,
      isNovo: true,
    },
    {
      nome: "Mariana",
      sobrenome: "Souza",
      email: "mariana.souza@example.com",
      dataDeEnvio: "18 Jan 2025, 00:00",
      fotoPerfil: ImageTeste,
      isNovo: true,
    },
    {
      nome: "Fernanda",
      sobrenome: "Lima",
      email: "fernanda.lima@example.com",
      dataDeEnvio: "18 Jan 2025, 00:00",
      fotoPerfil: ImageTeste,
      isNovo: true,
    },
  ]);

  const [isclicked, setsclicked] = useState<number | null>(null);

  const NumeroDeCardsNovos = (arr: User[]): number =>
    arr.filter((user) => user.isNovo).length;

  useEffect(() => {
    onNotificacoesChange(NumeroDeCardsNovos(Newusers));
  }, [Newusers, onNotificacoesChange]);

  const handleClick = (index: number) => {
    setsclicked((prevIsClicked) => (prevIsClicked === index ? null : index));
  };

  const handleNovoCard = (index: number) => {
    const updatedUsers = [...Newusers];
    updatedUsers[index].isNovo = false;
    setNewusers(updatedUsers);
  };

  const filteredUsers = Newusers
    .filter((user) => user.nome.toLowerCase().includes(ValueInput.toLowerCase())) // Filtro por pesquisa
    .filter((user) => {
      if (isclicked === 1) {
        return user.isNovo === true; 
      }
      return true;  
    });

  const todosLidos = Newusers.every((user) => user.isNovo === false);

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
            <S.MensagemTodosLidos>Nehum Resultado encontrado  :(</S.MensagemTodosLidos>
          </S.ContainerTextTodoslidos>
        ) : (
          filteredUsers.map((user, index) => (
            <CardClientesNovos
              key={index}
              nome={user.nome}
              sobrenome={user.sobrenome}
              emaill={user.email}
              dataDeEnvio={user.dataDeEnvio}
              foto={user.fotoPerfil}
              isNovo={user.isNovo}
              handleNovoCard={() => handleNovoCard(index)}
            />
          ))
        )}
      </S.ContaierCardsNovosClientes>
    </S.SectionSino>
  );
};
