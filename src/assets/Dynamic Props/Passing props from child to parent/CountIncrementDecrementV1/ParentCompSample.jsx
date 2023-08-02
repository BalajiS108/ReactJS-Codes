import { useState } from "react";
import ChildCompSample from "./ChildCompSample";
import ChildCompSample1 from "./ChildCompSample1";

const ParentCompSample = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    console.log("On Clicked");
    setCount((prevState) => prevState + 1);
  };

  const onDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onIncrement}>Increment from parent</button>

      <ChildCompSample onMyIncrement={onIncrement} />
      <ChildCompSample1 onMyDecrement={onDecrement} />
    </>
  );
};

export default ParentCompSample;
