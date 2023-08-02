import { useState } from "react";

const AssignmentForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    hobbies: "",
    rating: 5,
  });

  const valueChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevState) => {
      console.log("PrevState: ", prevState);

      return {
        ...prevState,
        [name]: value,
        // ...pr
        // evState,
      };
    });
  };
  return (
    <div>
      <div>
        <p>Name:-{profile.name}</p>
        <input type="text" name="name" onChange={valueChange} />
      </div>
      <div>
        <p>Email:-{profile.email}</p>
        <input type="text" name="email" onChange={valueChange} />
      </div>
      <div>
        <p>password:-{profile.password}</p>
        <input type="text" name="password" onChange={valueChange} />
      </div>
      <div>
        <label htmlFor="">Select your Gender:-</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={valueChange}
          checked={profile.gender === "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={valueChange}
          checked={profile.gender === "female"}
        />
        <label htmlFor="female">Female</label>
        <p>Your gender is:{profile.gender}</p>
      </div>
      <div>
        <label htmlFor="">Select your City:</label>
        <select name="city" id="">
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
        </select>
        <p>Your Selected City is: {profile.city}</p>
      </div>
      <div>
        <input type="checkbox" name="checkbox1" id="" />
        <label htmlFor="checkbox1">Playing</label>
        <input type="checkbox" name="checkbox2" id="" />
        <label htmlFor="checkbox2">Reading</label>
        <input type="checkbox" name="checkbox3" id="" />
        <label htmlFor="checkbox3">Writing</label>
      </div>
      <div>
        <input type="range" name="slider" id="" min="0" max="10" value="10" />
      </div>
    </div>
  );
};

export default AssignmentForm;

// Name
// Email
// Password
// City from Dropdown
// Gender from Radio
// Hobbies from checkboxes
// Rating from Slider
// Rating -> 1-10
