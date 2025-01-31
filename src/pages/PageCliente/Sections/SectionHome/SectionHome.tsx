import React from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import * as Imagens from "../../../../assets/index";
import { CardBoasVindas } from "../../../../components/CardBoasVindas/CardBoasVindas";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const SectionHome: React.FC = () => {
  const data = [
    { name: "10", desempenho: 10 },
    { name: "30", desempenho: 35 },
    { name: "50", desempenho: 55 },
    { name: "70", desempenho: 70 },
    { name: "90", desempenho: 100 },
    { name: "100", desempenho: 110 },
  ];

  return (
    <S.Home>
      <HeaderInfo nome="Felipe Lima" cargo="Aluno" foto="dj" />
      <CardBoasVindas />
      <S.ContainerCardsTreinos>
        <S.CardTotalAlunos>
          <S.ContainerTextos>
            <S.TextInfo>Treinos Pendentes</S.TextInfo>
            <S.TextNumero>22</S.TextNumero>
            <S.TextInfo>Todos os Treinos Pendentes</S.TextInfo>
          </S.ContainerTextos>
          <S.IconeImagens src={Imagens.IconeAltere} />
        </S.CardTotalAlunos>

        <S.CardTotalAlunos>
          <S.ContainerTextos>
            <S.TextInfo>Treinos Concluídos</S.TextInfo>
            <S.TextNumero>22</S.TextNumero>
            <S.TextInfo>Todos os Treinos Concluídos</S.TextInfo>
          </S.ContainerTextos>
          <S.IconeImagens src={Imagens.IconeUser} />
        </S.CardTotalAlunos>
      </S.ContainerCardsTreinos>

      <S.TextDesempenhoTreinos>DESEMPENHO NOS TREINOS</S.TextDesempenhoTreinos>

      <S.ContainerGrafico>
        <ResponsiveContainer width="100%" height={560}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="desempenho"
              stroke="#1FE624"
              strokeWidth={3}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </S.ContainerGrafico>
    </S.Home>
  );
};
