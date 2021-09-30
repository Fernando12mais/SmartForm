import React from "react";

import "./Input.css";

const Input = ({ takeInputValue, value }) => {
  const onChangeInput = (valorInput) => {
    takeInputValue(valorInput.target.value);
  };
  return (
    <input
      maxLength="50"
      value={value}
      onChange={onChangeInput}
      className="input"
    ></input>
  );
};

export default Input;
