import React, { useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", name);
    setSubmittedName(name); // Store the submitted name separately
    setName(""); // Reset the input field
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
      <p>Submitted Name: {submittedName}</p> {/* Display the submitted name */}
    </form>
  );
};

export default UseEffect;
