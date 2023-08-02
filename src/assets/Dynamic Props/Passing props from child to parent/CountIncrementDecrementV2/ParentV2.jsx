import { useState } from "react";
import ChildV2 from "./ChildV2";
const ParentV2 = () => {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function DecrementCount() {
    setCount((prevCount) => {
      if (count === 0) {
        return 0;
      }
      return prevCount - 1;
    });
  }

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={IncrementCount}>Increment Count From Parent</button>
      <button onClick={DecrementCount}>Decrement Count From Parent</button>
      <ChildV2
        IncrementCountChild={IncrementCount}
        DecrementCountChild={DecrementCount}
      />
    </div>
  );
};

export default ParentV2;
