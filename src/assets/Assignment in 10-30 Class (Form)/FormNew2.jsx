import React, { useState } from "react";

const FormComponent1 = () => {
  // Initialize state as an object with properties for firstName, lastName, and email
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handler for updating form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    localStorage.setItem(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like sending it to an API or processing it.
    console.log("Form data submitted:", formData);
  };
  const setInputs = [];
  let type1 = ["text", "text", "text"];
  let name1 = ["firstName", "lastName", "email"];
  let placeholder = ["fname", "lName", "email"];
  for (let i = 0; i < 3; i++) {
    setInputs.push(
      <div key={i}>
        <label htmlFor="">{name1[i]}</label>
        <input
          type={type1[i]}
          key={i}
          placeholder={placeholder[i]}
          name={name1[i]}
          value={localStorage.getItem(name1[i])}
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor=""></label>
        {setInputs}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent1;
