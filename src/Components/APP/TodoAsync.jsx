import React, { useEffect, useState } from "react";
import ButtonL from "./ButtonL";
import "./TodoAsync.css";
import axios from "axios";

const TodoAsync = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    time: "",
    Date: "",
  });

  const [todo, setTodo] = useState([]);

  const fetching = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setTodo(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error featching Data");
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const btnProps = [
    { id: 0, text: "Login", color: "Orange" },
    { id: 1, text: "Signup" },
  ];

  const addBtn1 = { id: 0, text: "ADD", width: "150px", height: "30px" };

  const todoBtn = [
    {
      id: 3,
      text: "Delete",
    },
    { id: 4, text: "Edit" },
  ];
  return (
    <main>
      <section className="Header">
        <h1>TODO LIST</h1>
        <div className="btnholderL">
          {btnProps.map((item) => (
            <ButtonL key={item.id} btnData={item} />
          ))}
        </div>
      </section>

      <article className="inputHolder2">
        <input type="text" placeholder="Input Task" />
        <input type="text" placeholder="Input time" />
        <input type="text" placeholder="Input Date" />
        <ButtonL key={addBtn1.id} btnData={addBtn1} />
      </article>

      <article className="card">
        <span>
          <h3>{todo.data.text}</h3>
          <h3>{todo.data.time}</h3>
          <h3>{todo.data.date}</h3>
          {todoBtn.map((item) => (
            <ButtonL key={item.id} btnData={item} />
          ))}
        </span>
      </article>
    </main>
  );
};

export default TodoAsync;
