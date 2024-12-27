import React, { useState } from "react";
import * as S from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

export const HeaderMobile: React.FC = () => {
  const Links = [
    {
      nome: "Plano",
    },
    {
      nome: "Preço",
    },
    {
      nome: "Horário",
    },
  ];

  const [ShowNav, setShowNav] = useState(false);

  return (
    <S.HeaderMobile>
      <S.WraperIconeNavegacao onClick={() => setShowNav(!ShowNav)}>
        {ShowNav ? <FaTimes /> : <FaBars />}
      </S.WraperIconeNavegacao>
      <S.WraperLinks Shownav={ShowNav}>
        {Links.map((link, index) => (
          <S.LinksDeNavegação key={index}>{link.nome}</S.LinksDeNavegação>
        ))}
      </S.WraperLinks>
    </S.HeaderMobile>
  );
};
