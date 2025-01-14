import React from "react";
import * as S from "./styles";

interface CardNumeroProps {
  isChecked: boolean;
  numero: string;
  onChange: () => void;
}

export const CardNumero: React.FC<CardNumeroProps> = (props) => {
  return (
    <S.CardNumero>
      <S.labelNumero isChecked={props.isChecked}>
        {props.numero}
        <S.InputNumero
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
      </S.labelNumero>
    </S.CardNumero>
  );
};
