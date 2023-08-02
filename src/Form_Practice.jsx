import { useState } from "react";

const Form_Practice = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(profile);

  const InputData = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => InputData(e)}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => InputData(e)}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={(e) => InputData(e)}
      />
      {/* <input type="text" name="email" onChange={(e) => InputData(e)} /> */}
      <p>{profile.name}</p>
      <p>{profile.email}</p>
      <p>{profile.password}</p>
    </>
  );
};

export default Form_Practice;
