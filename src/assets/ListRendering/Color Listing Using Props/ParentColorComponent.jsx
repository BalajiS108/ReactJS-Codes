import { useState } from "react";
import ChildColorComponent from "./ChildColorComplonent";

const ParentColorComponent = () => {
  const [color, setColor] = useState([]);
  let [newColor, setnewColor] = useState("");
  console.log("newColor", newColor);
  console.log("color", color);

  const addColor = () => {
    setColor((prevColor) => {
      return [...prevColor, newColor];
    });
    setnewColor("");
  };

  return (
    <div>
      <input
        type="text"
        value={newColor}
        onChange={(e) => setnewColor(e.target.value)}
      />
      <button onClick={addColor}>Click to Add color</button>
      <ChildColorComponent colorArray={color} />
    </div>
  );
};
export default ParentColorComponent;
