const ListTodo = (props) => {
  console.log("task view: ", props);

  for (let i = 0; i < props.task.length; i++) {
    let tr_node = document.createElement("tr");
    let th_node = document.createElement("th");
    th_node.setAttribute("scope", "row");
    const textnode0 = document.createTextNode(i + 1);
    th_node.appendChild(textnode0);

    let td_node_1 = document.createElement("td");
    const textnode1 = document.createTextNode(props.task[i].title);
    td_node_1.appendChild(textnode1);

    let td_node_2 = document.createElement("td");
    const textnode2 = document.createTextNode(props.task[i].description);
    td_node_2.appendChild(textnode2);

    let td_node_3 = document.createElement("td");
    const textnode3 = document.createTextNode("status");
    td_node_3.appendChild(textnode3);

    tr_node.appendChild(th_node);
    tr_node.appendChild(td_node_1);
    tr_node.appendChild(td_node_2);
    tr_node.appendChild(td_node_3);
    document.getElementById("table_body").appendChild(tr_node);
  }
  // document.getElementById("table_body").appendChild(data);
  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sl no.</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody id="table_body"></tbody>
      </table>
    </div>
  );
};

export default ListTodo;
