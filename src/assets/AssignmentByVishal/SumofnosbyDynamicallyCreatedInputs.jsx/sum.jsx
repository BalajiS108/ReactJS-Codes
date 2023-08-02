import { useEffect, useState } from "react";

const SumInputs = () => {
  const [inputFields, setInputFields] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [sum, setSum] = useState(0);

  const inputFieldArray = [];
  const inputValues = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setSum((prev) => prev + Number(inputValue));
  }, [inputValue]);

  const inputFieldsFun = () => {
    let fieldNos = 4;

    for (let i = 0; i < fieldNos; i++) {
      inputFieldArray.push(
        <input type="number" key={i} onChange={inputValues} />
      );
    }
    setInputFields(inputFieldArray);

    console.log("fieldNos", inputFieldArray);
  };
  return (
    <>
      <button onClick={inputFieldsFun}>Enter Four input Fields</button>
      <p>{inputFields}</p>
      <p>sum = {sum}</p>
    </>
  );
};
export default SumInputs;
