import React from "react";
import * as S from "./styles"
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoFitwave from "../../../../assets/img/Logo-Monocromatica-fitwave.png"

export const Footer: React.FC = () =>{
    return(
        <S.Footer id="Horario">
            <S.WraperMain>
        <S.WraperRedesSociais>
          <S.ImgLogo src={LogoFitwave} alt="LOGO" />
          <S.DescriptionAcademy>
            A Fitwave é a academia perfeita para quem busca resultados rápidos e
            eficientes. Com uma estrutura moderna e completa, oferecemos os
            melhores aparelhos e treinos personalizados para atender às suas
            necessidades. Seja para emagrecimento, ganho de massa muscular ou
            melhoria da saúde, temos o treino ideal para você.
          </S.DescriptionAcademy>
          <S.WraperButtonsRedesSociais>
            <S.ButtonRedesSociais>
              <FaInstagram />
            </S.ButtonRedesSociais>
            <S.ButtonRedesSociais>
              <FaWhatsapp />
            </S.ButtonRedesSociais>
            <S.ButtonRedesSociais>
              <FaLocationDot />
            </S.ButtonRedesSociais>
          </S.WraperButtonsRedesSociais>
        </S.WraperRedesSociais>
        <S.WraperHorario>
            <S.TextMainHorario>HORÁRIOS</S.TextMainHorario>
            <S.ParagarfosHorarios>ABERTO NOS DIAS:</S.ParagarfosHorarios>
            <S.ParagarfosHorarios>SEGUNDA Á SEXTA DAS 6:00 ÁS 23:00</S.ParagarfosHorarios>
            <S.ParagarfosHorarios>SÁBADOS E DOMIGOS DAS 6:00 ÁS 21:00</S.ParagarfosHorarios>
        </S.WraperHorario>
        <S.WraperLocalizacao>
            <S.TextMainLocalizacao>LOCALIZAÇÃO</S.TextMainLocalizacao>
            <S.ParagarfosLocalizacao><FaLocationDot/>FIGMA IPSUM COMPINENT <br /> VARIANT MAIN</S.ParagarfosLocalizacao>
        </S.WraperLocalizacao>
      </S.WraperMain>
        </S.Footer>
    )
}