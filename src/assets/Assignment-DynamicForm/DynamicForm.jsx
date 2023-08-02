import { useState } from "react";

const DynamicForm = () => {
  const [option, setOption] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [label, setLabel] = useState("");
  const [addData, setAddData] = useState([]);
  const time = new Date().getMilliseconds;

  const addDataFun = () => {
    const newdata = { placeholder, defaultValue, label };
    setAddData((addData) => [...addData, newdata]);
  };

  return (
    <form action="">
      <div
        style={{
          padding: 20,
          border: "1px solid silver",
          marginTop: 10,
          display: "flex",
        }}
      >
        <div>
          <label htmlFor="">Select options</label>
          <select name="option" onChange={(e) => setOption(e.target.value)}>
            <option value="option1">text</option>
            <option value="option2">password</option>
            <option value="option3">textarea</option>
            <option value="option3">email</option>
            <option value="option3">number</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Placeholder</label>
          <input type="text" onChange={(e) => setPlaceholder(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Deafalut Value</label>
          <input
            type="text"
            onChange={(e) => setDefaultValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Label</label>
          <input type="text" onChange={(e) => setLabel(e.target.value)} />
        </div>
        <div>
          <button onClick={addDataFun}>Add to UI</button>
        </div>
      </div>
      <div>
        {addData.map((data) => {
          <div key={time}>
            <p>{data.placeholder}</p>
            <p>{data.defaultValue}</p>
            <p>{data.label}</p>
          </div>;
        })}
      </div>
    </form>
  );
};
export default DynamicForm;
