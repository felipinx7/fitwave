import React, { useState } from "react";
import * as S from "./styles";
import { PessoasParaCompartilhar } from "../../constants/constasts";

interface CardEnvioTreinoProps {
  searchTerm: string;
}

export const CardEnvioTreino: React.FC<CardEnvioTreinoProps> = ({ searchTerm }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleActive = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
    console.log(`O card com ID ${id} foi clicado.`);
  };

  const filteredCards = PessoasParaCompartilhar.filter((card) =>
    card.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredCards.map((card) => (
        <S.Card key={card.id} Active={activeCard === card.id}>
          <S.Label Active={activeCard === card.id} onClick={() => handleActive(card.id)}>
            <S.InputSelected type="checkbox" value={card.id} />
            {card.imagem && <S.FotoPerfil src={card.imagem} />}
            <S.ContainerPerfil>
              <S.textInfo>
                {card.nome} {card.sobrenome}
              </S.textInfo>
              <S.textInfo>{card.email}</S.textInfo>
            </S.ContainerPerfil>
          </S.Label>
        </S.Card>
      ))}
    </>
  );
};
