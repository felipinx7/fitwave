import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

// Criação da parte de Header
export const Header = styled.header`
  position: relative;
  max-width: 1240px;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 2.5rem 0;
  z-index: 0;

  @media ${Breakpoints.bg} {
    justify-content: normal;
    gap: 2rem;
    padding: 3rem 4rem;
  }
  @media ${Breakpoints.md} {
    padding: 3rem 2rem;
    justify-content: flex-start;
  }
  @media ${Breakpoints.sm} {
    padding: 3rem 1rem;
    gap: 1rem;
  }
`;
export const NavBar = styled.nav`
  display: flex;
  gap: 5rem;
  font-size: 18px;
  font-weight: 600;
  color: white;
  font-family: "Poppins", sans-serif;

  @media ${Breakpoints.bg} {
    display: none;
  }
`;

//Criação dos elementos do Header

export const ImagemLogo = styled.img`
  @media (max-width: 489px) {
    width: 5rem;
  }
`;

export const LinksDeNavegação = styled.a`
  cursor: Pointer;
`;

export const WraperButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 336px) {
    gap: 0.5rem;
  }
`;

export const ButtonAcessar = styled.button`
  width: 123px;
  height: 2.5rem;
  background-color: transparent;
  border: 2px solid #00d939;
  border-radius: 5px;
  color: white;
  font-size: 16.12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${Breakpoints.sm} {
    width: 65px;
    font-size: 11.12px;
  }
  @media (max-width: 335px) {
    width: 56px;
    font-size: 9.12px;
  }
`;

export const ButtonEntrarContato = styled.button`
  width: 13rem;
  height: 2.5rem;
  border-radius: 5.64px;
  cursor: pointer;
  background-color: #00d939;
  color: white;
  font-size: 16.12px;
  font-weight: 600;
  line-height: auto;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(7, 179, 53);
  }
  @media ${Breakpoints.md} {
    width: 10rem;
    font-size: 13.12px;
  }
  @media ${Breakpoints.sm} {
    width: 8rem;
    font-size: 11.12px;
  }
  @media (max-width: 489px) {
    width: 6rem;
    font-size: 10.12px;
  }
`;
