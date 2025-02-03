import React, { useState } from "react";
import * as S from "./styles";
import * as Imagens from "../../assets/index";
import { LinkSideBarsPersonal } from "../../constants/constasts";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { SectionHome } from "../../pages/PagePersonal/Sections/SectionHome/SectionHome";
import { SectionTreino } from "../../pages/PagePersonal/Sections/SectionTreino/SectionTreino";
import { SectionAluno } from "../../pages/PagePersonal/Sections/SectionAluno/SectionAlunos";
import { SectionRelatorio } from "../../pages/PagePersonal/Sections/SectionRelatorios/SectionRelatorio";
import { SectionPerfil } from "../../pages/PagePersonal/Sections/SectionPerfil/SectionPerfil";
import { SectionStatus } from "../../pages/PagePersonal/Sections/SectionStatus/SectionStatus";

export const SideBar: React.FC = () => {
  // PARTE DOS ESTADOS
  const [addActive, setaddActive] = useState<number>(
    LinkSideBarsPersonal[0].param
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
        return <SectionAluno />;
      case 4:
        return <SectionRelatorio />;
      case 5:
        return <SectionPerfil />;
      case 6:
        return <SectionStatus />;
    }
  };

  return (
    <S.SectionGeral>
      <S.SideBar>
        <S.LogoFitwave src={Imagens.LogoFitwaveBraca} />
        <S.NavBar>
          {LinkSideBarsPersonal.map((link, index) => (
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
        {LinkSideBarsPersonal.map((link, index) => (
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
