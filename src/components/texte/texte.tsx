import React from "react";
import styled from "styled-components";

const Checkbox = () => {
  return (
    <StyledWrapper>
      <label className="container">
        Ativo
        <input defaultChecked={true} type="checkbox" />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    display: flex;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    background: #606062;
    border-radius: 5px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 1px 1px rgba(0, 5);
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-image: linear-gradient(#b9e9b3, #a8e4a0);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
`;

export default Checkbox;
