import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import ImagemHomen from "../../../../assets/img/homen.svg";
import ImagemMulher from "../../../../assets/img/mulher.svg";
import { useNavigate } from "react-router-dom";

type SectionSexoProps = {
  formData: {
    sexo: string;
  };
  onSexChange: (sexo: string) => void;
};

export const SectionSexo: React.FC<SectionSexoProps> = ({
  formData,
  onSexChange,
}) => {
  const navigate = useNavigate();
  const etapaTotais = 9;
  const [etapa, setEtapa] = useState(1);

  const progresso = (etapa / (etapaTotais - 1)) * 100;

  const LinkSectionPartCorpoFpcar = () => {
    navigate("/Objetivos");
  };

  const handleSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSexChange(e.target.value);
  };

  return (
    <S.Sectionsexo>
      <BarraDeProgresso progresso={progresso} />
      <S.ContainerTextosPrincipais>
        <S.TextoQualSexo>Qual seu sexo?</S.TextoQualSexo>
        <S.ParagrafoQueremosSaber>Queremos saber de você</S.ParagrafoQueremosSaber>
      </S.ContainerTextosPrincipais>
      <S.FormularioSexo>
        <S.ContainerInputsGenero>
          <S.ContainerHomen>
            <S.ImagemHomem src={ImagemHomen} />
            <S.LabelGenero>
              Masculino{" "}
              <S.InputSexo
                type="radio"
                name="sexo"
                value="Masculino"
                checked={formData.sexo === "Masculino"}
                onChange={handleSexChange}
              />
            </S.LabelGenero>
          </S.ContainerHomen>
          <S.ContainerMulher>
            <S.ImagemMulher src={ImagemMulher} />
            <S.LabelGenero>
              Feminino{" "}
              <S.InputSexo
                type="radio"
                name="sexo"
                value="Feminino"
                checked={formData.sexo === "Feminino"}
                onChange={handleSexChange}
              />
            </S.LabelGenero>
          </S.ContainerMulher>
        </S.ContainerInputsGenero>
        <S.ButtonProximo onClick={LinkSectionPartCorpoFpcar}>
          PRÓXIMO
        </S.ButtonProximo>
      </S.FormularioSexo>
    </S.Sectionsexo>
  );
};
