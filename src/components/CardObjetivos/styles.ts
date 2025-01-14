import styled from "styled-components";

export const CardObjetivos = styled.div`
  max-width: 500px;
  width: auto;
  border: 2px solid #00d939;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 17.14px;
`;
export const TtileObetivo = styled.label<{isChecked: boolean}>`
  width: 100%;
  font-size: 36px;
  padding: 1rem 1rem;
  color: black;
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: row-reverse;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.isChecked ? " #00d939": "transparent")};
  border-radius: ${(props) =>(props.isChecked ? "15px": "0" )};
  color: ${(props) =>(props.isChecked ? "white" : "black")};

&:hover{
    background-color: #00d939;
    border-radius: 15px;
    color: white;
}

`;

export const IconeObjetivo = styled.svg`
  font-size: 3rem;
  width: 50px;
  height: 50px;
`;

export const InputObjetivo = styled.input`
  display: none;
`;
