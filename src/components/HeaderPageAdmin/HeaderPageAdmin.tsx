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
import { SectionColaboradores } from "../../pages/PageAdministrador/Sections/SectionColaboradores/SectionColaboradores";
import { SectionCliente } from "../../pages/PageAdministrador/Sections/SectionClientes/SectionClientes";

interface HeaderPageAdminprops {
  showcontainer?: boolean;
  MostrarSectionColaboradorECliente?: (section: number) => void;
  renderHeader?: boolean;
}

export const HaederPageAdmin: React.FC<HeaderPageAdminprops> = (props) => {
  const { renderHeader = true } = props;

  const [isActive, setIsActive] = useState<number | null>(null);
  const [fechar, setFechar] = useState(false);
  const [toggleIcone, setToggleIcone] = useState(false);
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const navigate = useNavigate();

  if (!renderHeader) {
    return null;
  }

  const handleFecharALerta = () => {
    setFechar(!fechar);
  };

  const handleToggleIconeHeader = () => {
    setToggleIcone(!toggleIcone);
  };

  const handleShowCardInfo = () => {
    setShowCardInfo(!showCardInfo);
  };

  const HandleClickButton = (index: number) => {
    setIsActive(isActive === index ? index : index);
    setSelectedSection(index);

    if (props.MostrarSectionColaboradorECliente) {
      props.MostrarSectionColaboradorECliente(index);
    }

    if (index === 0) {
      navigate("/PageAdmin");
    } else if (index === 1) {
      navigate("/Cliente");
    }
  };

  const LinkLogotPage = (param: string) => {
    if (param === "logout") {
      navigate("/login");
    }
  };

  return (
    <S.HeaderPageAdministracao>
      <TelaAlertaLogout
        tela="Administração"
        caminho={LinkLogotPage}
        handleFechar={handleFecharALerta}
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
                isActive={isActive === 0}
              >
                Colaboradores
                <IoFlash />
              </S.ButtonsHeaderMobile>
              <S.ButtonsHeaderMobile
                onClick={() => HandleClickButton(1)}
                isActive={isActive === 1}
              >
                Clientes
                <IoPeople />
              </S.ButtonsHeaderMobile>
              <S.buttonSairMobile onClick={handleFecharALerta}>
                <TbLogout />
                Sair
              </S.buttonSairMobile>
            </S.ContainerButtonsMobile>
          </S.ContainerButtons>
          <S.ButtonsHeader
            onClick={() => HandleClickButton(0)}
            isActive={isActive === 0}
          >
            <IoFlash />
            Colaboradores
          </S.ButtonsHeader>
          <S.ButtonsHeader
            onClick={() => HandleClickButton(1)}
            isActive={isActive === 1}
          >
            <IoPeople />
            Clientes
          </S.ButtonsHeader>
          <S.ButtonSair onClick={handleFecharALerta}>
            <TbLogout />
            Sair
          </S.ButtonSair>
        </S.InfoPrincipais>
      </S.HeaderInfoPrincipais>


      <TelaInfoPerfil
        showCardInfo={showCardInfo}
        handleShowCardInfo={handleShowCardInfo}
        ExibirLapis={true}
        tema="Perfil"
        exibirFecharContainer={false}
      />
    </S.HeaderPageAdministracao>
  );
};
