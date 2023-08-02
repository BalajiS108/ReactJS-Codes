import React from "react";
const Child1 = React.memo(({ count }) => {
  console.log("Hello I am in ChildC");
  return (
    <div>
      <p>I am in Child & Count is {count}</p>
    </div>
  );
});
// const ChildMemo = React.memo(Child1);

export default Child1;
