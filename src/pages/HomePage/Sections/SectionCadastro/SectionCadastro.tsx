import ImagemFundo from "../../../../assets/img/Fundo-section-cadastro.png";
import FundoVerde from "../../../../assets/img/FundoCardCadastro.png";
import ImagemMulhereHomem from "../../../../assets/img/home-e-mulher.svg";
import React, { useState } from "react";

import * as S from "./styles";
import { ButtonTreinar } from "../../../../components/ButtonTreinar/ButtonTreinar";
import { useNavigate } from "react-router-dom";

export const SectionCadastro: React.FC = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const linkCadastroCorpo = () => {
    navigate("/CadastroCorpo");
    console.log("Redirecionando....")
  };
  const handlePhoneChange = (e: any) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length <= 2) {
      value = value.replace(/(\d{2})(\d{0,0})/, "($1)$2");
    } else if (value.length <= 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,0})/, "($1)$2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3");
    }

    setPhone(value);
  };
  return (
    <S.SectionCadastro id="cadastro">
      <S.ContainerInfoPrincipais>
        <S.ContainerDaImagem>
          <S.ContainerImagem>
            <S.FundoVerdeImagem src={FundoVerde} />
            <S.ImagemMulherEHomem src={ImagemMulhereHomem} />
            <S.TextFitwave>WAVE</S.TextFitwave>
          </S.ContainerImagem>
        </S.ContainerDaImagem>

        <S.ContainerDoForm>
          <S.ContainerTextosForms>
            <S.TextMain className="reveal-right">
              PRONTO PARA
              <S.spanLiberttar className="reveal-right">
                {" "}
                LIBERTAR <br />
                SEU POTENCIAL?
              </S.spanLiberttar>
            </S.TextMain>
            <S.paragrafomotivador className="reveal-right">
              Fitwave é a academia perfeita para seu treino. Inscreva-se agora e
              tenha acesso a ótimos resultados, com estrutura moderna e
              profissionais altamente qualificados! A melhor escolha para
              alcançar seus objetivos, superar limites e transformar sua saúde e
              bem-estar.
            </S.paragrafomotivador>
          </S.ContainerTextosForms>
          <S.Formulario>
            <S.LabelCadastro>Nome</S.LabelCadastro>
            <S.InputCadastro type="text" placeholder="Nome completo" required />
            <S.LabelCadastro>E-mail</S.LabelCadastro>
            <S.InputCadastro
              type="email"
              placeholder="Informe seu e-mail"
              required
            />
            <S.LabelCadastro>Contato Telofónico</S.LabelCadastro>
            <S.InputCadastro
              type="tel"
              placeholder="Informe seu contato."
              value={phone}
              required
              onChange={handlePhoneChange}
            />
            <S.ContanierButton onClick={linkCadastroCorpo}>
              <ButtonTreinar />
            </S.ContanierButton>
          </S.Formulario>
        </S.ContainerDoForm>
      </S.ContainerInfoPrincipais>
    </S.SectionCadastro>
  );
};
