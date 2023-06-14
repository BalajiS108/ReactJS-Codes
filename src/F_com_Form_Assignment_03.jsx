import { useState } from "react";

const Personal_Data_Login = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    // console.log(setProfile(e.target.value));
    // console.log(profile.name);
    setProfile((prevState) => {
      console.log("prev state:", prevState);
      console.log(profile[name], profile[name].value);
      return {
        ...prevState,
        [name]: value,
        // setProfile(e.target.value);
        // console.log("value:-", e.target.value);
      };
    });
  };

  return (
    <div>
      <h1>Enter your personal information Below</h1>
      <input type="text" name="name" onChange={inputChange} />
      <p>Your Name is:= {profile.name}</p>
      <input type="text" name="email" onChange={inputChange} />
      <p>Your Email is:= {profile.email}</p>
    </div>
  );
};
export default Personal_Data_Login;
