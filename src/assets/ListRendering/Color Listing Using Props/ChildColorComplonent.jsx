import { useState } from "react";

const ChildColorComponent = (props) => {
  console.log(props.colorArray);
  return (
    <div>
      <ul>
        {props.colorArray.map((element, index) => {
          return (
            <div>
              <p style={{ backgroundColor: element }}>{element}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default ChildColorComponent;
