import { useEffect, useReducer, useState } from "react";
import "../App.css";
import Message from "./Message";
import axios from "axios";
import ConfirmMessage from "./ConfirmMessage";
import toast, { Toaster } from "react-hot-toast";

const List = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [saveEdit, setSaveEdit] = useState("");
  const [showMessage, setShowMessage] = useState(null);

  const handleAction = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setTodo([...todo, response.data]);
      setTodo(response.data);
    } catch (error) {
      console.log("Error fetching Api", error.Message);
    }
  };

  async function addBtn() {
    if (!task.trim()) {
      toast.error("Task cannot be empty! ❌");
      console.log("space Empty");
      return;
    }
    const addedData = {
      title: task,
      Status: true,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        addedData,
      );
      setTodo([...todo, response.data]);
      toast.success("Task added successfully! 🎉");
      setTask("");
    } catch (error) {
      console.error("Error Adding data", error.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      const filteredList = todo.filter((item) => item.id !== id);
      setTodo(filteredList);
      toast.success(
        `${todo.map((item) => item.title)} successfully deleted!🎉`,
      );
    } catch (error) {
      console.error("Error Adding data", error.message);
    }
  };

  const startEdit = (item) => {
    setEditIndex(item.id);
    setSaveEdit(item.title);
  };

  const handleUpdate = async (id) => {
    const updatedData = {
      title: saveEdit,
    };
    try {
      const newData = await axios.patch(
        `http://localhost:3000/products/${id}`,
        updatedData,
      );
      const updatedNewList = todo.map((item) =>
        item.id === id ? newData.data : item,
      );

      setTodo(updatedNewList);
      toast.success("Task updated! 📝");
      setEditIndex(null);
    } catch (error) {
      toast.error("Failed to update.! ❌");
      console.log("Error moving task", error.message);
    }
  };
  useEffect(() => {
    handleAction();
  }, []);

  return (
    <>
      {
        <main>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="inputHolder">
            <h1>
              To-do <span>List</span>
            </h1>
            <div className="inputs">
              <input
                type="text"
                placeholder="Input a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                disabled={editIndex !== null}
                onClick={addBtn}
                style={{
                  cursor: editIndex !== null ? "not-allowed" : "pointer",
                }}
              >
                Add
              </button>
              <>
                {showMessage === true && <Message />}
                {showMessage === "success" && <ConfirmMessage />}
              </>
            </div>
          </div>
          {todo.length === 0 ? (
            <h1>TODO LIST IS EMPTY</h1>
          ) : (
            <ul className="task-Container">
              {todo?.map((item, index) => (
                <li key={item.id} className="task">
                  {editIndex !== item.id ? (
                    item.title
                  ) : (
                    <>
                      <input
                        type="text"
                        value={saveEdit}
                        onChange={(e) => setSaveEdit(e.target.value)}
                      />
                    </>
                  )}
                  <span className="button_holder">
                    <button
                      onClick={() =>
                        editIndex !== item.id
                          ? startEdit(item)
                          : handleUpdate(item.id)
                      }
                    >
                      {editIndex === item.id ? "Save Changes" : "Edit"}
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </main>
      }
    </>
  );
};

export default List;
