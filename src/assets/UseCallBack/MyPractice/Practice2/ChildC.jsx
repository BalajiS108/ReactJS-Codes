import React from "react";
import { memo } from "react";
const ChildC = ({ count1, incr2 }) => {
  console.log("count1 in Child", count1);
  console.log("Hello I am living in ChildC Component");
  //   console.log("count2 in Child", count2);
  return (
    <>
      <p>Count1 in Child1={count1}</p>
      <button onClick={incr2}>Incr2 from ChildC</button>
      {/* <p>Count2 in Child2={count2}</p> */}
    </>
  );
};

// const ChildC1 = React.memo(ChildC); //const ChildC1=memo(ChildC) is also ok.

export default ChildC;
