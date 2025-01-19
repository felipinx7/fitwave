import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeNavegacao } from "../../../../components/BarraDeNavegação/BarraDeNavegacao";
import { TbUserHexagon } from "react-icons/tb";
import { ContainerInfoCards } from "../../../../components/ContainerIndoCard/ContainerIndoCard";
import { CardClientesColabores } from "../../../../components/CardClientesColabores/CardClientesColabores";
import ImagemExemplo from "../../../../assets/img/fotoPerfilMulher.svg";
import { SectionSinoNovosFormularios } from "../SectionSinoNovosFormularios/SectionSinoNovosFormularios";
import { HaederPageAdmin } from "../../../../components/HeaderPageAdmin/HeaderPageAdmin";

interface SectionColaboradoresProps {
  renderHeader?: boolean;
}

export const SectionColaboradores: React.FC<SectionColaboradoresProps> = ({ renderHeader = true }) => {
  const [ShowOpcaoTroca, setShowOpcaoTroca] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState<number | null>(null);

  const handleAdicionarClasse = () => {
    setIsActive((prev) => !prev);
  };

  const [Pessoas, setPessoas] = useState([
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

  const [filteredPessoas, setFilteredPessoas] = useState(Pessoas);

  const [showContainer, setshowContainer] = useState(true);

  const handleShowContainer = () => {
    setshowContainer(!showContainer);
  };

  const [numeroDeNotificacoes, setNumeroDeNotificacoes] = useState(0);

  const removerpessoa = (index: number) => {
    setPessoas((prevpessoa) => prevpessoa.filter((_, i) => i !== index));
  };

  const handleShowOpcaoTroca = () => {
    setShowOpcaoTroca(!ShowOpcaoTroca);
  };

  return (
    <>
      {/* Condicional para renderizar ou não o header */}
      {renderHeader && <HaederPageAdmin renderHeader={false} />} 

      <S.SectionColaborador>
        <BarraDeNavegacao
          TextTipoUser="Administradores"
          IconeTipoUser={TbUserHexagon}
          TextoBotao="Novo Colaborador"
          ExibirSeta={true}
          ShowOpcaoTroca={ShowOpcaoTroca}
          handleShowOpcaoTroca={handleShowOpcaoTroca}
          ExibirFormCliente={false}
          ExibirFormColaborador={true}
          SectionAtual="Colaborador"
          handleAdicionarClasse={handleAdicionarClasse}
          AdicionarCLasse={isActive}
          handleShowContainer={handleShowContainer}
          ValorNotificacao={numeroDeNotificacoes}
        />
        {showContainer ? (
          <ContainerInfoCards
            AdicionarClasse={isActive}
            handleAdicionarClasse={handleAdicionarClasse}
          />
        ) : null}
        {showContainer ? (
          <S.ContainerCardColaboaradores className={isActive ? "active" : ""}>
            {filteredPessoas.map((pessoa, index) => (
              <CardClientesColabores
                key={index}
                nome={pessoa.nome}
                sobrenome={pessoa.sobrenome}
                email={pessoa.email}
                dataEntrada={pessoa.dataDeEntrada}
                Status={pessoa.status ? "Ativo" : "Inativo"}
                fotoPerfil={pessoa.foto}
                removerpessoa={() => removerpessoa(index)}
                adicionarClasse={handleAdicionarClasse}
                adicionar={isActive}
              />
            ))}
          </S.ContainerCardColaboaradores>
        ) : (
          <SectionSinoNovosFormularios
            isActive={isActive}
            numeroNotificacao={numeroDeNotificacoes}
            onNotificacoesChange={setNumeroDeNotificacoes}
          />
        )}
      </S.SectionColaborador>
    </>
  );
};
