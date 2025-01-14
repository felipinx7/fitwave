import React, { useState } from "react";
import * as S from "./styles";
import { IconType } from "react-icons";

interface CardObjetivosProps {
    tituloCard: string;
    iconeCard: IconType;
    selectedId: string;
    onSelect: (id: string) => void;
  }
  
  export const CardObjetivos: React.FC<CardObjetivosProps> = (props) => {
    const handleRadioChange = () => {
      props.onSelect(props.tituloCard);
    };
  
    return (
      <S.CardObjetivos>
        <S.TtileObetivo isChecked={props.selectedId === props.tituloCard}>
          {props.tituloCard}
          <S.IconeObjetivo>
            <props.iconeCard />
          </S.IconeObjetivo>
  
          <S.InputObjetivo
            type="radio"
            checked={props.selectedId === props.tituloCard}
            value={props.tituloCard}
            name="objetivo"
            onChange={handleRadioChange}
          />
        </S.TtileObetivo>
      </S.CardObjetivos>
    );
  };
  