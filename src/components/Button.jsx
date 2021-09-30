import React from "react";

import "./Button.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
};

export default Button;
