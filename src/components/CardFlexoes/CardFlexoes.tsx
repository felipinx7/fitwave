import React from "react";
import * as S from "./styles";

interface CardFlexoesprops {
  NumeroFlexoes: string;
  nivel: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const CardFlexoes: React.FC<CardFlexoesprops> = (props) => {
  return (
    <S.Cardflexao>
      <S.Labelflexao ischecked={props.isChecked}>
        {props.nivel}
        <S.spanFlexoes ischecked={props.isChecked}>
          {props.NumeroFlexoes}
        </S.spanFlexoes>
        <S.InputFlexao
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onToggle}
          value={props.NumeroFlexoes}
        />
      </S.Labelflexao>
    </S.Cardflexao>
  );
};
