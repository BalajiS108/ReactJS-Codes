import { useState } from "react";

const DynamicFormV1 = () => {
  const [selectData, setSelectData] = useState({
    option: "",
    placeholder: "",
    defaultvalue: "",
    label: "",
  });
  const [addData, setAddData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const InputData = (e) => {
    const { name, value } = e.target;
    setSelectData((prev) => {
      console.log("selectData", selectData);
      return { ...prev, [name]: value };
    });
  };

  const addDataFun = (e) => {
    e.preventDefault();
    // let newdata = [...addData];
    // newdata.push(selectData);
    // setAddData(newdata);
    setAddData((prevState) => {
      console.log("prevState", prevState);
      return [...prevState, selectData];
    });
    setSelectData({
      option: "",
      placeholder: "",
      defaultvalue: "",
      label: "",
    });

    console.log("addData", addData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // let formFinalData = [...finalData];
    // formFinalData.push(formFinalData);
    // setFinalData(formFinalData);
    // setFinalData((prevState) => {
    //   return [...prevState, addData];
    // });

    setFinalData(addData);
    setAddData([]);

    console.log("Final Data", finalData);
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
          <select name="option" onChange={(e) => InputData(e)}>
            <option name="text" value="text">
              Select Option
            </option>

            <option name="text" value={selectData.option}>
              text
            </option>
            <option name="password" value={selectData.option}>
              password
            </option>
            <option name="textarea" value={selectData.option}>
              textarea
            </option>
            <option name="email" value={selectData.option}>
              email
            </option>
            <option name="number" value={selectData.option}>
              number
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="">Placeholder</label>
          <input
            type="text"
            name="placeholder"
            value={selectData.placeholder}
            onChange={(e) => InputData(e)}
          />
        </div>
        <div>
          <label htmlFor="">Deafalut Value</label>
          <input
            type="text"
            name="defaultvalue"
            value={selectData.defaultvalue}
            onChange={(e) => InputData(e)}
          />
        </div>
        <div>
          <label htmlFor="">Label</label>
          <input
            type="text"
            name="label"
            value={selectData.label}
            onChange={(e) => InputData(e)}
          />
        </div>
        <div>
          <button onClick={addDataFun}>Add to UI</button>
        </div>
      </div>
      <div>
        {addData.map((data) => {
          return (
            <div
              key={data.label}
              style={{ padding: 20, border: "1px solid silver" }}
            >
              {/* <p>Placehlder: {data.placeholder}</p>
              <p>Label: {data.label}</p>
              <p> Deafault Value: {data.defaultvalue}</p> */}
              <label htmlFor="">{data.label}</label>
              <input
                type={data.option}
                placeholder={data.placeholder}
                // value={data.defaultvalue}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={submitForm}>Submit Form</button>
      </div>

      <ul>
        {finalData.map((innerArray) => {
          return (
            <li key={innerArray.label}>
              {/* {innerArray.map((item) => {
                return (
                  <div key={item}>
                    {item.label}= {item.defaultvalue}
                  </div>
                );
              })} */}
              {innerArray.label}= {innerArray.defaultvalue}
            </li>
          );
        })}
      </ul>
    </form>
  );
};
export default DynamicFormV1;
