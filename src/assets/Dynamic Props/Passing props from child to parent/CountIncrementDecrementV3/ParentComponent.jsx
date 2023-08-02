import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    //console.log("On Clicked");
    setCount((prevState) => prevState + 1);
  };

  const onDecrement = () => {
    //console.log("Clicked");
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onIncrement}>Increment from parent</button>
      <ChildComponent
        onMyIncrement={onIncrement}
        onMyDecrement={onDecrement}
        count={count}
      />
    </>
  );
};
export default ParentComponent;
