const ShowToDo = (props) => {
  //   const { title, description, completionStatus } = props.data;
  console.log("props:", props.data);
  console.log("checking datatype", Array.isArray(props.data));

  return (
    // <div
    //   style={{
    //     border: "1px solid silver",
    //     display: "flex",
    //     height: "300px",
    //     width: "500px",
    //   }}
    // >
    //   <div style={{ marginRight: "30px" }}>{title}</div>
    //   <div style={{ marginRight: "30px" }}>{description}</div>
    //   <div style={{ marginRight: "30px" }}>{completionStatus}</div>
    // </div>

    <div>
      <h1>To Do List</h1>
      <ul
        style={{ width: "500px", height: "500px", border: "1px solid silver" }}
      >
        {props.data.map((item) => {
          return (
            <li>
              <div>Title:{item.title}</div>
              <div>Description:{item.description}</div>
              <div>Completion Status:{item.completionStatus}</div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowToDo;
