import React, { useState } from "react";
import * as S from "./styles";
import { HeaderInfo } from "../../../../components/HeaderInfo/HeaderInfo";
import { CardRelatorio } from "../../../../components/CardRelatorio/CardRelatorio";
import { pessoas } from "../../../../constants/constasts";

export const SectionRelatorio: React.FC = () => {
  const [filtroNome, setFiltroNome] = useState("");

  // Filtra as pessoas com base no nome
  const pessoasFiltradas = pessoas.filter((pessoa) =>
    pessoa.nome.toLowerCase().includes(filtroNome.toLowerCase())
  );

  return (
    <S.Relatorio>
      <HeaderInfo nome="Felipe Lima" cargo="Personal" foto="sjkj" />
      <S.containerInput>
        <S.CampodeInput
          type="text"
          placeholder="Pesquise o aluno"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
      </S.containerInput>
      <S.ContainerCards>
        {pessoasFiltradas.length === 0 ? (
          <S.MensagemNenhumResultado>
            Nenhum resultado encontrado :(
          </S.MensagemNenhumResultado>
        ) : (
          pessoasFiltradas.map((card, index) => (
            <CardRelatorio
              key={index}
              nome={card.nome}
              sobrenome={card.sobrenome}
              email={card.email}
              telefone={card.telefone}
              peso={card.peso}
              altura={card.altura}
              imc={card.imc}
              categoria={card.treinos.map((categoria) => categoria.categoria)}
              data={card.treinos.map((data) => Date.parse(data.data))}  
              caloriasperdidas={card.treinos.map(
                (calorias) => calorias.caloriasPerdidas
              )}
              duracao={card.treinos.map((duracao) => duracao.duracao)}
            />
          ))
        )}
      </S.ContainerCards>
    </S.Relatorio>
  );
};
