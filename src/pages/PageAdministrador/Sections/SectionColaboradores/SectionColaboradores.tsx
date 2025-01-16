import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeNavegacao } from "../../../../components/BarraDeNavegação/BarraDeNavegacao";
import { TbUserHexagon } from "react-icons/tb";
import { ContainerInfoCards } from "../../../../components/ContainerIndoCard/ContainerIndoCard";
import { CardClientesColabores } from "../../../../components/CardClientesColabores/CardClientesColabores";
import ImagemExemplo from "../../assets/img/fotoPerfilMulher.svg";



export const SectionColaboradores: React.FC = () => {
  const [ShowOpcaoTroca, setShowOpcaoTroca] = useState(false);


  const Pessoas = [
    {
      nome: "Juan",
      sobrenome: "Carvalho",
      email: "juan.carvalho@example.com",
      status: "Ativo",
      dataDeEntrada: "09/09/2009",
      foto: "ImagemExemplo"
    },
    {
      nome: "Ana",
      sobrenome: "Silva",
      email: "ana.silva@example.com",
      status: "Inativo",
      dataDeEntrada: "15/03/2015",
      foto: "ImagemExemplo"

    },
    {
      nome: "Carlos",
      sobrenome: "Oliveira",
      email: "carlos.oliveira@example.com",
      status: "Ativo",
      dataDeEntrada: "22/07/2020",
      foto: "ImagemExemplo"

    },
    {
      nome: "Mariana",
      sobrenome: "Souza",
      email: "mariana.souza@example.com",
      status: "Ativo",
      dataDeEntrada: "01/01/2018",
      foto: "ImagemExemplo"

    },
    {
      nome: "Fernanda",
      sobrenome: "Lima",
      email: "fernanda.lima@example.com",
      status: "Inativo",
      dataDeEntrada: "12/10/2016",
      foto: "ImagemExemplo"

    },
    {
      nome: "Juan",
      sobrenome: "Carvalho",
      email: "juan.carvalho@example.com",
      status: "Ativo",
      dataDeEntrada: "09/09/2009",
      foto: "ImagemExemplo"
    },
    {
      nome: "Ana",
      sobrenome: "Silva",
      email: "ana.silva@example.com",
      status: "Inativo",
      dataDeEntrada: "15/03/2015",
      foto: "ImagemExemplo"

    },
    {
      nome: "Carlos",
      sobrenome: "Oliveira",
      email: "carlos.oliveira@example.com",
      status: "Ativo",
      dataDeEntrada: "22/07/2020",
      foto: "ImagemExemplo"

    },
    {
      nome: "Mariana",
      sobrenome: "Souza",
      email: "mariana.souza@example.com",
      status: "Ativo",
      dataDeEntrada: "01/01/2018",
      foto: "ImagemExemplo"

    },
    {
      nome: "Fernanda",
      sobrenome: "Lima",
      email: "fernanda.lima@example.com",
      status: "Inativo",
      dataDeEntrada: "12/10/2016",
      foto: "ImagemExemplo"

    },
  ];
  

  const handleShowOpcaoTroca = () => {
    setShowOpcaoTroca(!ShowOpcaoTroca);
  };
  return (
    <S.SectionColaborador>
      <BarraDeNavegacao
        TextTipoUser="Administradores"
        IconeTipoUser={TbUserHexagon}
        TextoBotao="Novo Colaborador"
        ExibirSeta={true}
        ShowOpcaoTroca={ShowOpcaoTroca}
        handleShowOpcaoTroca={handleShowOpcaoTroca}
        ExibirFormCliente={true}
        ExibirFormColaborador={false}
        SectionAtual="Colaborador"
      />
      <ContainerInfoCards/>
      <S.ContainerCardColaboaradores>
        {Pessoas.map((pessoa, index) => (
          <CardClientesColabores key={index} nome={pessoa.nome} sobrenome={pessoa.sobrenome} email={pessoa.email} dataEntrada={pessoa.dataDeEntrada} Status={pessoa.status} fotoPerfil={pessoa.foto}/>
        ))}
      </S.ContainerCardColaboaradores>
    </S.SectionColaborador>
  );
};
