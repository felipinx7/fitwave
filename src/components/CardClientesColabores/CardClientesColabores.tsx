import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { LuPencil } from "react-icons/lu";
import { FaTrashCan } from "react-icons/fa6";
import { TelaInfoPerfil } from "../TelaInfoPerfil/TelaInfoPerfil";
import { FaBars, FaTimes } from "react-icons/fa";

interface CardClienteseColaboradoreProps {
  nome: string;
  sobrenome: string;
  email: string;
  dataEntrada: string;
  Status: string;
  fotoPerfil: string;
  removerpessoa: () => void;
  adicionarClasse: () => void;
  adicionar: boolean;
}

export const CardClientesColabores: React.FC<CardClienteseColaboradoreProps> = (
  props
) => {
  const [showCardInfo, setshowCardInfo] = useState(false);
  const [ToggleIcone, setToggleIcone] = useState(false);
  const [Ativo, setAtivo] = useState<string>(props.Status || "Ativo");
  const [clicou, setclicou]= useState(false)


  const handleClick = () =>{
    setclicou(!clicou)
  }
  

  useEffect(() => {
    setAtivo(props.Status);
  }, [props.Status]);

  const handleCOrCard = () => {
    setAtivo((Ativoprev) => (Ativoprev === "Ativo" ? "Inativo" : "Ativo"));
  };

  const toggleIcone = () => {
    setToggleIcone(!ToggleIcone);
  };

  const handleShowCardInfo = () => {
    setshowCardInfo(!showCardInfo);
  };

  return (
    <>
      <S.Card bgColor={Ativo === "Ativo"} Clicou={clicou} onClick={handleClick}>
        <S.ContainerInfoUser
          className={props.adicionar ? "active" : ""}
          onClick={handleShowCardInfo}
        >
          <S.ImagemUser src={props.fotoPerfil} />
          <S.TextInfoUser>
            <S.TextNome>
              {props.nome} {props.sobrenome}
            </S.TextNome>
            <S.TextEmail>{props.email}</S.TextEmail>
          </S.TextInfoUser>
        </S.ContainerInfoUser>
        <S.ContainerData>
          <S.TextDataDeEntradaUser>{props.dataEntrada}</S.TextDataDeEntradaUser>
        </S.ContainerData>
        <S.ContainerStatusEeditar>
          <S.ContainerStatus bgColor={Ativo === "Ativo"}>
            {Ativo}
          </S.ContainerStatus>
          <S.ContainerEditar ToggleIcone={ToggleIcone}>
            <S.ContainerLapis onClick={handleShowCardInfo}>
              <LuPencil />
            </S.ContainerLapis>
            <S.ContainerLixo onClick={props.removerpessoa}>
              <FaTrashCan />
            </S.ContainerLixo>
          </S.ContainerEditar>
        </S.ContainerStatusEeditar>
        <S.ContainerEditarMobile onClick={toggleIcone}>
          {ToggleIcone ? <FaTimes /> : <FaBars />}
        </S.ContainerEditarMobile>
      </S.Card>
      <TelaInfoPerfil
        ExibirLapis={true}
        tema="CardFuncionario"
        showCardInfo={showCardInfo}
        handleShowCardInfo={handleShowCardInfo}
        exibirFecharContainer={true}
      />
    </>
  );
};
