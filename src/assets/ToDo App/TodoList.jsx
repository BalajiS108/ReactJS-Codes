import { useState } from "react";

const Todo1 = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const InputTodo = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };
  const addTodo = () => {
    console.log("todo", todo);
    console.log("todolist", todoList);
    setTodoList((prev) => [...prev, todo]);
    setTodo("");
  };

  const editTodo = (index) => {
    setEditIndex(index);
    console.log("index", index);
    setTodo(todoList[index]);
  };

  const SaveFun = () => {
    if (editIndex !== -1) {
      let updatedlist = [...todoList];
      updatedlist[editIndex] = todo;
      setTodoList(updatedlist);
      setEditIndex(-1);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    console.log("todolist in delete fun", todoList);
    todoList.splice(index, 1);
    setTodoList((prev) => {
      return [...prev];
    });
  };

  return (
    <div>
      <input type="text" value={todo} onChange={(e) => InputTodo(e)} />
      <button onClick={addTodo}>Add ToDo</button>
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <span>{item}</span> <button onClick={SaveFun}>Save</button>
                </>
              ) : (
                <>
                  <span>{item}</span>
                  <button onClick={(e) => editTodo(index)}>Edit</button>
                  <button onClick={(e) => deleteTodo(index)}>Delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todo1;

// import { useState } from "react";

// const Todo = () => {
//   const [todo, setTodo] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleAddTodo = () => {
//     setTodoList((prev) => [...prev, todo]);
//     setTodo("");
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setTodo(todoList[index]);
//   };

//   const handleSave = () => {
//     if (editIndex !== -1) {
//       const updatedTodoList = [...todoList];
//       updatedTodoList[editIndex] = todo;
//       setTodoList(updatedTodoList);
//       setEditIndex(-1);
//       setTodo("");
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedTodoList = todoList.filter((_, idx) => idx !== index);
//     setTodoList(updatedTodoList);
//   };

//   return (
//     <div>
//       <input type="text" value={todo} onChange={handleChange} />
//       <button onClick={handleAddTodo}>Add ToDo</button>
//       <ul>
//         {todoList.map((item, index) => (
//           <li key={index}>
//             {editIndex === index ? (
//               <>
//                 {/* <input type="text" value={todo} onChange={handleChange} /> */}
//                 <span>{todo}</span>
//                 <button onClick={handleSave}>Save</button>
//               </>
//             ) : (
//               <>
//                 <span>{item}</span>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo;
