import React, { useState } from "react";
import * as S from "./styles";
import LogoFitwave from "../../assets/img/Logo-FitWave.svg";
import { IoFlash, IoPeople } from "react-icons/io5";
import FotoMulher from "../../assets/img/fotoPerfilMulher.svg";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { TelaAlertaLogout } from "../TelaLogout/TelaLogout";
import { TelaInfoPerfil } from "../TelaInfoPerfil/TelaInfoPerfil";
import { FaBars, FaTimes } from "react-icons/fa";

export const HaederPageAdmin: React.FC = () => {
  const [isActive, setisActive] = useState<number | null>(null);
  const [fechar, setFechar] = useState(false);
  const HandleFecharALerta = () => {
    setFechar(!fechar);
  };
  const [toggleIcone, settoggleIcone] = useState(false);
  const [ShowCardInfo, setShowCardInfo] = useState(false);

  const handleToggleIconeHeader = () => {
    settoggleIcone(!toggleIcone);
  };
  const handleShowCardInfo = () => {
    setShowCardInfo(!ShowCardInfo);
  };

  const HandleClickButton = (index: number) => {
    setisActive(isActive == index ? null : index);
  };

  const navigate = useNavigate();
  const LinkLogotPage = (param: string) => {
    if (param == "logout") {
      navigate("/login");
    } else {
    }
  };

  return (
    <S.HeaderPageAdministracao>
      <TelaAlertaLogout
        tela="Administração"
        caminho={LinkLogotPage}
        handleFechar={HandleFecharALerta}
        fechar={fechar}
      />
      <S.ContainerHeaderLogo>
        <S.LogoHeader src={LogoFitwave} />
      </S.ContainerHeaderLogo>
      <S.HeaderInfoPrincipais>
        <S.InfoPrincipais>
          <S.ContainerContaHeader onClick={handleShowCardInfo}>
            <S.FotoPerfilContainer src={FotoMulher} />
            <S.TextBoasVindasHeader>
              Olá, <S.SpanTextAdmin>Administrador!</S.SpanTextAdmin>
            </S.TextBoasVindasHeader>
          </S.ContainerContaHeader>
          <S.ContainerButtons onClick={handleToggleIconeHeader}>
            {toggleIcone ? <FaTimes /> : <FaBars />}
            <S.ContainerButtonsMobile ShowContainerMobile={toggleIcone}>
              <S.ButtonsHeaderMobile
                onClick={() => HandleClickButton(0)}
                isActive={isActive == 0}
              >
                Colaboradores
                <IoFlash />
              </S.ButtonsHeaderMobile>
              <S.ButtonsHeaderMobile
                onClick={() => HandleClickButton(1)}
                isActive={isActive == 1}
              >
                Clientes
                <IoPeople />
              </S.ButtonsHeaderMobile>
              <S.buttonSairMobile onClick={HandleFecharALerta}>
                <TbLogout />
                Sair
              </S.buttonSairMobile>
            </S.ContainerButtonsMobile>
          </S.ContainerButtons>
          <S.ButtonsHeader
            onClick={() => HandleClickButton(0)}
            isActive={isActive == 0}
          >
            <IoFlash />
            Colaboradores
          </S.ButtonsHeader>
          <S.ButtonsHeader
            onClick={() => HandleClickButton(1)}
            isActive={isActive == 1}
          >
            <IoPeople />
            Clientes
          </S.ButtonsHeader>
          <S.ButtonSair onClick={HandleFecharALerta}>
            <TbLogout />
            Sair
          </S.ButtonSair>
        </S.InfoPrincipais>
      </S.HeaderInfoPrincipais>
      <TelaInfoPerfil
        showCardInfo={ShowCardInfo}
        handleShowCardInfo={handleShowCardInfo}
        ExibirLapis={true}
        tema="Perfil"
        exibirFecharContainer={false}
      />
    </S.HeaderPageAdministracao>
  );
};
