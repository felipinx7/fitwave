import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

// Criação do Header
export const HeaderMobile = styled.div`
    display: none;

  @media (max-width: 1081px) {
    display: block;
    width: 25rem;
  }
`;

interface ShownavProps {
  Shownav: boolean;
}

// Criação do componentes do Header
export const WraperLinks = styled.div<ShownavProps>`
  display:${(props) => (props.Shownav ? "flex" : "none")};
  position: absolute;
  max-width: 300px;
  width: 100%;
  top: 0;
  right: 0;
  height: 100%;
  background-color: rgb(68, 68, 68);
  transform: ${({ Shownav }) =>
    Shownav ? "translateX(0)" : "translateX(100%)"};
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 2;
`;

export const LinksDeNavegação = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: right;
  font-size: 1.2rem;
`;

export const WraperIconeNavegacao = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
  padding: 2rem;
  cursor: pointer;

  svg {
    font-size: 2rem;
    color: white;
    transition: all 0.3s ease;
  }
  @media ${Breakpoints.sm} {
    padding: 2rem 0.5rem;
  }
`;
