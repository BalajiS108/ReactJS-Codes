import { useState } from "react";

const TodoList1 = () => {
  const [todoList, setTodoList] = useState([]);
  const [newtodo, setNewTodo] = useState("");

  const addListItem = (e) => {
    setNewTodo(e.target.value);
    console.log(newtodo);
  };
  const addtoList = () => {
    setTodoList((prev) => {
      console.log(todoList);
      return [...prev, newtodo];
    });
    setNewTodo("");
  };
  let updatedList = [];
  const deleteTodo = () => {
    setTodoList((prev) => {
      updatedList = [...prev];
      updatedList.pop();
      return updatedList;
    });
  };

  const updateTodo = () => {};

  return (
    <>
      <input type="text" value={newtodo} onChange={addListItem} />
      <button onClick={addtoList}>Add Item</button>

      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={item}>
              {item}
              <button onClick={deleteTodo}>Delete</button>
              <button onClick={updateTodo}>Mark Complete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList1;
