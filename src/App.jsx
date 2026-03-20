import React from "react";
import { useReducer, useState } from "react";
import "./App.css";
import Message from "../src/Components/Message";
import ConfirmMessage from "./Components/ConfirmMessage";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: Date.now(),
            todo: action.payload,
          },
        ];
      default:
        return state;
    }
  };
  const initialState = [];
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
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
            <button
              onClick={() => dispatch({ type: "ADD_TODO", payload: task })}
            >
              Add
            </button>
          </div>
          <ul>
            {state.map((item, index) => (
              <li key={index}>{item.todo}</li>
            ))}
          </ul>
        </div>
      </main>
      ;
    </>
  );
}

export default App;

// import { useReducer, useState } from "react";
// import "./App.css";
// import Message from "../src/Components/Message";
// import ConfirmMessage from "./Components/ConfirmMessage";
// const App = () => {

// const [task, setTask] = useState("");
// const [todo, setTodo] = useState([]);
// const [editIndex, setEditIndex] = useState(null);
// const [saveEdit, setSaveEdit] = useState("");
// const [showMessage, setShowMessage] = useState(null);

// const handleAction = () => {
//   if (!task) {
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(null), 1000);
//     return;
//   }
//   setTodo([...todo, task]);
//   setTask("");
//   setShowMessage("successful");
//   setTimeout(() => setShowMessage(null), 1000);
// };

// const startEdit = (index) => {
//   setSaveEdit(todo[index]);
//   setEditIndex(index);
// };

// const saveEdited = (index) => {
//   if (editIndex === index) {
//     const updatedList = todo.map((item, idx) =>
//       idx === index ? saveEdit : item,
//     );
//     setTodo(updatedList);
//     setEditIndex(null);
//     setSaveEdit("");
//     setShowMessage("successful");
//     setTimeout(() => setShowMessage(null), 1500);
//   }
// };

// const handleDelete = (indexToDelete) => {
//   const updatedTodo = todo.filter((_, index) => index !== indexToDelete);
//   setTodo(updatedTodo);
// };

//   return (
//     <>
//       {
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
//               <button
//                 disabled={editIndex !== null}
//                 onClick={handleAction}
//                 style={{
//                   cursor: editIndex !== null ? "not-allowed" : "pointer",
//                 }}
//               >
//                 Add
//               </button>
//               <>
//                 {showMessage === true && <Message />}
//                 {showMessage === "success" && <ConfirmMessage />}
//               </>
//             </div>
//           </div>
//           {todo.length === 0 ? (
//             <h1>TODO LIST IS EMPTY</h1>
//           ) : (
//             <ul className="task-Container">
//               {todo?.map((item, index) => (
//                 <li key={index} className="task">
//                   {editIndex !== index ? (
//                     item
//                   ) : (
//                     <>
//                       <input
//                         type="text"
//                         value={saveEdit}
//                         onChange={(e) => setSaveEdit(e.target.value)}
//                       />
//                     </>
//                   )}
//                   <span className="button_holder">
//                     <button
//                       onClick={() =>
//                         editIndex !== index
//                           ? startEdit(index)
//                           : saveEdited(index)
//                       }
//                     >
//                       {editIndex === index ? "Save Changes" : "Edit"}
//                     </button>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </main>
//       }
//     </>
//   );
// }

// export default App;

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
