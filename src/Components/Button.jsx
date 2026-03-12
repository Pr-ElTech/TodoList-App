import React from "react";
import "../assets/CSS/Button.css";

const Button = ({ onChange }) => {
  return <button onClick={onChange}>ADD</button>;
};

export default Button;
