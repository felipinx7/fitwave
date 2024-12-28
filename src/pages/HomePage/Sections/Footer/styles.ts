import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  background-color: black;

  @media ${Breakpoints.lg} {
    transform: translateY(-5rem);
    height: auto;
    margin-top: -5rem;
    transform: translateY(0rem);
  }
`;

export const WraperMain = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2rem;
  padding: 0 2rem;

  @media ${Breakpoints.lg} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const WraperRedesSociais = styled.div`
  max-width: 33.33%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  padding: 4rem 0;

  @media ${Breakpoints.lg} {
    max-width: 90%;
  }
`;

export const ImgLogo = styled.img`
  width: 100px;
`;

export const DescriptionAcademy = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
  font-family: "Goldman", sans-serif;
  white-space: break-spaces;

  @media ${Breakpoints.lg} {
    font-size: 19px;
  }
`;

export const WraperButtonsRedesSociais = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonRedesSociais = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: white;
  }
`;

export const WraperLocalizacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: baseline;

  @media ${Breakpoints.lg} {
    width: 90%;
  }
`;

export const TextMainLocalizacao = styled.h1`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 21px;
  font-weight: 500;
`;

export const ParagarfosLocalizacao = styled.p`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
  }
`;

export const WraperHorario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;

  @media ${Breakpoints.lg} {
    width: 90%;
  }
`;

export const TextMainHorario = styled.h1`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 21px;
`;
export const ParagarfosHorarios = styled.p`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 11.39px;
`;
