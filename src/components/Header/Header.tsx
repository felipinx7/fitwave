import React from "react";
import * as S from "./styles";
import Logo from "../../assets/img/Logo-Monocromatica-fitwave.png";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { FaWindowMinimize } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const Links = [
    {
      Nome: "Plano",
      id: "Plano",
    },
    {
      Nome: "Preço",
      id: "Preco",
    },
    {
      Nome: "Horário",
      id: "Horario",
    },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const HandleLinkWhats = () => {
    window.open(
      "https://wa.me/5599999999999?text=Oii%20vim%20do%20site,%20e%20gostaria%20de%20treinar%20na%20sua%20academia.",
      "_blank"
    );
  };

  const HandleLinkLoginPage = useNavigate()

  const HandleLinkLogin = () =>{
  HandleLinkLoginPage("/login")
  }




  return (
    <>
      <S.Header>
        <S.ImagemLogo src={Logo} />
        <S.NavBar>
          {Links.map((link, index) => (
            <S.LinksDeNavegação
              key={index}
              onClick={() => scrollToSection(link.id)}
            >
              {link.Nome}
            </S.LinksDeNavegação>
          ))}
        </S.NavBar>
        <S.WraperButtons>
          <S.ButtonAcessar onClick={HandleLinkLogin}>ACESSAR</S.ButtonAcessar>
          <S.ButtonEntrarContato  onClick={HandleLinkWhats}>ENTRAR EM CONTATO</S.ButtonEntrarContato>
        </S.WraperButtons>
      </S.Header>
      <HeaderMobile />
    </>
  );
};
