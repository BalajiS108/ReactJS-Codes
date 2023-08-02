import { useState } from "react";
const ColorListRender = () => {
  const [color, setColor] = useState([]);
  const [newColor, setNewColor] = useState("");

  const addNewColor = () => {
    setColor((prevColor) => [...prevColor, newColor]);
    setNewColor("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter color name"
        value={newColor}
        onChange={(e) => {
          setNewColor(e.target.value);
        }}
      />
      <button onClick={addNewColor}>Add Color</button>
      {/* <div>
        <p style={{ backgroundColor: newColor }}>{newColor}</p>
      </div> */}
      <ul>
        {color.map((colorItem, index) => {
          return (
            <li key={index} style={{ listStyleType: "none" }}>
              <div>
                <p style={{ backgroundColor: colorItem }}>{colorItem}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ColorListRender;
