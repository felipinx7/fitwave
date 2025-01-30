import React, { useState } from "react";
import * as S from "./styles";
import { CardEnvioTreino } from "../CardEnvioTreino/CardEnvioTreino";
import { IoClose } from "react-icons/io5";

interface CardEnviarTreinoProps {
  showCardEnviar: boolean;
  handleShowCardEnviar: () => void;
}

export const CardEnviarTreino: React.FC<CardEnviarTreinoProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <S.containerCardEnviar showCard={props.showCardEnviar}>
      <S.Card>
        <S.ContainerFechar onClick={props.handleShowCardEnviar}>
        <IoClose/>
        </S.ContainerFechar>
        <S.textEnviarAluno>ENVIAR PARA O ALUNO</S.textEnviarAluno>
        
        {/* Input de pesquisa */}
        <S.InputEnviarTreino
          placeholder="Pesquise aqui"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <S.FomularioEnvio method="">
          <S.ContainerCards>
            <CardEnvioTreino searchTerm={searchTerm} />
          </S.ContainerCards>
          
          <S.ContainerEnvio>
            <S.TextDicas>Dica:</S.TextDicas>
            <S.InputDica type="text" placeholder="Escreva sua dica." />
            <S.buttonEnviar type="submit">Enviar</S.buttonEnviar>
          </S.ContainerEnvio>
        </S.FomularioEnvio>
      </S.Card>
    </S.containerCardEnviar>
  );
};
