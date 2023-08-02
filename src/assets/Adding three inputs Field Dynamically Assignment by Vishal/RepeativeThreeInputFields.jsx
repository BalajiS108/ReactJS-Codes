import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const Repeate3InputFields = () => {
  const [inputElementData, setInputElementData] = useState([]);
  const [inputF, setInputF] = useState([]);
  const [values, setValues] = useState([]);
  const [flag, setFlag] = useState(false);

  const EnterData = (value, id) => {
    setInputElementData((prev) => {
      const newData = [...prev];
      newData.find((element) => element.id === id).value = value;
      setFlag(true);
      return newData;
    });
  };
  useEffect(() => {
    setValues((prev) => [prev, ...inputElementData]);
    setFlag(false);
  }, [flag]);
  const inputFields = [];
  const addInputFields = () => {
    for (let i = 0; i < 3; i++) {
      const id = uuidv4();
      const inputElement = {
        id: id,
      };
      inputFields.push(
        <input
          style={{ width: 250 }}
          type="text"
          key={id}
          onChange={(e) => EnterData(e.target.value, id)}
        />
      );
      setInputElementData((prev) => [...prev, inputElement]);
    }
    setInputF((prev) => [...prev, ...inputFields]);
  };
  return (
    <>
      <button onClick={addInputFields}>Click to add three inputs</button>
      <div>{inputF}</div>
      <h1>Values are:</h1>
      <ul>
        {values.map((item, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              {item.value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Repeate3InputFields;
