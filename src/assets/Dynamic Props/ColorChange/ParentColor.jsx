import { useState } from "react";
import ChildColor from "./ChildColor";

const ParentColor = () => {
  const [color, setColor] = useState("brown");
  const [bgcolor, setbgcolor] = useState("");
  const [padding, setPadding] = useState();
  const [margin, setMargin] = useState();
  const changeStyling = (color1, color2, paddingVal, marginVal) => {
    setColor(color1);
    setbgcolor(color2);
    setPadding(paddingVal);
    setMargin(marginVal);
  };
  console.log(color);

  return (
    <div>
      <h1>Parent Page</h1>
      <button onClick={() => changeStyling("red", "yellow", 10, 10)}>
        Apply Red Color
      </button>
      <button onClick={() => changeStyling("blue", "red", 20, 20)}>
        Apply Blue Color
      </button>
      <button onClick={() => changeStyling("green", "violet", 30, 30)}>
        Apply Green Color
      </button>
      <hr />

      <ChildColor
        colornew1={color}
        colornew2={bgcolor}
        paddingValue={padding}
        marginValue={margin}
      />
    </div>
  );
};

export default ParentColor;
