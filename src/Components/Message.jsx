import React from "react";
import { FcCancel } from "react-icons/fc";
import "../assets/CSS/message.css";

const Message = () => {
  return (
    <div className="messageBox">
      <FcCancel className="cancle" />
      <h1>All fields are Required!!!</h1>
    </div>
  );
};

export default Message;
