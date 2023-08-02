import { useState } from "react";
const Child1 = () => {
  const [showList, SetShowList] = useState(false);
  const list = ["A", "B", "C"];
  const displayList = () => {
    // showList ? "DisplayList" : "HideList";
    SetShowList(!showList);
  };

  return (
    <div>
      <p>I am from Child 1</p>
      <button onClick={displayList}>
        {showList ? "Hide List" : "Show List"}
      </button>
      {showList && (
        <ul>
          {list.map((item, index) => {
            return <li> {item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Child1;
