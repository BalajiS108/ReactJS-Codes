import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
    completionStatus: "Not Completed",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, taskInput]);
    setTaskInput({
      title: "",
      description: "",
      completionStatus: "Not Completed",
    });
  };

  const saveTask = () => {
    console.log(tasks); // Perform saving logic here
  };

  return (
    <div>
      <label htmlFor="">Task Title</label>
      <input
        type="text"
        name="title"
        value={taskInput.title}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="">Task Description</label>
      <input
        type="text"
        name="description"
        value={taskInput.description}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="">Task Completion Status</label>
      <input
        type="checkbox"
        name="completionStatus"
        checked={taskInput.completionStatus === "Completed"}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={addTask}>Add Task</button>
      <br />
      <button onClick={saveTask}>Save All Tasks</button>
      <br />
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <hr />
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Completion Status: {task.completionStatus}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
