// import React, { useState, useEffect } from "react";

import { useEffect, useState } from "react";

// const LocalStorageExample = () => {
//   const [name, setName] = useState("");
//   const [savedName, setSavedName] = useState("");

//   // Load the data from Local Storage when the component mounts
//   useEffect(() => {
//     const storedName = localStorage.getItem("name");
//     if (storedName) {
//       setSavedName(storedName);
//     }
//   }, []);

//   // Function to handle the input change and update the state
//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   // Function to handle the form submission and save the data to Local Storage
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("name", name);
//     setSavedName(name);
//     setName("");
//   };

//   return (
//     <div>
//       <h1>Local Storage Example</h1>
//       <p>Saved Name: {savedName}</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           //   value={name}
//           onChange={handleChange}
//         />
//         <button>Save</button>
//       </form>
//     </div>
//   );
// };

// export default LocalStorageExample;

const SessionStorageExample = () => {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    const LocalName = sessionStorage.getItem("name");
    if (LocalName) {
      setStoreName(LocalName);
    }
  }, [name]);

  const inputName = (e) => {
    setName(e.target.value);
  };
  console.log("name", name);

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("name", name);
    setName("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={inputName}
        />

        <button>Submit</button>
        <p>{storeName}</p>
      </form>
    </>
  );
};
export default SessionStorageExample;
