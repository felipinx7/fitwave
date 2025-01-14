import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { Buttonproximo } from "../../../../components/ButtonProximo/ButtonProximo";
import { CardFlexoes } from "../../../../components/CardFlexoes/CardFlexoes";
import { useNavigate } from "react-router-dom";

interface ButtonProximoProps {
  disabled?: boolean;
}

export const SectionFlexoes: React.FC<ButtonProximoProps> = (props) => {
  const [etapa, setEtapa] = useState(4);
  const etapaTotais = 9;

  const progresso = (etapa / (etapaTotais - 1)) * 100;

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelected = (numeroDeFlexoes: string) => {
    setSelectedCard((prev) =>
      prev === numeroDeFlexoes ? null : numeroDeFlexoes
    );
  };

  const navigate = useNavigate()

  const LinkPageDiasDasemanaTreino = () =>{
    navigate("/treinoDiaSemana")
  }


  return (
    <S.SectionFlexoes>
      <BarraDeProgresso progresso={progresso} />
      <S.ContainerPrincipal>
        <S.TextosPrincipais>
          <S.TextoQuantasFlexoes>
            Quantas flexões você consegue fazer?
          </S.TextoQuantasFlexoes>
          <S.ParagrafoSempausas>Sem pausas</S.ParagrafoSempausas>
        </S.TextosPrincipais>
        <S.ContainerCards>
          <CardFlexoes
            NumeroFlexoes="3-5 flexões"
            nivel="Iniciante"
            isChecked={selectedCard === "3-5 flexões"}
            onToggle={() => handleCardSelected("3-5 flexões")}
          />
          <CardFlexoes
            NumeroFlexoes="5-10 flexões"
            nivel="Intermediário"
            isChecked={selectedCard === "5-10 flexões"}
            onToggle={() => handleCardSelected("5-10 flexões")}
          />
          <CardFlexoes
            NumeroFlexoes="pelo menos 10"
            nivel="Avançado"
            isChecked={selectedCard === "pelo menos 10"}
            onToggle={() => handleCardSelected("pelo menos 10")}
          />
        </S.ContainerCards>
        <S.containerButton onClick={LinkPageDiasDasemanaTreino}>
          <Buttonproximo    />
        </S.containerButton>
      </S.ContainerPrincipal>
    </S.SectionFlexoes>
  );
};
