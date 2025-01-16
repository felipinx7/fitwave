import React, { useState } from "react";
import * as S from "./styles";
import { BsCamera } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { IoClose } from "react-icons/io5";



interface ShowCardInfoProps {
  showCardInfo: boolean;
  handleShowCardInfo: () => void;
  ExibirLapis: boolean;
  tema: "Perfil" | "CardFuncionario";
  exibirFecharContainer: boolean;
}

export const TelaInfoPerfil: React.FC<ShowCardInfoProps> = (props) => {
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const [telefone, setTelefone] = useState("");
  const [FecharContainerCard, setFecharContainerCard] = useState(false)

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPerfil(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    const inputElement = document.getElementById(
      "inputFotoPerfil"
    ) as HTMLInputElement;
    inputElement?.click();
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valor = event.target.value.replace(/\D/g, "");
    if (valor.length > 10) {
      valor = valor.slice(0, 11);
    }

    // Formata o numero para (XX) XXXX-XXXX
    const formatted = valor.replace(
      /^(\d{0,2})(\d{0,4})(\d{0,4})$/,
      (_, ddd, parte1, parte2) => {
        if (parte2) return `(${ddd}) ${parte1}-${parte2}`;
        if (parte1) return `(${ddd}) ${parte1}`;
        if (ddd) return `(${ddd}`;
        return "";
      }
    );
    setTelefone(formatted);
  };

  const [placeholderText, setplaceholderText] = useState("Ativo");
  const isActive = placeholderText.toLowerCase() === "ativo";

  const [isDisabled, setisDisabled] = useState(true);

  const HandlereadOnlyInput = () => {
    setisDisabled(!isDisabled);
  };

  const handleFechamentoContainerCard = () =>{
    props.handleShowCardInfo()
  }
  return (
    <S.ContainerInfo showCardInfo={props.showCardInfo} Tema={props.tema}>
      {props.ExibirLapis && (
        <S.ContainerLapis onClick={HandlereadOnlyInput}>
          <BiSolidPencil />
        </S.ContainerLapis>
      )}
      {props.exibirFecharContainer &&(
        <S.ContainerFecharContainer onClick={handleFechamentoContainerCard}>
          <IoClose/>
        </S.ContainerFecharContainer>
      )}
      <S.CardInfo Tema={props.tema} >
        <S.InformacoesPrincipais method="">
          <S.InfoFotoPerfil>
            <S.ContainerPhoto isDisable={isDisabled}>
              <S.InputFotoPerfil
                type="file"
                accept="image/*"
                id="inputFotoPerfil"
                onChange={handleFotoChange}
                disabled={isDisabled}
              />
              {fotoPerfil && <S.ImagemPrevia src={fotoPerfil} />}

              <S.ContainerIconePhoto onClick={handleIconClick}>
                <BsCamera />
              </S.ContainerIconePhoto>
            </S.ContainerPhoto>
            <S.textFotoPerfil>Foto Perfil</S.textFotoPerfil>
          </S.InfoFotoPerfil>
          <S.ContainerInformacaoLado>
            <S.ConatinerInformacoesUsuario>
              <S.InformacoesBasicas>
                <S.ContainerInputELabelBasic>
                  <S.labelContainerBasic>Nome</S.labelContainerBasic>
                  <S.InputsContainerBasic
                    type="text"
                    placeholder="Jane Cooper"
                    readOnly={isDisabled}
                    id="mudar-info"
                    isDisabled={isDisabled}
                    Tema={props.tema}
                  />
                </S.ContainerInputELabelBasic>
                <S.ContainerInputELabelBasic>
                  <S.labelContainerBasic>Sobrenome</S.labelContainerBasic>
                  <S.InputsContainerBasic
                    type="text"
                    placeholder="Brooklyn Simmons"
                    readOnly={isDisabled}
                    id="mudar-info"
                    isDisabled={isDisabled}
                    Tema={props.tema}
                  />
                </S.ContainerInputELabelBasic>
                <S.ContainerInputELabelBasic>
                  <S.labelContainerBasic>E-mail</S.labelContainerBasic>
                  <S.InputsContainerBasic
                    type="email"
                    placeholder="janecooper@exemplo.com"
                    readOnly={isDisabled}
                    id="mudar-info"
                    isDisabled={isDisabled}
                    Tema={props.tema}
                  />
                </S.ContainerInputELabelBasic>
                <S.ContainerInputELabelBasic>
                  <S.labelContainerBasic>Categoria</S.labelContainerBasic>
                  <S.InputCargo
                    type="text"
                    placeholder="Administrador"
                    readOnly
                    Tema={props.tema}
                  />
                </S.ContainerInputELabelBasic>
              </S.InformacoesBasicas>
              <S.InfoParteBaixo>
                <S.ContainerInputELabelBasic>
                  {" "}
                  <S.labelContainerBasic>Telefone</S.labelContainerBasic>
                  <S.InputTelefone
                    type="tel"
                    placeholder="(88) 1234-5678"
                    value={telefone}
                    onChange={handleTelefoneChange}
                    readOnly={isDisabled}
                    id="mudar-info"
                    isDisabled={isDisabled}
                    Tema={props.tema}
                  />
                </S.ContainerInputELabelBasic>
                <S.ContainerInputELabelBasic>
                  {" "}
                  <S.labelContainerBasic>N° Cadastro</S.labelContainerBasic>
                  <S.InputNumeroCadastro
                    type="number"
                    placeholder="8262-093"
                    readOnly
                    Tema={props.tema}
                  />
                </S.ContainerInputELabelBasic>
                <S.ContainerInputELabelBasic>
                  {" "}
                  <S.labelContainerBasic>Status</S.labelContainerBasic>
                  <S.InpustStatus
                    type="text"
                    onChange={(e) => setplaceholderText(e.target.value)}
                    placeholder={placeholderText}
                    isActive={isActive}
                    readOnly
                  />
                </S.ContainerInputELabelBasic>
              </S.InfoParteBaixo>
            </S.ConatinerInformacoesUsuario>
            <S.ButtonAtualizarInfo>Salvar</S.ButtonAtualizarInfo>
          </S.ContainerInformacaoLado>
        </S.InformacoesPrincipais>
      </S.CardInfo>
    </S.ContainerInfo>
  );
};
