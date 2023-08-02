import { useCallback, useState } from "react";
import ChildC from "./ChildC";

const ParentC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incr1 = () => {
    setCount1((prev) => prev + 1);
  };
  const incr2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, [setCount2]);

  return (
    <>
      <button onClick={incr1}>Incr1</button>
      {/* <button onClick={incr2}>Incr2</button> */}
      <p>Count1={count1}</p>
      <p>Count2={count2}</p>
      <ChildC count1={count1} incr2={incr2} setCount2={setCount2} />
    </>
  );
};
export default ParentC;
