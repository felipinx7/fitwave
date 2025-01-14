import styled from "styled-components";

export const HeaderPageAdministracao = styled.header`
  width: 100%;
  height: auto;
`;
export const ContainerHeaderLogo = styled.article`
  width: 100%;
  height: 50%;
  background-color: #322d2d;
  display: flex;
  justify-content: center;
`;
export const LogoHeader = styled.img`
  width: 7rem;
`;
export const HeaderInfoPrincipais = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cbcbcb;
  padding: 0.5rem 2rem;
`;
export const InfoPrincipais = styled.nav`
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const ContainerContaHeader = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  cursor: pointer;

  /* APLICAR AS CONFIGS AQUI */
`;
export const FotoPerfilContainer = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
export const TextBoasVindasHeader = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #4f4f4f;
`;

export const SpanTextAdmin = styled.span`
  font-weight: bold;
`;

interface ButtonHeaderProps {
  isActive: boolean;
}

export const ButtonsHeader = styled.button<ButtonHeaderProps>`
  cursor: pointer;
  height: 3rem;
  justify-content: center;
  width: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: ${(props) => (props.isActive ? "#00C834" : "transparent")};
  font-size: 1.2rem;
  color: ${(props) => (props.isActive ? "White" : "#4F4F4F")};
  font-weight: 600;
  border-radius: ${(props) => (props.isActive ? "10px" : "0px")};
  transition: background-color 0.1s ease-in;
  padding: 0 0.4rem;

  svg {
    font-size: 2rem;
    color: ${(props) => (props.isActive ? "White" : "#4F4F4F")};
  }
  &:hover {
    background-color: ${(props) => (props.isActive ? "#00C834" : "#aaacab")};
    border-radius: 10px;
  }
`;

export const ButtonSair = styled.button`
  display: flex;
  gap: 1rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  align-items: center;
  border: none;
  background-color: #AAACAB;
  width: 10rem;
  border-radius: 10px;
  height: 3rem;
  justify-content: center;
  transition: background-color 0.1s ease-in;
  cursor: pointer;

  svg {
    font-size: 2rem;
    font-weight: 800;
  }

  &:hover {
    background-color: rgb(156, 158, 157);
  }
`;
