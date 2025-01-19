import React, { useState } from "react";
import { HaederPageAdmin } from "../../../../components/HeaderPageAdmin/HeaderPageAdmin";
import { BarraDeNavegacao } from "../../../../components/BarraDeNavegação/BarraDeNavegacao";
import { HiUserGroup } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";
import ImagemExemplo from "../../../../assets/img/fotoPerfilMulher.svg";
import * as S from "./styles";
import { SectionSinoNovosFormularios } from "../SectionSinoNovosFormularios/SectionSinoNovosFormularios";
import { CardClientesColabores } from "../../../../components/CardClientesColabores/CardClientesColabores";
import { ContainerInfoCards } from "../../../../components/ContainerIndoCard/ContainerIndoCard";

export const SectionCliente: React.FC = () => {
  const [numeroDeNotificacoes, setNumeroDeNotificacoes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showOpcaoTroca, setShowOpcaoTroca] = useState(false);
  const [showContainer, setShowContainer] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [pessoas, setPessoas] = useState([
    {
      nome: "Juan",
      sobrenome: "Carvalho",
      email: "juan.carvalho@example.com",
      status: true,
      dataDeEntrada: "2009-09-09",
      foto: ImagemExemplo,
    },
    {
      nome: "Ana",
      sobrenome: "Silva",
      email: "ana.silva@example.com",
      status: false,
      dataDeEntrada: "2015-03-15",
      foto: ImagemExemplo,
    },
    {
      nome: "Carlos",
      sobrenome: "Oliveira",
      email: "carlos.oliveira@example.com",
      status: true,
      dataDeEntrada: "2020-07-22",
      foto: ImagemExemplo,
    },
    {
      nome: "Mariana",
      sobrenome: "Souza",
      email: "mariana.souza@example.com",
      status: true,
      dataDeEntrada: "2018-01-01",
      foto: ImagemExemplo,
    },
    {
      nome: "Fernanda",
      sobrenome: "Lima",
      email: "fernanda.lima@example.com",
      status: false,
      dataDeEntrada: "2016-10-12",
      foto: ImagemExemplo,
    },
  ]);

  const filteredPessoas = pessoas.filter((pessoa) =>
    pessoa.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  const toggleOpcaoTroca = () => setShowOpcaoTroca(!showOpcaoTroca);
  const toggleShowContainer = () => setShowContainer(!showContainer);
  const toggleAdicionarClasse = () => setIsActive((prev) => !prev);

  const removerPessoa = (index: number) => {
    setPessoas((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFiltroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  return (
    <>
      <HaederPageAdmin />
      <BarraDeNavegacao
        TextTipoUser="Controles Clientes"
        IconeTipoUser={HiUserGroup}
        TextoBotao="Novo Cliente"
        ExibirSeta={false}
        ShowOpcaoTroca={showOpcaoTroca}
        handleShowOpcaoTroca={toggleOpcaoTroca}
        ExibirFormCliente={true}
        ExibirFormColaborador={false}
        SectionAtual="Cliente"
        handleAdicionarClasse={toggleAdicionarClasse}
        AdicionarCLasse={isActive}
        handleShowContainer={toggleShowContainer}
        ValorNotificacao={numeroDeNotificacoes}
      />
      {showContainer ? (
        <S.ContainerInput>
          <S.ContainerGeralInput className={isActive ? "active" : ""}>
            <S.ContainerIconeInput>
              <CgSearch />
            </S.ContainerIconeInput>
            <S.InputFiltroCliente
              type="text"
              placeholder="Pesquise aqui"
              value={filtro}
              onChange={handleFiltroChange}
            />
          </S.ContainerGeralInput>
        </S.ContainerInput>
      ) : null}
      {showContainer ? (
        <>
          <ContainerInfoCards
            AdicionarClasse={isActive}
            handleAdicionarClasse={toggleAdicionarClasse}
          />
          <S.ContainerCardColaboradores className={isActive ? "active" : ""}>
            {filteredPessoas.map((pessoa, index) => (
              <CardClientesColabores
                key={index}
                nome={pessoa.nome}
                sobrenome={pessoa.sobrenome}
                email={pessoa.email}
                dataEntrada={pessoa.dataDeEntrada}
                Status={pessoa.status ? "Ativo" : "Inativo"}
                fotoPerfil={pessoa.foto}
                removerpessoa={() => removerPessoa(index)}
                adicionarClasse={toggleAdicionarClasse}
                adicionar={isActive}
              />
            ))}
          </S.ContainerCardColaboradores>
        </>
      ) : (
        <SectionSinoNovosFormularios
          isActive={isActive}
          numeroNotificacao={numeroDeNotificacoes}
          onNotificacoesChange={setNumeroDeNotificacoes}
        />
      )}
    </>
  );
};
