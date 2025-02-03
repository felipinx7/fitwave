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
import { NovosUsuarios } from "../../../../constants/constasts";
import { SectionNovosClientes } from "../SectionNovosClientes/SectionNovosClientes";

export const SectionCliente: React.FC = () => {
  const [numeroDeNotificacoes, setNumeroDeNotificacoes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showOpcaoTroca, setShowOpcaoTroca] = useState(false);
  const [showContainer, setShowContainer] = useState(true);
  const [filtro, setFiltro] = useState("");
  const [pessoas, setPessoas] = useState(NovosUsuarios);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [showContainerForm, setshowContainerForm] = useState(false);

  const handleShowContainerForm = () => {
    setshowContainerForm((prev) => !prev);
  };
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

  // Função para selecionar um cliente e preencher o formulário com seus dados
  const selecionarCliente = (cliente: any) => {
    setClienteSelecionado(cliente);
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
                dataEntrada={pessoa.data}
                Status={pessoa.status ? "Ativo" : "Inativo"}
                fotoPerfil={pessoa.foto || ImagemExemplo}
                removerpessoa={() => removerPessoa(index)}
                adicionarClasse={toggleAdicionarClasse}
                adicionar={isActive}
                onClick={() => selecionarCliente(pessoa)}
              />
            ))}
          </S.ContainerCardColaboradores>
        </>
      ) : (
        <SectionSinoNovosFormularios
          isActive={isActive}
          numeroNotificacao={numeroDeNotificacoes}
          onNotificacoesChange={setNumeroDeNotificacoes}
          handleShowContainer={handleShowContainerForm}
        />
      )}
    </>
  );
};
