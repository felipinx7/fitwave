import styled from "styled-components";

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
};

export const Card = styled.article`
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: rgba(99, 236, 135, 0.39);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const containerConteudo = styled.div`
  width: 80%;
  height: 100%;
`;

export const textNotificacao = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${colors.fontverde};
`;

export const containerData = styled.div`
  width: 20%;
  height: 100%;
`;

export const textData = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.fontverde};
  height: 100%;
`;
