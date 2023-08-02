import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState("");

  return (
    <div>
      <input
        type="number"
        name="number"
        id=""
        // value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <p>No of input fields to make are: {count}</p>
      <Child count={count} />
    </div>
  );
};
export default Parent;
