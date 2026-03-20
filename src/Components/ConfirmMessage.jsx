import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "../assets/CSS/Alert.css";

const ConfirmMessage = () => {
  return (
    <div className="markBox">
      <IoCheckmarkDoneSharp className="mark" />
    </div>
  );
};

export default ConfirmMessage;
