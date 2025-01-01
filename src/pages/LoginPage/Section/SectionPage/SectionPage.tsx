import React, { useState } from "react";
import * as S from "./styles";
import ImagemMulher from "../../../../assets/img/imgem-mulher-login.svg";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const SectionPage: React.FC = () => {
  const [Showpassword, setShowpassword] = useState(false);

  const handlePassword = () => {
    setShowpassword(!Showpassword);
  };

  return (
    <S.SectionPage>
      <S.ContainerDoLogin>
        <S.ContainerTextosPrincipais>
          <S.TextBoasVindas>
            Boas Vindas <br />a <S.SpanBoasVindas>FITWAVE.</S.SpanBoasVindas>
          </S.TextBoasVindas>
          <S.ParagrafoInformarDados>
            Adicione seus dados a baixo:
          </S.ParagrafoInformarDados>
        </S.ContainerTextosPrincipais>
        <S.FormularioLogin>
          <S.LabelLogin>E-mail</S.LabelLogin>
          <S.containerInputs>
            <S.InputLogin
              type="email"
              placeholder="Informe seu e-mail"
              required
            />
            <MdAlternateEmail />
          </S.containerInputs>
          <S.LabelLogin>Senha</S.LabelLogin>
          <S.containerInputs>
            <S.InputLogin
              type={Showpassword ? "text" : "password"}
              placeholder="Informe seu senha"
              required
            />
            <S.Containerolho>
                 {Showpassword ? (
              <IoEyeOff onClick={handlePassword} className="eye-icon" />
            ) : (
              <IoEye onClick={handlePassword} className="eye-icon" />
            )}
            </S.Containerolho>
           
            <FaLock />
          </S.containerInputs>
          <S.ContainerInformacaoParteBaixo>
            <S.ContainerButton>
              <S.ButtonAcessar type="submit">ACESSAR</S.ButtonAcessar>
            </S.ContainerButton>
            <S.TextNaotemconta>
              Aida não tem uma conta?
              <S.SpanNaoTemConta>Etrar em contato.</S.SpanNaoTemConta>
            </S.TextNaotemconta>
          </S.ContainerInformacaoParteBaixo>
        </S.FormularioLogin>
      </S.ContainerDoLogin>
      <S.ContainerMulher>
        <S.ImagemMulher src={ImagemMulher} />
      </S.ContainerMulher>
    </S.SectionPage>
  );
};
