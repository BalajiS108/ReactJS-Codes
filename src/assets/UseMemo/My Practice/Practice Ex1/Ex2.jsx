import { useState, useEffect } from "react";

const MyComponent2 = ({ data, data1 }) => {
  const [dataval, setDataVal] = useState([]);
  const [dataval1, setDataVal1] = useState("");
  useEffect(() => {
    setDataVal(data);
    setDataVal1(data1);
  }, []);

  console.log();
  return (
    <>
      <ul>
        {data.map((item) => {
          return item * 2;
        })}
        <li key={item}>{item}</li>
      </ul>
    </>
  );
};

const MyComponent3 = () => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let data1 = "Balaji";
  return (
    <>
      <div>
        <MyComponent3 data={data} data1={data1} />
      </div>
    </>
  );
};
export default MyComponent3;
