import React from "react";
import * as S from "./styles";
import ImagemFundoListras from "../../../../assets/img/Textura-linhas.png";
import Primeiraimagame from "../../../../assets/img/primeira-imagem.png";
import SegundaImagem from "../../../../assets/img/segunda-imagem.png";
import TerceiraImagem from "../../../../assets/img/terceira-imagem.png";
import QuartaImagem from "../../../../assets/img/quarta-imagem.png";
import QuintaImagem from "../../../../assets/img/quinta-imagem.png";
import { SectionPreco } from "../SectionPreco/SectionPreco";

export const SectionInstalacao: React.FC = () => {
  return (
    <>
      <S.SectionInstalacao>
        <S.ContainerInfoPrincipais>
          <S.TextoMain data-text="INSTALAÇÕES">
            CONHEÇA AS NOSSAS <br />
            <S.SpanInstalacao>INSTALAÇÕES</S.SpanInstalacao>
          </S.TextoMain>
          <S.ContainerImagem>
            <S.ImagemEquipamentos
              src={Primeiraimagame}
              className="reveal-left"
            />
            <S.ImagemEquipamentos src={SegundaImagem} className="reveal-left" />
            <S.ImagemEquipamentos
              src={TerceiraImagem}
              className="reveal-left"
            />
            <S.ImagemEquipamentos src={QuartaImagem} className="reveal-left" />
            <S.ImagemEquipamentos src={QuintaImagem} className="reveal-left" />
          </S.ContainerImagem>
        </S.ContainerInfoPrincipais>
      </S.SectionInstalacao>
      <SectionPreco />
    </>
  );
};
