import styled from "styled-components";
import { Breakpoints } from "../../../../styles/BreakPoints";

// Variáveis de Cores
const colors = {
  backgroundPrimary: "#F0FCEC",
  fontverde: "#00D939",
  verdeFraco: "rgba(99, 236, 135, 0.39)",
  verdeClaro: "#1FE624",
  corBranca: "white",
  verdeMorto: "rgba(89, 188, 115, 0.82)",
  corCinza: "#CBCBCB",
  backgroundFundoContainers: "rgba(217, 217, 217, 0.52)",
};

// Criação da Section Geral Para o Conteúdo
export const Perfil = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1200px; // Limita a largura máxima
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${colors.backgroundPrimary};
  border-radius: 20px;

  @media ${Breakpoints.lg} {
    padding: 1rem;
  }
`;

export const ContainerFormGeral = styled.div`
  width: 100%;
  height: auto;
  max-width: 1000px; // Limita a largura máxima do formulário
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerForm = styled.form`
  width: 100%;
  background-color: ${colors.verdeFraco};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputFotoPerfil = styled.input`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 9000rem;
  color: ${colors.verdeClaro};
  cursor: pointer;
  background-color: ${colors.corBranca};
  border: 2px solid ${colors.verdeClaro};
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: ${colors.fontverde};
  }
`;

export const ContainerNome = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const inptnomes = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Label = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
  color: ${colors.fontverde};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${colors.verdeFraco};
  border-radius: 20px;
  background-color: ${colors.corBranca};
  font-size: 1.2rem;
  color: ${colors.fontverde};

  &:focus {
    outline: none;
    border-color: ${colors.fontverde};
  }
`;

export const ButtonEditar = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.corBranca};
  background-color: ${colors.fontverde};
  border: none;
  border-radius: 20px;
  margin-top: 1rem;

  &:hover {
    background-color: ${colors.verdeClaro};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
