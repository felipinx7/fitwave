import styled from "styled-components";

export const BarraDeProgresso = styled.div`
  background-color: #cecece;    
  position: relative;
  border-radius: 50px;
  max-width: 1240px;
  margin: 0 auto;
  width: 50%;
  height: 1rem;
  margin-top: 1rem;
  overflow: hidden;
`;

interface ProgressoProps{
    progesso: number;
}

export const Progresso = styled.div<ProgressoProps>`
    position: absolute;
    background-color: #00D939;
    width: ${(props) => props.progesso}%;
    height: 1rem;
    top: 0;
    left: 0;
    border-radius: 50px;
    transition: all 1s ease;
`;
