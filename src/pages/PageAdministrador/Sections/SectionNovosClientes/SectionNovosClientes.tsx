import React from "react";
import * as S from "./styles";
import * as Imagens from "../../../../assets/index";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface SectionNovosClientesProps {
  nome?: string;
  sobrenome?: string;
  email?: string;
  dataPagamento?: string;
  AreaFoco?: string;
  Categoria?: string;
  Peso?: number;
  telefone?: string;
  senha?: string;
  sexo?: string;
  PrincipalObjetivo?: string;
  TreinoSemanais?: string;
  Altura?: number;
  showContainer?: boolean;
  handleShowContainer?: () => void;
}

export const SectionNovosClientes: React.FC<SectionNovosClientesProps> = ({
  nome,
  sobrenome,
  email,
  dataPagamento,
  AreaFoco,
  Categoria,
  Peso,
  telefone,
  senha,
  sexo,
  PrincipalObjetivo,
  TreinoSemanais,
  Altura,
  showContainer,
  handleShowContainer,
}) => {
  const navigate = useNavigate();

  const linkPageAdmin = () => {
    navigate("/PageAdmin");
  };

  return (
    // Renderiza a seção apenas se showContainer for verdadeiro
    <S.Section showContainer={showContainer}>
      <S.ContainerGeral>
        <S.ContainerVoltar onClick={linkPageAdmin}>
          <IoIosArrowBack />
        </S.ContainerVoltar>
        <S.containerHeaderSection>
          <S.ImagenLogo src={Imagens.logoFitwaveVerde} />
          <S.TituloPrincipal>
            FORMULÁRIO <br />
            NOVOS CLIENTE.
          </S.TituloPrincipal>
        </S.containerHeaderSection>
        <S.containerForm>
          <S.ContainerGeralForm>
            <S.ContainerParteDireita>
              <S.containerInput>
                <S.labelInput>Nome Completo: </S.labelInput>
                <S.InputForm
                  type="text"
                  value={`${nome} ${sobrenome}`} // Combine nome e sobrenome
                  required
                  placeholder="Felipe Lima"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Email: </S.labelInput>
                <S.InputForm
                  type="email"
                  value={email}
                  required
                  placeholder="seuemail@exemplo.com"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Data Pagamento: </S.labelInput>
                <S.InputForm
                  type="number"
                  value={dataPagamento}
                  required
                  maxLength={28}
                  placeholder="27"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Área de Foco: </S.labelInput>
                <S.InputForm
                  type="text"
                  value={AreaFoco}
                  required
                  placeholder="Corpo Todo"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Categoria: </S.labelInput>
                <S.InputForm
                  type="text"
                  value={Categoria}
                  required
                  placeholder="Iniciante"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Peso: </S.labelInput>
                <S.InputForm
                  type="number"
                  value={Peso}
                  required
                  maxLength={500}
                  placeholder="42"
                />
              </S.containerInput>
            </S.ContainerParteDireita>
            <S.ContainerParteEsquerda>
              <S.containerInput>
                <S.labelInput>Telefone: </S.labelInput>
                <S.InputForm
                  type="tel"
                  value={telefone}
                  required
                  maxLength={15} // Considerando a formatação (ex: (00) 0000-0000)
                  placeholder="(00) 0000-0000"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Senha: </S.labelInput>
                <S.InputForm
                  type="password"
                  value={senha}
                  required
                  placeholder="Informe a senha"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Sexo: </S.labelInput>
                <S.InputForm
                  type="text"
                  value={sexo}
                  required
                  maxLength={28}
                  placeholder="Masculino"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Principal Objetivo: </S.labelInput>
                <S.InputForm
                  type="text"
                  value={PrincipalObjetivo}
                  required
                  placeholder="Musculação"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Treinos Semanais: </S.labelInput>
                <S.InputForm
                  type="text"
                  value={TreinoSemanais}
                  required
                  placeholder="0"
                />
              </S.containerInput>
              <S.containerInput>
                <S.labelInput>Altura: </S.labelInput>
                <S.InputForm
                  type="number"
                  value={Altura}
                  required
                  maxLength={500}
                  placeholder="124cm"
                />
              </S.containerInput>
            </S.ContainerParteEsquerda>
          </S.ContainerGeralForm>
          <S.buttonCadastrar type="submit">CADASTRAR</S.buttonCadastrar>
        </S.containerForm>
      </S.ContainerGeral>
    </S.Section>
  );
};
