import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

// Variaveis de Cores
const colors = {
  backgroundPrimary: "#F0FCEC",
  fontverde: "#00D939",
  verdeFraco: "rgba(99, 236, 135, 0.39)",
  verdeClaro: "#1FE624",
  corBranca: "white",
  verdeMorto: "rgba(89, 188, 115, 0.82)",
  corCinza: "#CBCBCB",
  backgroundFundoContainers: "rgba(217, 217, 217, 0.52)",
};

// Criação da Section Geral Para o Conteúdo
export const Home = styled.section`
  min-height: 100vh;
  width: calc(100% - 300px);
  overflow-y: auto;
  z-index: 2;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
  right: 0;
  padding: 1rem;
  background-color: ${colors.backgroundPrimary};

  @media ${Breakpoints.lg} {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

// Parte de Cima da Section
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2rem;

  @media ${Breakpoints.lg} {
    align-items: baseline;
    flex-direction: column-reverse;
    gap: 2rem;
  }
  @media ${Breakpoints.md} {
    padding-bottom: 1rem;
  }
`;

export const TextOla = styled.h1`
  font-size: 2.16rem;
  color: ${colors.fontverde};
  font-weight: 500;
`;

// Destaque do texto Olá
export const Spanh1 = styled.span`
  font-size: 2.16rem;
  color: ${colors.fontverde};
  font-weight: bold;
`;

// Criação da Container De Perfil de cima do Header
export const ContainerInfoPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${Breakpoints.lg} {
    flex-direction: row-reverse;
  }
`;

export const FotoPerfil = styled.img`
  width: 4rem;
  height: 4rem;
  background-color: ${colors.fontverde};
  border-radius: 50%;
`;

export const ContainerTextsPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;

  @media ${Breakpoints.lg} {
    text-align: left;
  }
`;

export const TextNomePersonal = styled.h5`
  color: ${colors.fontverde};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TextCargo = styled.p`
  font-size: 0.9rem;
  color: ${colors.fontverde};
  font-weight: 500;
`;
// Fim do Header

// Parte Da ContainerDeFiltros das Ánalise de Info
export const ContainerFiltros = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  transform: translateY(1rem);

  @media ${Breakpoints.bg} {
    flex-direction: row;
    gap: 0.5rem;
  }
  @media ${Breakpoints.md} {
    flex-direction: column;
  }
`;

interface FiltroProps {
  clicked: boolean;
}

// Buttons de Filtro
export const Filtro = styled.button<FiltroProps>`
  width: auto;
  height: auto;
  padding: 0.5rem 5rem;
  background-color: ${(props) =>
    props.clicked ? `${colors.verdeClaro}` : `${colors.verdeFraco}`};
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  color: ${(props) =>
    props.clicked ? `${colors.corBranca} ` : `${colors.verdeClaro}`};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.verdeClaro};
    color: ${colors.corBranca};
  }

  @media ${Breakpoints.bg} {
    width: auto;
  }
  @media ${Breakpoints.md} {
    width: 100%;
  }
`;

export const ContainerDestaquesInfos = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 0.5rem;
  align-items: normal;
  padding: 2rem 0;

  @media ${Breakpoints.bg} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// Titulo como: Alunos Destaques, Total de ALunos e Desempenho
export const TitulosContainer = styled.h3`
  color: ${colors.corCinza};
  font-size: 1.9rem;
  font-weight: bold;
  text-align: center;

  @media ${Breakpoints.bg} {
    text-align: center;
    width: 100%;
  }
`;

// Criação da Container Geral de Alunos destaques
export const ContainerDestaqueAluno = styled.div`
  width: 33.333%;
  height: 50%;
  display: flex;
  flex-direction: column;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

// Criação Da container De Alunos Destaques
export const ContainerAlunos = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 20px;
  position: relative;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
  background-color: ${colors.backgroundFundoContainers};
`;

// Fim da Container Alunos Destaques

// Inicio da Container Geral de Alunos total
export const ContainerTotalAlunos = styled.div<ContainerProps>`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

// Card do Total de Alunos
export const CardTotalAlunos = styled.article`
  background-color: ${colors.backgroundFundoContainers};
  width: 100%;
  height: 25%;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTextos = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
`;

export const TextNumero = styled.h1`
  color: ${colors.corCinza};
  font-size: 3.1rem;
  font-weight: bold;
`;

export const TextNumeroALunos = styled.p`
  color: ${colors.corCinza};
  font-size: 1.5rem;
  font-weight: bold;
`;
export const TextFinalTotalAlunos = styled.p`
  color: ${colors.corCinza};
  font-size: 1.1rem;
  font-weight: bold;
`;

export const IconeUser = styled.img`
  width: 9rem;
`;

// Fim do Card Total Aluno

// Parte Da containerNovos ALunos Geral
export const ContainerNovosAlunos = styled.div<ContainerProps>`
  width: 100%;
  height: 25%;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;

export const textNovosAlunos = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.corCinza};
`;

export const ContainerCardsNovosClientes = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${colors.backgroundFundoContainers};
  border-radius: 20px;
  overflow-y: auto;
`;

// Fim da container Novos Alunos

interface ContainerProps {
  isActive: boolean;
}

// Parte da Container Desempenho
export const ContainerDesempenho = styled.div<ContainerProps>`
  width: 100%;
  height: 80%;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media ${Breakpoints.bg} {
    width: 100%;
    padding-bottom: 4rem;
  }
`;

export const ContainerDesempenhoGrafico = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 20px;
  background-color: ${colors.backgroundFundoContainers};
`;

// Grafico de Ánalise dos dados
export const Grafico = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-right: 2rem;
  padding-top: 0.5rem;
`;

//Fim da Container Desempenho
