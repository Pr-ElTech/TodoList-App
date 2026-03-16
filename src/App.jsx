import { useState } from "react";
import "./App.css";
import Message from "../src/Components/Message";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAction = () => {
    if (!task) return alert("Please enter a task");

    if (editIndex !== null) {
      const updatedList = todo.map((item, index) =>
        index === editIndex ? task : item,
      );
      setTodo(updatedList);
      setEditIndex(null);
    } else {
      setTodo([...todo, task]);
    }

    setTask("");
  };

  const startEdit = (index) => {
    setTask(todo[index]);
    setEditIndex(index);
  };

  const handleDelete = (indexToDelete) => {
    const updatedTodo = todo.filter((_, index) => index !== indexToDelete);
    setTodo(updatedTodo);
  };

  return (
    <>
      {
        <main>
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
              <button onClick={handleAction}>
                {editIndex !== null ? "Save Changes" : "Add Task"}
              </button>
            </div>
          </div>
          {todo.length === 0 ? (
            <h1>TODO LIST IS EMPTY</h1>
          ) : (
            <ul className="task-Container">
              {todo?.map((item, index) => (
                <li key={index} className="task">
                  {item}
                  <span className="button_holder">
                    <button onClick={() => startEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </main>
      }
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import Message from "../src/Components/Message";

// function App() {
//   const [task, setTask] = useState("");
//   const [todo, setTodo] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [showMessage, setShowMessage] = useState(null);

//   const handleAction = () => {
//     if (!task) {
//       setShowMessage(true);
//       setTimeout(() => setShowMessage(false), 1000);
//       return;
//     }

//     if (editIndex !== null) {
//       const updatedList = todo.map((item, index) =>
//         index === editIndex ? task : item,
//       );
//       setTodo(updatedList);
//       setEditIndex(null);
//     } else {
//       setTodo([...todo, task]);
//     }

//     setTask("");
//   };

//   const startEdit = (index) => {
//     setTask(todo[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (indexToDelete) => {
//     const updatedTodo = todo.filter((_, index) => index !== indexToDelete);
//     setTodo(updatedTodo);
//   };
//   3;

//   return (
//     <>
//       {showMessage ? (
//         <Message />
//       ) : (
//         <main>
//           <div className="inputHolder">
//             <h1>
//               To-do <span>List</span>
//             </h1>
//             <div className="inputs">
//               <input
//                 type="text"
//                 placeholder="Input a task"
//                 value={task}
//                 onChange={(e) => setTask(e.target.value)}
//               />
//               <button onClick={handleAction}>
//                 {editIndex !== null ? "Save Changes" : "Add Task"}
//               </button>
//             </div>
//           </div>
//           <ul className="task-Container">
//             {todo?.map((item, index) => (
//               <li key={index} className="task">
//                 {item}
//                 <span className="button_holder">
//                   <button onClick={() => startEdit(index)}>Edit</button>
//                   <button onClick={() => handleDelete(index)}>Delete</button>
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </main>
//       )}
//     </>
//   );
// }

// export default App;
