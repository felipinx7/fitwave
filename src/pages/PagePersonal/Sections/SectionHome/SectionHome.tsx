import React, { useState } from "react";
import * as S from "./styles";
import { CardBoasVindas } from "../../../../components/CardBoasVindas/CardBoasVindas";
import { LinksButtonFiltro } from "../../../../constants/constasts";
import { CardAlunoDestaque } from "../../../../components/CardAlunoDestaque/CardAlunoDestaque";
import * as Imagens from "../../../../assets/index";
import { CardNovosAlunos } from "../../../../components/CardNovosAlunos/CardNovosAlunos";
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
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";

export const SectionHome: React.FC = () => {
  const [clicked, setClicked] = useState<number>(LinksButtonFiltro[0].param);

  const handleClicked = (param: number) => {
    setClicked(param);
  };

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
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="felipe" />

      <CardBoasVindas />

      <S.ContainerFiltros>
        {LinksButtonFiltro.map((link, index) => (
          <S.Filtro
            key={index}
            onClick={() => handleClicked(link.param)}
            clicked={clicked === link.param}
          >
            {link.nome}
          </S.Filtro>
        ))}
      </S.ContainerFiltros>

      <S.ContainerDestaquesInfos>
        {(() => {
          switch (clicked) {
            case 1: // "Todas"
              return (
                <>
                  <S.ContainerDestaqueAluno>
                    <S.TitulosContainer>Alunos Destaques</S.TitulosContainer>
                    <S.ContainerAlunos>
                      <CardAlunoDestaque />
                    </S.ContainerAlunos>
                  </S.ContainerDestaqueAluno>
                  <S.ContainerTotalAlunos isActive={clicked === 1}>
                    <S.TitulosContainer>Total de Alunos</S.TitulosContainer>
                    <S.CardTotalAlunos>
                      <S.ContainerTextos>
                        <S.TextNumero>22</S.TextNumero>
                        <S.TextNumeroALunos>Alunos</S.TextNumeroALunos>
                        <S.TextFinalTotalAlunos>
                          Total de Alunos
                        </S.TextFinalTotalAlunos>
                      </S.ContainerTextos>
                      <S.IconeUser src={Imagens.IconeCardAlunos} />
                    </S.CardTotalAlunos>
                    <S.ContainerNovosAlunos isActive={clicked === 1}>
                      <S.textNovosAlunos>Novos Alunos</S.textNovosAlunos>
                      <S.ContainerCardsNovosClientes>
                        <CardNovosAlunos />
                      </S.ContainerCardsNovosClientes>
                    </S.ContainerNovosAlunos>
                  </S.ContainerTotalAlunos>
                  <S.ContainerDesempenho isActive>
                    <S.TitulosContainer>Desempenho</S.TitulosContainer>
                    <S.ContainerDesempenhoGrafico>
                      <S.Grafico>
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
                      </S.Grafico>
                    </S.ContainerDesempenhoGrafico>
                  </S.ContainerDesempenho>
                </>
              );
            case 2: // "Alunos"
              return (
                <>
                  <S.ContainerDestaqueAluno>
                    <S.TitulosContainer>Alunos Destaques</S.TitulosContainer>
                    <S.ContainerAlunos>
                      <CardAlunoDestaque />
                    </S.ContainerAlunos>
                  </S.ContainerDestaqueAluno>
                  <S.ContainerTotalAlunos isActive={clicked === 2}>
                    <S.TitulosContainer>Total de Alunos</S.TitulosContainer>
                    <S.CardTotalAlunos>
                      <S.ContainerTextos>
                        <S.TextNumero>22</S.TextNumero>
                        <S.TextNumeroALunos>Alunos</S.TextNumeroALunos>
                        <S.TextFinalTotalAlunos>
                          Total de Alunos
                        </S.TextFinalTotalAlunos>
                      </S.ContainerTextos>
                      <S.IconeUser src={Imagens.IconeCardAlunos} />
                    </S.CardTotalAlunos>
                    <S.ContainerNovosAlunos isActive={clicked === 2}>
                      <S.textNovosAlunos>Novos Alunos</S.textNovosAlunos>
                      <S.ContainerCardsNovosClientes>
                        <CardNovosAlunos />
                      </S.ContainerCardsNovosClientes>
                    </S.ContainerNovosAlunos>
                  </S.ContainerTotalAlunos>
                </>
              );
            case 3: // "Desempenho"
              return (
                <S.ContainerDesempenho isActive>
                  <S.TitulosContainer>Desempenho</S.TitulosContainer>
                  <S.ContainerDesempenhoGrafico>
                    <S.Grafico>
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
                    </S.Grafico>
                  </S.ContainerDesempenhoGrafico>
                </S.ContainerDesempenho>
              );
            default:
              return null;
          }
        })()}
      </S.ContainerDestaquesInfos>
    </S.Home>
  );
};
