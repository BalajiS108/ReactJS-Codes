import React, { useState } from "react";

const FormComponent1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    localStorage.setItem(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const name1 = ["firstName", "lastName", "email"];
  const placeholder = ["fname", "lName", "email"];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {name1.map((name, index) => (
          <div key={index}>
            <label htmlFor="">{name}</label>
            <input
              type="text"
              placeholder={placeholder[index]}
              name={name}
              value={localStorage.getItem(name) || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent1;
