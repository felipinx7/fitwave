import React from "react";
import * as S from "./styles";

interface CardFocoMuscularprops {
  parteCorpo: string;
  selectedValues: string[];
  onFocusChange: (focusmuscular: string) => void;
  formData?: {
    sexo: string;
    focomuscular: string;
    objetivo: string;
  };
}

export const CardFocoMuscular: React.FC<CardFocoMuscularprops> = ({
  parteCorpo,
  selectedValues,
  onFocusChange,
  formData,
}) => {
  const isChecked = selectedValues.includes(parteCorpo);

  return (
    <S.Card>
      <S.labelCard isChecked={isChecked}>
        {parteCorpo}
        <S.InputCard
          type="checkbox"
          checked={isChecked}
          value={parteCorpo}
          onChange={() => onFocusChange(parteCorpo)}
        />
      </S.labelCard>
    </S.Card>
  );
};
