import React, { useState } from "react";
import * as S from "./styles";
import * as Imagens from "../../assets/index";
import { LinksSideBarsNavegacao } from "../../constants/constasts";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { SectionHome } from "../../pages/PageCliente/Sections/SectionHome/SectionHome";
import { SectionTreino } from "../../pages/PageCliente/Sections/SectionTreino/SectionTreino";
import { SectionPerfil } from "../../pages/PageCliente/Sections/SectionPerfil/SectionPerfil";
import { SectioNotificacao } from "../../pages/PageCliente/Sections/SectionNotificacao/SectionNotificacao";

export const SideAluno: React.FC = () => {
  // PARTE DOS ESTADOS
  const [addActive, setaddActive] = useState<number>(
    LinksSideBarsNavegacao[0].param
  );
  const navigate = useNavigate();

  // FUNÇÕES MANIPULADORAS
  const linkLogin = () => {
    navigate("/login");
  };
  const handleActive = (param: number) => {
    setaddActive(param);
  };
  const renderizarSections = () => {
    switch (addActive) {
      case 1:
        return <SectionHome />;
      case 2:
        return <SectionTreino />;
      case 3:
        return <SectioNotificacao />;
      case 4:
          return <SectionPerfil />;
    }
  };

  return (
    <S.SectionGeral>
      <S.SideBar>
        <S.LogoFitwave src={Imagens.LogoFitwaveBraca} />
        <S.NavBar>
          {LinksSideBarsNavegacao.map((link, index) => (
            <S.ButtonsLinks
              key={index}
              onClick={() => handleActive(link.param)}
              isCheked={addActive === link.param}
            >
              <S.linsk isCheked={addActive === link.param}>
                {link.icone && <link.icone />}
                {link.nome}
              </S.linsk>
            </S.ButtonsLinks>
          ))}
        </S.NavBar>
        <S.ButtonLogout onClick={linkLogin}>
          <FiLogOut />
          Logout
        </S.ButtonLogout>
      </S.SideBar>
      <S.NavBarMobile>
        {LinksSideBarsNavegacao.map((link, index) => (
          <S.ButtonsLinks
            key={index}
            onClick={() => handleActive(link.param)}
            isCheked={addActive === link.param}
          >
            <S.linsk isCheked={addActive === link.param}>
              {link.icone && <link.icone />}
            </S.linsk>
          </S.ButtonsLinks>
        ))}
        <S.ButtonLogout onClick={linkLogin}>
          <FiLogOut />
        </S.ButtonLogout>
      </S.NavBarMobile>
      {renderizarSections()}
    </S.SectionGeral>
  );
};
