import React from "react";
import * as S from "./styles";

export const ButtonTreinar: React.FC = () => {
  const handleCadastroClick = () => {
    const section = document.getElementById("cadastro");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <S.ButtonTreinar onClick={handleCadastroClick}>
        QUERO TREINAR AGORA
      </S.ButtonTreinar>
    </>
  );
};
