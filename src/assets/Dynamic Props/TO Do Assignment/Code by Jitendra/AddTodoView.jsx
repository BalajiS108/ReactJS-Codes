import { useState } from "react";
import ListTodo from "./ListTodo";

const AddTodoView = () => {
  const [task, setTask] = useState([]);
  const saveTask = () => {
    setTask((prevState) => {
      return [
        ...prevState,
        {
          title: document.getElementById("title").value,
          description: document.getElementById("desc").value,
        },
      ];
    });
    console.log("Tasks: ", task);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid text-center">
          <div className="row align-items-center bg-danger p-3">
            <div className="col-5 border border-black">
              <div id="form">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea rows="2" cols="58" id="desc" required></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={saveTask}
                >
                  Save
                </button>
              </div>
            </div>

            <ListTodo task={task} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTodoView;
