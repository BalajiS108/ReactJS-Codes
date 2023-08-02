import { useLayoutEffect, useState } from "react";

const Child2 = () => {
  const [showlist, setShowlist] = useState(false);
  const list = ["Balaji", "Pune", "VSS"];
  const displayList = () => {
    setShowlist(!showlist);
  };

  return (
    <div>
      <p>I am from Child 2</p>
      <button onClick={displayList}>
        {showlist ? "Hide List" : "Show List"}
      </button>
      {showlist && (
        <ul>
          {list.map((item, idex) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Child2;
