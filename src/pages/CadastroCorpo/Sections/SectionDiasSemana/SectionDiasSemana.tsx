import React, { useState } from "react";
import * as S from "./styles";
import { CardNumero } from "../../../../components/CardNumero/CardNumero";
import { Buttonproximo } from "../../../../components/ButtonProximo/ButtonProximo";
import { useNavigate } from "react-router-dom";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";

export const SectionDiasSemana: React.FC = () => {
    const navigate = useNavigate()

    const LinkPesoCorpo = () =>{
        navigate("/pesoAltura")
    }

    const [selectedNumero, setselectedNumero] = useState<string | null>(null)

    const handleselectNumero = (numero: string) =>{
        setselectedNumero((prev) => (prev == numero ? null : numero ))
    }

     const [etapa, setEtapa] = useState(5);
      const etapaTotais = 9;
    
      const progresso = (etapa / (etapaTotais - 1)) * 100;

  return (
    <S.SectionDiasSemana>
        <BarraDeProgresso progresso={progresso}/>
      <S.ContainerInfoPrincipais>
        <S.ContainerTextosPrincipais>
          <S.TextosMetaDiarias>Defina sua meta semanal</S.TextosMetaDiarias>
          <S.ParagrafoRecomendacao>
            Recomendamos treinar pelo menos 3 vezes na semana
          </S.ParagrafoRecomendacao>
        </S.ContainerTextosPrincipais>
        <S.ContaineParteTextECards>
          <S.ParagrafoDiasDaSemana>
            Marque quantos dias você irá treinar na semana
          </S.ParagrafoDiasDaSemana>
          <S.ContainerCards>
            <CardNumero numero="1" isChecked={selectedNumero === "1"} onChange={() => handleselectNumero("1")} />
            <CardNumero numero="2" isChecked={selectedNumero === "2"} onChange={() => handleselectNumero("2")} />
            <CardNumero numero="3" isChecked={selectedNumero === "3"} onChange={() => handleselectNumero("3")} />
            <CardNumero numero="4" isChecked={selectedNumero === "4"} onChange={() => handleselectNumero("4")} />
            <CardNumero numero="5" isChecked={selectedNumero === "5"} onChange={() => handleselectNumero("5")} />
            <CardNumero numero="6" isChecked={selectedNumero === "6"} onChange={() => handleselectNumero("6")} />
            <CardNumero numero="7" isChecked={selectedNumero === "7"} onChange={() => handleselectNumero("7")} />
          </S.ContainerCards>
          <S.ConatinerButton onClick={LinkPesoCorpo}>
            <Buttonproximo />
          </S.ConatinerButton >
        </S.ContaineParteTextECards>
      </S.ContainerInfoPrincipais>
    </S.SectionDiasSemana>
  );
};
