import { useState } from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleIncrement1 = () => {
    setCount1((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Click to Incr count</button>
      <button onClick={handleIncrement1}>Click to Incr count1</button>
      <p> I am in Parent count ={count}</p>
      <p> I am in Parent count1 ={count1}</p>
      <Child1 count={count} />
    </div>
  );
};
export default Parent1;
