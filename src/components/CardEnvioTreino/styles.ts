import styled from "styled-components";
import { Colors } from "../CardAlunoDestaque/styles";

export const Card = styled.article<LabelProps>`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.Active ? "#1FE624" : "rgba(185, 246, 197, 1)"};
`;

interface LabelProps {
  Active: boolean;
}

export const Label = styled.label<LabelProps>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.Active ? "#1FE624" : "rgba(185, 246, 197, 1)"};
  border-radius: 8px;
  transition: background 0.3s;
  padding: 0.5rem 1rem;
  gap: 1rem;

  &:hover {
    background-color: #1fe624;
  }
`;

export const InputSelected = styled.input`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

export const FotoPerfil = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${Colors.BackGroundFundo};
`;

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const textInfo = styled.p`
  font-size: 0.95rem;
  color: white;
  font-weight: 600;
`;
