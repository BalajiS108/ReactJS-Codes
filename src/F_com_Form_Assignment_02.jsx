import { useState } from "react";

const AssignmentForm_02 = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [city, setCity] = useState("");
  //   const [hobbies, setHobbies] = useState([]);
  //   const [rating, setRating] = useState(7);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    hobbies: [],
    rating: 5,
  });

  const valueChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevState) => {
      console.log("PrevState: ", prevState);
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setProfile((prevState) => {
      if (checked) {
        return {
          ...prevState,
          hobbies: [...prevState.hobbies, value],
        };
      } else {
        return {
          ...prevState,
          hobbies: prevState.hobbies.filter((hobby) => hobby !== value),
        };
      }
    });
  };

  return (
    <div>
      <div>
        <p>Name: {profile.name}</p>
        <input type="text" name="name" onChange={valueChange} />
      </div>
      <div>
        <p>Email: {profile.email}</p>
        <input type="text" name="email" onChange={valueChange} />
      </div>
      <div>
        <p>Password: {profile.password}</p>
        <input type="text" name="password" onChange={valueChange} />
      </div>
      <div>
        <label htmlFor="">Select your Gender:</label>
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
        <p>Your gender is: {profile.gender}</p>
      </div>
      <div>
        <label htmlFor="">Select your City:</label>
        <select name="city" id="" onChange={valueChange}>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
        </select>
        <p>Your Selected City is: {profile.city}</p>
      </div>
      <div>
        <label htmlFor="">Select your Hobbies:</label>
        <input
          type="checkbox"
          name="hobbies"
          value="Playing"
          onChange={handleCheckboxChange}
          checked={profile.hobbies === "Playing"}
        />
        <label htmlFor="checkbox1">Playing</label>
        <input
          type="checkbox"
          name="hobbies"
          value="Reading"
          onChange={handleCheckboxChange}
          checked={profile.hobbies === "Reading"}
        />
        <label htmlFor="checkbox2">Reading</label>
        <input
          type="checkbox"
          name="hobbies"
          value="Writing"
          onChange={handleCheckboxChange}
          checked={profile.hobbies === "Writing"}
        />
        <label htmlFor="checkbox3">Writing</label>
        <p>Your hobby/hobbies are{profile.hobbies}</p>
      </div>
      <div>
        <label htmlFor="">Select your Rating (1-10):</label>
        <input
          type="range"
          name="rating"
          min="1"
          max="10"
          value={profile.rating}
          onChange={valueChange}
        />
        <p>Your Selected Rating is: {profile.rating}</p>
      </div>
    </div>
  );
};

export default AssignmentForm_02;
