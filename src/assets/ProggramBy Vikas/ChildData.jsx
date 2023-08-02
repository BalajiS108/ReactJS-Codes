import { useState } from "react";
function Childlist({ listToParent, newdata }) {
  const [list, setlist] = useState(["vikas", "ajit", "deepak"]);
  //   setlist(newdata);
  listToParent(list);

  return (
    <>
      <div>
        <ul>
          {newdata.map((elm, i) => {
            return (
              <li key={i} style={{ color: elm }}>
                {elm}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Childlist;
