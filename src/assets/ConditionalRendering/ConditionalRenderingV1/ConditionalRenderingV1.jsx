import { useState } from "react";

const ConditionalRenderingV1 = () => {
  //   const [isActive, setIsActive] = useState(true);
  //   const [isInput, setIsInput] = useState(false);
  const [data, setData] = useState("");
  //   console.log("isInput", isInput);
  console.log("data", data);

  //   const inputContent = (e) =>
  //     e.target.value ? setIsInput(true) : setIsInput(false);

  const setNewValue = (e) => {
    setData(e.target.value);
    // data ? setIsInput(true) : setIsInput(false);
    // setIsInput(!isInput);
  };

  return (
    <div>
      {/* <button onClick={() => setIsActive((prevState) => !prevState)}>
        Toggle
      </button> */}
      {/* <p>You are {isActive ? "Active" : "Not Active"}</p> */}

      {/* {isActive && (
        <h1>
          <strong>Hello World</strong>
        </h1>
      )} */}
      <input type="text" onChange={(e) => setNewValue(e)} />

      <p> {data ? data : "Empty Field"}</p>
    </div>
  );
};

export default ConditionalRenderingV1;
