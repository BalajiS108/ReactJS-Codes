import { useState } from "react";
import ChildColor from "./ChildColor";

const ParentColor = () => {
  const [color, setColor] = useState("black");
  const changeColor = (color1) => {
    setColor(color1);
  };
  console.log(color);

  return (
    <div>
      <h1>Parent Page</h1>
      <button onClick={() => changeColor("red")}>Apply Red Color</button>
      <button onClick={() => changeColor("blue")}>Apply Blue Color</button>
      <button onClick={() => changeColor("green")}>Apply Green Color</button>
      <hr />

      <ChildColor colornew={color} />
    </div>
  );
};

export default ParentColor;
