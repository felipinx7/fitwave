import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

export const ContainerInfoCard = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1rem;
  transition: all 1s ease;

  hr {
    width: 100%;
    background-color: #838383;
    transition: all 1s ease;

    &.active {
      width: 80%;
    }
  }

  &.active {
    width: 90%;
  }
`;

export const ContainerTextos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  transition: all 1s ease;

  &.active {
    width: 75%;
    justify-content: space-between;
  }
`;

export const textInfoCard = styled.p`
  font-size: 1.2rem;
  color: #575757;
  font-weight: 600;
  transition: all 1s ease;
`;

export const TextStatus = styled.p`
  font-size: 1.2rem;
  color: #575757;
  font-weight: 600;
  transition: all 1s ease;

  @media ${Breakpoints.lg} {
    display: none;
  }
`;

export const containerStatusEeditar = styled.div`
  display: flex;
  gap: 4rem;
`;

export const ContainerNome = styled.div`
  width: 21%;
`;

export const ContainerEntrada = styled.div`
  @media ${Breakpoints.lg} {
    display: none;
  }
`;
