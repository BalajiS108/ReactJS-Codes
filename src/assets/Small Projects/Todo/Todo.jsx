import { Button } from "bootstrap";
import { useState } from "react";

const Todo = () => {
  const [todo, setToDo] = useState({ id: "", title: "", description: "" });
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState();
  const [delId, setDelId] = useState();
  const InputData = (e) => {
    const { name, value } = e.target;
    setToDo((prev) => ({ ...prev, [name]: value }));
    console.log("todo", todo);
  };
  const addToDo = () => {
    setTodoList((prev) => [...prev, todo]);

    setToDo({ id: "", title: "", description: "" });
  };
  console.log("todolist", todoList);
  const editFun = (id) => {
    const index = todoList.findIndex((item) => item.id === id);
    if (index !== -1) {
      setEditId(id);
      setToDo(todoList[index]);
    }
  };
  const saveFun = () => {
    let updatedToDoList = [...todoList];
    console.log("updatedToDoList", updatedToDoList);
    updatedToDoList[editId] = todo;
    setTodoList(updatedToDoList);
    setEditId(null);
    setToDo({ id: "", title: "", description: "" });
  };
  const deleteFun = (index) => {
    console.log("index", index);
    setDelId(index);
    todoList.filter((item) => {
      if (index === item.id) return item;
    });
    setTodoList(todoList);
    // setDelIndex(-1);
  };

  return (
    <>
      <label htmlFor="">Id</label>
      <input
        type="number"
        name="id"
        value={todo.id}
        placeholder="id"
        onChange={InputData}
      />
      <input
        type="text"
        name="title"
        value={todo.title}
        placeholder="title"
        onChange={InputData}
      />
      <input
        type="text"
        name="description"
        value={todo.description}
        placeholder="description"
        onChange={InputData}
      />
      <button onClick={addToDo}>Add ToDo</button>
      <h2>Below is the Todo List:</h2>
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={item.id}>
              {editId === item.id ? (
                <>
                  <span>id={item.id},</span>
                  <span>title={item.title},</span>
                  <span>desc={item.description}</span>
                  <button onClick={saveFun}>Save</button>
                </>
              ) : (
                <>
                  <span>id={item.id},</span>
                  <span>title={item.title},</span>
                  <span>desc={item.description}</span>
                  <button onClick={() => editFun(item.id)}>Edit</button>
                  <button onClick={() => deleteFun(item.id)}>Delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
