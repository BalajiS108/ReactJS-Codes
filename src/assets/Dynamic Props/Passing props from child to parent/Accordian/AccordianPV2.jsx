import { useState } from "react";
import AccordianCV2 from "./AccordianCV2";

const initialState = [
  {
    name: "name",
    value: "",
    type: "text",
    placeholder: "Enter Name",
  },
  {
    name: "city",
    value: "",
    type: "text",
    placeholder: "Enter City",
  },
  {
    name: "age",
    value: "",
    type: "number",
    placeholder: "Enter Age",
  },
  {
    name: "contact",
    value: "",
    placeholder: "Enter Contact Number",
  },
];

const AccordianPV2 = () => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([...initialState]);

  // Event handler for input field changes
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFields((prevState) => {
      return prevState.map((item) => {
        if (item.name === name) {
          // Update the value of the changed field
          item.value = value;
        }
        return item;
      });
    });
  };

  // Event handler for adding data to the array
  const onAddData = () => {
    const result = fields.reduce((acc, current) => {
      acc[current.name] = current.value;
      return acc;
    }, {});

    // Generate a unique id using current timestamp
    result.id = new Date().getTime();

    setData((prevState) => [...prevState, result]);
    setFields([...initialState]); // Reset fields to initial state after adding data
  };

  console.log("Data", fields);

  return (
    <div>
      {/* Render input fields */}
      {fields.map((item) => {
        return (
          <div key={item.name}>
            <input
              name={item.name}
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              onChange={onInputChange}
            />
          </div>
        );
      })}

      {/* Button to add data */}
      <button onClick={onAddData}>Add</button>

      {/* Render the AccordianCV2 component and pass the data array */}
      <AccordianCV2 array={data} />
    </div>
  );
};

export default AccordianPV2;
