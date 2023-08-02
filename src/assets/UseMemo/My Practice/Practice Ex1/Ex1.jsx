import { useMemo } from "react";
import Component from "../../../styled components/Component";

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    console.log("data", data);
    // console.log("data1", data1);
    // Expensive computation on data
    return data.map((item) => item * 2);
  }, [data]); // Recalculate if "data" changes

  return (
    <>
      <div>{processedData}</div>
      {/* <div>{data1}</div> */}
    </>
  );
};
// export default MyComponent;

const MyComponent1 = () => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let data1 = "Balaji1";

  return (
    <div>
      <MyComponent data={data} data1={data1} />
    </div>
  );
};
export default MyComponent1;
