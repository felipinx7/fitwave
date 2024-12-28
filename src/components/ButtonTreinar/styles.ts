import styled from "styled-components";

export const ButtonTreinar = styled.button`
  max-width: 500px;
  font-family: "Goldman", serif;
  width: 90%;
  background-color: #32cd32;
  color: #fff;
  font-weight: bold;
  border: none;
  position: relative;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 20px 5px rgba(50, 205, 50, 0.7);
  transition: box-shadow 0.3s ease;
  margin-top: 1rem;
  z-index: 1;

  &:hover{
  box-shadow: 0 0 20px 5px rgba(50, 205, 50, 1);
    
  }
`;
