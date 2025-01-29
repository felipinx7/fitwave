import styled from "styled-components";
import { Breakpoints } from "../../styles/BreakPoints";

const Colors = {
  Fundocard: "rgba(99, 236, 135, 0.69)",
  ColorWhite: "white",
  colorVerde: "#00D939",
};

export const Card = styled.article`
  width: 100%;
  height: 15.2rem;
  background-color: ${Colors.Fundocard};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;

  @media ${Breakpoints.lg} {
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerTextos = styled.div`
  width: 40%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;

  @media ${Breakpoints.lg} {
    width: 70%;
    text-align: left;
  }
`;

export const textFitwave = styled.h3`
  font-size: 1.2rem;
  color: ${Colors.ColorWhite};
  font-weight: 500;
  text-align: left;

  @media ${Breakpoints.lg} {
    text-align: left;
    width: 100%;
  }
`;

export const FraseSlogan = styled.h3`
  font-size: 2.2rem;
  color: ${Colors.ColorWhite};
  font-weight: 600;

  @media ${Breakpoints.bg} {
    font-size: 1.7rem;
  }
`;

export const spanSlogan = styled.span`
  color: ${Colors.colorVerde};
`;

export const ContainerImagem = styled.div`
  width: 40%;
  padding-bottom: 3rem;

  @media ${Breakpoints.bg} {
    padding-bottom: 1rem;
  }
`;

export const ImagemBoneco = styled.img`
  width: 22rem;

  @media ${Breakpoints.bg} {
    width: 100%;
  }
`;
