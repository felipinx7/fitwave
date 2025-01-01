import styled from "styled-components";

export const SectionLoginInfo = styled.section`
  min-height: 100vh;
  width: 100%;
`;

export const FormInfoLogin = styled.form`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ContainerInfoPrincipais = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const TextoInfoDados = styled.div`
  font-size: 28.75px;
  color: #666666;
  font-weight: 600;
  text-align: center;
`;

export const ContainerInputFoto = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const InputFoto = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ContainerCamera = styled.div`
  position: absolute;
  z-index: 2;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #bfbfbf;
  cursor: pointer;
  transform: translate(4rem, 6.5rem);
`;

export const IconeCamera = styled.svg`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1.5rem, -29%);
  font-size: 3rem;
  color: #525252;
  pointer-events: none;
`;

export const TextoFotoPerfil = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #676767;
  transform: translateY(1rem);
`;

export const ContainerInfoInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  font-size: 14.17;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transform: translateY(0.5rem);
`;
export const InputLogin = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 16px;
  border: 2px solid #a6a6a6;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-weight: 500;
  outline: none;
  transition: all 0.1s ease;

  &::placeholder {
    font-size: 16.06px;
  }

  &:focus {
    outline: 2px solid rgba(0, 217, 57, 1);
    border: none;
  }
`;

export const ContainerButton = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const ButtonProsseguir = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  background-color: rgba(0, 217, 57, 1);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 19.44px;
  font-weight: 800;
`;
