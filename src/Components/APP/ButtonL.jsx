import React from "react";
import "../../../src/assets/CSS/Button.css";
const ButtonL = ({ btnData }) => {
  return (
    <button
      style={{
        width: btnData.width,
        background: btnData.color,
        height: btnData.height,
      }}
    >
      {btnData.text}
    </button>
  );
};

export default ButtonL;
