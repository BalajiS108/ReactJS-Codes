import { useContext } from "react";
import { MyContext } from "./Context";

const Child = () => {
  const { sharedData, count } = useContext(MyContext);
  return (
    <>
      <p>{sharedData}</p>
      <p>Count={count}</p>
    </>
  );
};
export default Child;
