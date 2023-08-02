import { useState } from "react";
import ShowToDo from "./ShowTodo";

const AddToDoList = () => {
  const [todolist, settodolist] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    completionStatus: "Not Completed",
  });

  const valueChange = (e) => {
    const { name, value, checked } = e.target;

    setTask((prevState) => {
      return {
        ...prevState,
        [name]: value,
        completionStatus: checked ? "Completed" : "Not Completed",
      };
    });
  };

  const addTask = () => {
    settodolist((prevlist) => [...prevlist, task]);
    setTask({
      title: "",
      description: "",
      completionStatus: checked ? "Completed" : "Not Completed",
    });
  };

  const saveTask = () => {
    console.log(task); // Perform saving logic here
  };
  const formsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formsubmit}>
        <label htmlFor="">Task Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={valueChange}
        />
        <p>{task.title}</p>
        <br />
        <label htmlFor="">Task Description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={valueChange}
        />
        <p>{task.description}</p>
        <br />
        <label htmlFor="">Task Completion Status</label>
        <input type="checkbox" name="checkbox" onChange={valueChange} />
        <br />

        <button
          style={{ marginBottom: "30px", marginTop: "30px" }}
          onClick={addTask}
        >
          Add Task
        </button>

        <button
          style={{ marginBottom: "30px", marginTop: "30px" }}
          onClick={saveTask}
        >
          Save Task
        </button>
        <ShowToDo data={todolist} />
      </form>
    </div>
  );
};

export default AddToDoList;
