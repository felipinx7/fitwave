import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { useNavigate } from "react-router-dom";

export const SectionPesoAltura: React.FC = () => {
  const [weight, setWeight] = useState(20);
  const [height, setHeight] = useState(175);

  const [etapa, setetapa] = useState(6)
  const etapastotais = 9

  const progresso = (etapa /(etapastotais -1 )) * 100

  const navigate = useNavigate()

  const LinkPagePlano = () =>{
    navigate("/plano")
  }

  return (
    <S.SectionAlturaPeso>
        <BarraDeProgresso progresso={progresso}/>
      <S.ContainerInformacoesPrincipais>
        <S.ConatinerTextosPrincipais>
          <S.TextQueremosSaberSobreVoce>
            Queremos saber mais sobre você
          </S.TextQueremosSaberSobreVoce>
          <S.ParagarfoInformePesoAltura>
            Informe seu peso e sua altura
          </S.ParagarfoInformePesoAltura>
        </S.ConatinerTextosPrincipais>
        <S.ContainerInfoUser>
          <S.FormPesoAltura>
          <S.ContainerDosInputs>
             <S.ContainerInputs>
              <S.LabelInfoUser htmlFor="weight">Peso</S.LabelInfoUser>
              <S.ContainerValue>{`${weight.toFixed(1)} kg`}</S.ContainerValue>
              <S.InputCorpoUser
                type="range"
                id="weight"
                min={20}
                max={200}
                step={0.1}security=""
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
            </S.ContainerInputs>
            <S.ContainerInputs>
              <S.LabelInfoUser htmlFor="height">Altura</S.LabelInfoUser>
              <S.ContainerValue>{`${height.toFixed(1)} cm`}</S.ContainerValue>
              <S.InputCorpoUser
                type="range"
                id="height"
                min={130}
                max={200}
                step={1}
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
              />
            </S.ContainerInputs>
          </S.ContainerDosInputs>
           
            <S.ContainerButton>
                <S.ButtonObterPlano onClick={LinkPagePlano} type="submit">OBTER PLANOS</S.ButtonObterPlano>
            </S.ContainerButton>
          </S.FormPesoAltura>
        </S.ContainerInfoUser>
      </S.ContainerInformacoesPrincipais>
    </S.SectionAlturaPeso>
  );
};
