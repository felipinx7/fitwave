import styled from "styled-components";
import { Colors } from "../CardAlunoDestaque/styles";
import { Breakpoints } from "../../styles/BreakPoints";

// Variaveis de Cores
const colors = {
  backgroundPrimary: "#F0FCEC",
  fontverde: "#00D939",
  verdeFraco: "rgba(99, 236, 135, 0.39)",
  verdeClaro: "#1FE624",
  corBranca: "white",
  verdeMorto: "rgba(89, 188, 115, 0.82)",
  corCinza: "#CBCBCB",
  backgroundFundoContainers: "rgba(217, 217, 217, 0.52)",
  verdeFprte: "#057333",
};

export const Card = styled.article`
  width: 100%;
  height: auto;
  padding: 0.7rem 1rem;
  background-color: ${colors.verdeFraco};
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  border-radius: 10px;
`;

export const ContainerInfo = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media ${Breakpoints.md} {
    width: 100%;
    gap: 1.5rem;
    width: 100%;
  }
`;

export const ContainerFotoPerfil = styled.div`
  width: 15%;
  height: 100%;

  @media ${Breakpoints.ms} {
    width: 25%;
  }
`;

export const FotoCliente = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${colors.verdeClaro};
`;

export const ContainerInfoAluno = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const textNome = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.verdeClaro};
`;

export const TextInfo = styled.h4`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${colors.verdeClaro};
`;

export const contaierButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

export const ContainerButao = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  @media ${Breakpoints.md} {
    display: none;
  }
`;

export const buttonModificacao = styled.button`
  width: 20%;
  height: 2rem;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  font-size: 2rem;
  color: ${colors.fontverde};
  font-weight: 700;
  cursor: pointer;
`;

interface ContainerButtonsMobileProps {
  showContainer: boolean;
}

export const ContainerButtonMobile = styled.div`
  display: none;

  @media ${Breakpoints.md} {
    width: 100%;
    display: flex;
    color: ${colors.fontverde};
    font-size: 2rem;
    justify-content: flex-end;
  }
`;

export const ContainerButtonsMobile = styled.div<ContainerButtonsMobileProps>`
  display: none;

  @media ${Breakpoints.md} {
    width: 20%;
    height: 5%;
    display: ${(props) => (props.showContainer ? "flex" : "nn")};

    align-items: center;
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    position: absolute;
    gap: 2rem;
    padding: 0 0.5rem;
    transform: translate(-40%, -22%);
  }
`;

export const buttosMobile = styled.button`
  display: none;

  @media ${Breakpoints.md} {
    display: flex;
    width: 20%;
    height: 2rem;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    font-size: 1.8rem;
    color: ${colors.fontverde};
    font-weight: 700;
    cursor: pointer;
  }
`;

export const ContainerEditarInfo = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const CadastroContainer = styled.div`
  background-color: ${colors.verdeFprte};
  width: 400px;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${colors.corBranca};
`;

export const FotoPerfil = styled.input`
  width: 80px;
  height: 80px;
  background-color: ${colors.corBranca};
  border-radius: 50%;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 500rem;
  color: ${colors.corBranca};
  position: relative;
  left: 39%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${colors.corBranca};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: ${colors.corBranca};
  border: none;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 100%;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${colors.verdeClaro};
  color: ${colors.corBranca};
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${colors.fontverde};
  }
`;

export const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.corBranca};
  text-align: center;
  padding-bottom: 2rem;
`;

export const IconoToggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  color: #333;
  font-size: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: color 0.3s ease;
  transform: translate(-150%, -470%);
`;
