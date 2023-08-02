import { useState } from "react";
import ChildComp from "./ChildComp";
const ParentComp = () => {
  const [count, setCount] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <ChildComp count={count} />
    </>
  );
};

export default ParentComp;
