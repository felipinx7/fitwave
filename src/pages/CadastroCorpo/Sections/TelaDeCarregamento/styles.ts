import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/fundo-tela-inicial.svg";

export const TelaDeCarregamento = styled.section`
  background-color: white;
  width: 100%;
  height: 100vh;
`;
export const ContainerInfoPrincipais = styled.div`
  background-image: url(${ImagemFundo});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

export const LogoFitwave = styled.img`

animation: pulsar 2s ease-in-out infinite;

  @keyframes pulsar {
    0%{
      transform: scale(1.1);
    }
    50%{
      transform: scale(1);
    }
    100%{
      transform: scale(1.1);
    }
  }

`;
export const TextCliqueParaContinuar = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid white;
  width: 0;
  animation: write 2.5s steps(26, end) forwards, blink 0.5s step-end infinite;

  @keyframes write {
    from {
      width: 0;
    }
    to {
      width: 21.5ch;
    }
  }

  @keyframes blink {
    50% {
      border-right-color: transparent;
    }
  }
`;
