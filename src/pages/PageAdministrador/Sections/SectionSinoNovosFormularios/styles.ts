import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionSino = styled.section`
  height: calc(100vh - 146.44px);
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  background-color: #d9d9d9;
  border-radius: 20px;
`;
export const ContainerInformacoesFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  height: auto;
  align-items: baseline;

  @media ${Breakpoints.md} {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerLidaENaoLida = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: auto;

  @media ${Breakpoints.md} {
    width: 100%;
  }
`;

interface ButtonsLidosProps {
  isClicked: boolean;
}

export const ButtonsLidos = styled.button<ButtonsLidosProps>`
  width: auto;
  height: auto;
  border-radius: 20px;
  background-color: ${(props) => (props.isClicked ? "#319B4D" : "#939393")};
  height: auto;
  padding: 1rem 2rem;
  color: ${(props) => (props.isClicked ? "white" : "rgb(82, 75, 75)")};
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.5s ease;

  @media ${Breakpoints.md} {
    width: 100%;
  }
`;

export const ContainerInput = styled.div`
  width: 40%;
  height: 40%;
  position: relative;

  @media ${Breakpoints.md} {
    width: 100%;
  }
`;

export const InputFiltro = styled.input`
  max-width: 500px;
  width: 100%;
  height: 3rem;
  border-radius: 30px;
  background-color: rgb(200, 182, 182);
  border: none;
  color: rgb(53, 49, 49);
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: rgb(61, 57, 57);

  &::placeholder {
    color: rgb(79, 73, 73);
  }

  @media ${Breakpoints.md} {
    width: 100%;
    max-width: unset;
  }
`;

export const ContainerIconePesquisa = styled.div`
  font-size: 1.5rem;
  color: rgb(79, 73, 73);
  position: absolute;
  top: 13%;
  right: 0;
  padding: 0.3rem 1rem;
  cursor: pointer;
`;

export const ContaierCardsNovosClientes = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MensagemTodosLidos = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
`;
export const ContainerTextTodoslidos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
