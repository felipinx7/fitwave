import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const SectionPrincipal = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ImagemFundoIncialNotebook = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-color: black;
  z-index: -1;
  left: 0;
  top: 0;

  @media ${Breakpoints.lg} {
    display: none;
  }
`;

export const ImagemFundoIncialMobile = styled.img`
  display: none;

  @media ${Breakpoints.lg} {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-color: black;
    z-index: -1;
    left: 0;
    top: 0;
  }
`;

export const TextMain = styled.h1`
  font-family: "Goldman", serif;
  color: white;
  font-size: 34px;
  font-weight: 800;
`;

export const WraperTextos = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 88%;
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  transition: all 0.3s;

  @media ${Breakpoints.lg} {
    text-align: center;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const SpanJunte = styled.span`
  font-family: "Goldman", serif;
  color: #00d939;
`;

export const Paragrafo = styled.p`
  font-size: 26px;
  color: white;
  font-weight: 400;
`;