import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

// VARIAVEIS DE CORES
const Colors = {
  VerdeFundo: "#057333",
  Branco: "#FFFFFF",
  PretaClaro: "#363232",
  backGroundHover: "#D9D9D9",
};

export const SectionGeral = styled.section`
  min-height: 100vh;
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row-reverse;
`;

// Criação da Sidebar
export const SideBar = styled.header`
  background-color: ${Colors.VerdeFundo};
  height: 100vh;
  width: 100%;
  max-width: 350px;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem 1rem 1rem;
  z-index: 1;

  @media ${Breakpoints.lg} {
    display: none;
  }
`;

export const LogoFitwave = styled.img`
  width: 10rem;
  height: auto;
`;

export const ButtonLogout = styled.button`
  max-width: 200px;
  width: 200%;
  height: 3.5rem;
  font-weight: 600;
  padding: 1rem;
  border: none;
  gap: 1rem;
  color: ${Colors.PretaClaro};
  font-size: 1.44rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.backGroundHover};
  }
  @media ${Breakpoints.md} {
    max-width: unset;
    width: auto;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

interface ButtonslinksProps {
  isCheked: boolean;
}

export const ButtonsLinks = styled.button<ButtonslinksProps>`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  border-radius: 40px;
  font-weight: 600;
  justify-content: center;
  background-color: ${(props) =>
    props.isCheked ? `${Colors.Branco}` : "transparent"};
  border: none;
  transition: all 0.3s ease;
  padding: 0 2rem;

  &:hover {
    background-color: ${Colors.Branco};
  }

  @media ${Breakpoints.lg} {
    border-radius: 10px;
    svg {
      font-size: 1.5rem;
    }
    @media ${Breakpoints.md} {
      width: 15%;
    }
  }
`;
export const Icones = styled.svg``;

export const linsk = styled.a<ButtonslinksProps>`
  color: ${(props) =>
    props.isCheked ? `${Colors.VerdeFundo}` : `${Colors.Branco}`};
  transition: all 0.3s ease;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  &:hover {
    color: ${Colors.VerdeFundo};
  }
`;

// Criação da SideBarMobile

export const NavBarMobile = styled.header`
  display: none;

  @media ${Breakpoints.lg} {
    width: 100%;
    height: 4.5rem;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    position: fixed;
    z-index: 10;
    background-color: ${Colors.VerdeFundo};
  }
`;
