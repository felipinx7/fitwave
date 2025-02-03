import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { CardObjetivos } from "../../../../components/CardObjetivos/CardObjetivos";
import { FaDumbbell } from "react-icons/fa6";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { FaFistRaised } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const SectionObjetivos: React.FC = () => {
  const [etapa, setEtapa] = useState(3);
  const etapaTotais = 9;

  const progresso = (etapa / (etapaTotais - 1)) * 100;

  const [selectedId, setSelectedId] = useState("");

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const handleObjectiveChange = (objetivo: string) => {
    setFormData((prev) => ({
      ...prev,
      objetivo,
    }));
  };

  const [formData, setFormData] = useState({
    objetivo: "",
  });

  const navigate = useNavigate();

  const LinkPageFlexao = () => {
    navigate("/focoMuscular");
  };

  return (
    <S.SectionObjetivos>
      <S.ContainerInfoPrincipais>
      <BarraDeProgresso progresso={progresso} />
        <S.ContainerTextosPrincipais>
          <S.TextoPrincipaisObjetivos>
            Seus principais objetivos?
          </S.TextoPrincipaisObjetivos>
          <S.ParagrafoSaberSobreVoce>
            Queremos saber mais sobre você.
          </S.ParagrafoSaberSobreVoce>
        </S.ContainerTextosPrincipais>
        <S.ContainerCardObjetivos>
          <CardObjetivos
            tituloCard="Perder Peso"
            iconeCard={FaDumbbell}
            selectedId={formData.objetivo}
            onSelect={handleObjectiveChange}
          />
          <CardObjetivos
            tituloCard="Aumentar músculos"
            iconeCard={GiMuscleUp}
            selectedId={formData.objetivo}
            onSelect={handleObjectiveChange}
          />
          <CardObjetivos
            tituloCard="Manter a forma"
            iconeCard={MdOutlineSportsGymnastics}
            selectedId={formData.objetivo}
            onSelect={handleObjectiveChange}
          />
        </S.ContainerCardObjetivos>
        <S.ButtonProximo onClick={LinkPageFlexao}>Próximo</S.ButtonProximo>
      </S.ContainerInfoPrincipais>
    </S.SectionObjetivos>
  );
};
