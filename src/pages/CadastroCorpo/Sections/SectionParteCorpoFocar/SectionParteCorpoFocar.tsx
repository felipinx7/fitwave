import React, { useState } from "react";
import * as S from "./styles";
import { BarraDeProgresso } from "../../../../components/BarraDeProgresso/BarraDeProgresso";
import { CardFocoMuscular } from "../../../../components/CardFocoMuscular/CardFocoMuscular";
import { useNavigate } from "react-router-dom";

export const SectionParteCorpoFocar: React.FC = () => {
  // Parte da barra de progresso
  const [etapa, setEtapa] = useState(2);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const etapaTotais = 9;

  const progresso = (etapa / (etapaTotais - 1)) * 100;

  // Função para armazenar mais de uma informação do corpo da pessoa
  const handleSelectionChange = (parteCorpo: string) => {
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(parteCorpo)) {
        return prevSelectedValues.filter((value) => value !== parteCorpo);
      } else {
        return [...prevSelectedValues, parteCorpo];
      }
    });
  };

  // Link de Navegação para a rota obejetivos
  const navigate = useNavigate();

  const LinkSectionObjetivos = () => {
    navigate("/treinoDiaSemana");
  };

  return (
    <S.SectionFocarCorpo>
      <BarraDeProgresso progresso={progresso} />
      <S.ContainerPrincipal>
        <S.ContainerTextosPrincipais>
          <S.TextAreaDeFoco>Qual área de foco você deseja</S.TextAreaDeFoco>
          <S.ParagrafoSelecionarMaisDeUma>
            pode selecionar mais de uma
          </S.ParagrafoSelecionarMaisDeUma>
        </S.ContainerTextosPrincipais>
        <S.ContainerOpcoes>
          <S.FormFocoMuscular>
            <S.ContainerCards>
              <CardFocoMuscular
                parteCorpo="CORPO TODO"
                selectedValues={selectedValues}
                onFocusChange={handleSelectionChange}
              />
              <CardFocoMuscular
                parteCorpo="BRAÇO"
                selectedValues={selectedValues}
                onFocusChange={handleSelectionChange}
              />
              <CardFocoMuscular
                parteCorpo="PEITO"
                selectedValues={selectedValues}
                onFocusChange={handleSelectionChange}
              />
              <CardFocoMuscular
                parteCorpo="ABDÔMEN"
                selectedValues={selectedValues}
                onFocusChange={handleSelectionChange}
              />
              <CardFocoMuscular
                parteCorpo="PERNA"
                selectedValues={selectedValues}
                onFocusChange={handleSelectionChange}
              />
            </S.ContainerCards>
            <S.ButtonProximo onClick={LinkSectionObjetivos}>
              Próximo
            </S.ButtonProximo>
          </S.FormFocoMuscular>
        </S.ContainerOpcoes>
      </S.ContainerPrincipal>
    </S.SectionFocarCorpo>
  );
};
