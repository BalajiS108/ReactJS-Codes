import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [value, setValue] = useState(0);

  let x = 0;
  const x1 = useMemo(() => {
    console.log("Hello");
    // console.log("x=", x);
    x = x + 2;
    return x;
  }, []);

  return (
    <>
      {/* <div>x={x}</div> */}
      <div>x={x1}</div>
    </>
  );
};
export default UseMemo;
