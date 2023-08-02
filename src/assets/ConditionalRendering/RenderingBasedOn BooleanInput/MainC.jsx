import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const MainC = () => {
  const [temp, setTemp] = useState(false);
  console.log("temp", temp);

  const changeChild = () => {
    setTemp(!temp);
  };

  return (
    <div>
      <button onClick={changeChild}>Change Child</button>
      {temp ? <Child1 /> : <Child2 />}
      {/* <>Hell</> */}
    </div>
  );
};

export default MainC;
