import React from "react";
import * as S from "./styles";
import Logo from "../../assets/img/Logo-Monocromatica-fitwave.png";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";

export const Header: React.FC = () => {
  const Links = [
    {
      Nome: "Plano",
    },
    {
      Nome: "Preço",
    },
    {
      Nome: "Horário",
    },
  ];

  return (
    <>
      <S.Header>
        <S.ImagemLogo src={Logo} />
        <S.NavBar>
          {Links.map((link, index) => (
            <S.LinksDeNavegação key={index}>{link.Nome}</S.LinksDeNavegação>
          ))}
        </S.NavBar>
        <S.WraperButtons>
          <S.ButtonAcessar>ACESSAR</S.ButtonAcessar>
          <S.ButtonEntrarContato>ENTRAR EM CONTATO</S.ButtonEntrarContato>
        </S.WraperButtons>
      </S.Header>
      <HeaderMobile />
    </>
  );
};
