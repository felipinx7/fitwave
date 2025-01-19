import styled from "styled-components";
export const ContainerInput = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  transition: all 1s ease;
`;

export const ContainerGeralInput = styled.div`
  width: 100%;
  display: flex;
  transition: all 1s ease;


  &.active{
    width: 75%;
  }
`;

export const InputFiltroCliente = styled.input`
  flex: 1;
  height: 3rem;
  background: #e7e7e7;
  padding: 0 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  color: #333;
  text-align: center;
  transition: all 1s ease;


  ::placeholder {
    color: #a9a9a9;
  }
`;

export const ContainerIconeInput = styled.div`
  position: absolute;
  right: 2rem;
  top: 33%;
  font-size: 1.3rem;
  color: #b5a9a9;
  pointer-events: none;
  transition: all 1s ease;

`;

export const ContainerCardColaboradores = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 0;
  transition: all 1s ease;

  &.active {
    width: 75%;
    justify-content: flex-start;
  }
`;