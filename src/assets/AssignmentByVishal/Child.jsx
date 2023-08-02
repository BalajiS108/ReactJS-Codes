import React, { useState } from "react";

const Child = ({ count }) => {
  const [inputFields, setInputFields] = useState([]);
  const [add, setAdd] = useState(0);

  const handleInputValues = (value) => {
    setInputFields((prevFields) => [...prevFields]);
    setAdd((prev) => prev + Number(value));
  };
  console.log("i/p fileds", inputFields);

  const renderInputFields = () => {
    const inputFieldsArray = [];
    for (let i = 0; i < count; i++) {
      inputFieldsArray.push(
        <input
          key={i}
          type="number"
          onChange={(e) => handleInputValues(e.target.value)}
        />
      );
      console.log("I am in input field");
    }
    return inputFieldsArray;
  };

  return (
    <>
      <button onClick={() => setInputFields(renderInputFields())}>
        Click to get input fields
      </button>
      <div>{inputFields}</div>
      <div>{add}</div>
    </>
  );
};

export default Child;
