import React from "react";
import "../assets/CSS/Input.css";
import Button from "./Button";

const Input = ({ input, setInput, AddBtn }) => {
  return (
    <div className="inputHolder">
      <div className="inputs">
        <input
          type="text"
          placeholder="Input a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onChange={AddBtn} />
      </div>
    </div>
  );
};

export default Input;
