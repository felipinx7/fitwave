import React from "react";
import * as S from "./styles";
import { jsPDF } from "jspdf";
import { HeaderInfo } from "../HeaderInfo/HeaderInfo";
import { FaTimes } from "react-icons/fa";

interface SectionRelatoriosTreinosProps {
  MostarSection: boolean;
  handleMostrarSection: () => void;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  peso: number;
  altura: number;
  imc: number;
  categoria: string;
  data: number[];
  caloriasperdidas: number[];
  duracao: number[];
}

export const SectionRelatorioTreino: React.FC<SectionRelatoriosTreinosProps> = (
  props
) => {
  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Arial");
    doc.setFontSize(12);

    // Cabeçalho
    doc.setFontSize(20);
    doc.setFont("Poppins", "bold");
    doc.text(
      `Relatório de Treino - ${props.nome} ${props.sobrenome}`,
      105,
      10,
      { align: "center" }
    );
    doc.setFontSize(12);
    doc.setFont("Arial");
    doc.text(`Email: ${props.email}`, 10, 20);
    doc.text(`Telefone: ${props.telefone}`, 10, 30);

    // Espaçamento entre as seções
    let yOffset = 40;

    // Resumo de Performance
    doc.setFont("Poppins", "bold");
    doc.text("Resumo da Performance", 105, yOffset, { align: "center" });
    yOffset += 10;

    doc.setFont("Arial");
    doc.text(`Peso: ${props.peso}kg`, 10, yOffset);
    yOffset += 10;
    doc.text(`Altura: ${props.altura}cm`, 10, yOffset);
    yOffset += 10;
    doc.text(`IMC: ${props.imc}`, 10, yOffset);
    yOffset += 20;

    // Progresso nos Exercícios
    doc.setFont("Poppins", "bold");
    doc.text("Progresso nos Exercícios", 105, yOffset, { align: "center" });
    yOffset += 10;
    doc.setFont("Arial");
    doc.text("Melhora em 15%", 10, yOffset);
    yOffset += 20;

    // Histórico de Treinos
    doc.setFont("Poppins", "bold");
    doc.text("Histórico de Treinos", 105, yOffset, { align: "center" });
    yOffset += 10;

    // Cabeçalho da tabela
    doc.setFont("Arial", "bold");
    doc.text(
      "Data       | Tipo de Treino    | Duração   | Calorias Queimadas",
      10,
      yOffset
    );
    yOffset += 10;

    // Preenche a tabela com dados
    props.data.forEach((item, index) => {
      doc.setFont("Arial");
      doc.text(
        `${new Date(item).toLocaleDateString()}  | ${props.categoria}  | ${
          props.duracao[index]
        } min  | ${props.caloriasperdidas[index]} kcal`,
        10,
        yOffset
      );
      yOffset += 10;
    });

    // Comentário do personal
    yOffset += 15;
    doc.setFont("Poppins", "bold");
    doc.text("Observação do Personal", 10, yOffset);
    yOffset += 10;
    doc.setFont("Arial");
    doc.text("Digite aqui seu comentário Personal.", 10, yOffset);

    // Salvar o PDF
    doc.save(`relatorio_aluno_${props.nome}.pdf`);
  };

  return (
    <S.Section MostrarSection={props.MostarSection}>
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="sjkj" />
      <S.ContainerFechar onClick={props.handleMostrarSection}>
        <FaTimes />
      </S.ContainerFechar>
      <S.ContainerInfo>
        <S.ContainerPerfil>
          <S.ContainerFotoPerfil>
            <S.FotoCliente src="" />
          </S.ContainerFotoPerfil>
          <S.ContainerTextos>
            <S.textnome>
              {props.nome} {props.sobrenome}
            </S.textnome>
            <S.textInfo>{props.email}</S.textInfo>
            <S.textInfo>{props.telefone}</S.textInfo>
          </S.ContainerTextos>
        </S.ContainerPerfil>
      </S.ContainerInfo>
      <S.ContainerMassaCorpora>
        <S.TextResumo>Resumo Da Performance</S.TextResumo>
        <S.ContainerGeral>
          <S.InfoContainerCorpo>
            <S.ContainerPeso>
              <S.textnomeTitulo>Peso:</S.textnomeTitulo>
              <S.ValorCorpo>{props.peso}kg</S.ValorCorpo>
            </S.ContainerPeso>
            <S.ContainerAltura>
              <S.textnomeTitulo>Altura:</S.textnomeTitulo>
              <S.ValorCorpo>{props.altura}</S.ValorCorpo>
            </S.ContainerAltura>
          </S.InfoContainerCorpo>
          <S.InfoContainerCorpo>
            <S.ContainerPeso>
              <S.textnomeTitulo>IMC:</S.textnomeTitulo>
              <S.ValorCorpo>{props.imc}</S.ValorCorpo>
            </S.ContainerPeso>
            <S.ContainerAltura>
              <S.textnomeTitulo>Progresso nos Exercicios:</S.textnomeTitulo>
              <S.ValorCorpo>Melhora em 15%</S.ValorCorpo>
            </S.ContainerAltura>
          </S.InfoContainerCorpo>
        </S.ContainerGeral>
      </S.ContainerMassaCorpora>
      <S.ContainerHistoricoTreinos>
        <S.TituloHistorico>Históricos de Treinos</S.TituloHistorico>
        <S.TabelaTreinos>
          <S.CabecalhoTabela>
            <tr>
              <S.CelulaCabecalho>Data</S.CelulaCabecalho>
              <S.CelulaCabecalho>Tipo de Treino</S.CelulaCabecalho>
              <S.CelulaCabecalho>Duração</S.CelulaCabecalho>
              <S.CelulaCabecalho>Calorias Queimadas</S.CelulaCabecalho>
            </tr>
          </S.CabecalhoTabela>
          <tbody>
            {props.data.map((item, index) => (
              <S.LinhaTabela key={index}>
                <S.CelulaTabela>
                  {new Date(item).toLocaleDateString()}
                </S.CelulaTabela>
                <S.CelulaCabecalho>{props.categoria}</S.CelulaCabecalho>
                <S.CelulaTabela>{props.duracao[index]} minutos</S.CelulaTabela>
                <S.CelulaTabela>
                  {props.caloriasperdidas[index]} kcal
                </S.CelulaTabela>
              </S.LinhaTabela>
            ))}
          </tbody>
        </S.TabelaTreinos>
      </S.ContainerHistoricoTreinos>
      <S.containerComentarioPersonal>
        <S.textnomeTitulo>Observação Personal</S.textnomeTitulo>
        <S.InputComentarioPersonal placeholder="Digite aqui seu comentário Personal." />
      </S.containerComentarioPersonal>
      <S.buttonGerarPdf onClick={gerarPDF}>GERAR PDF</S.buttonGerarPdf>
    </S.Section>
  );
};
