import React from "react";
import "../assets/CSS/list.css";

const List = () => {
  return (
    <ul className="task-Container">
      {todo?.map((item, index) => (
        <li key={index} className="task">
          {item}
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
