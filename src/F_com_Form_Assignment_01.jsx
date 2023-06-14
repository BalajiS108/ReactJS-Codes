import { useState } from "react";

const AssignmentForm_01 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [rating, setRating] = useState(7);

  // const [profile, setProfile] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   gender: "",
  //   city: "",
  //   hobbies: "",
  //   rating: 5,
  // });

  //   const handleCheckboxChange = (e) => {
  //     const { name, value } = e.target;

  //     setProfile((prevState) => {
  //       console.log("PrevState: ", prevState);

  //       return {
  //         ...prevState,
  //         [name]: value,
  //         ...prevState,
  //       };
  //     });
  //   };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies((prevHobbies) => [...prevHobbies, value]);
    } else {
      setHobbies((prevHobbies) =>
        prevHobbies.filter((hobby) => hobby !== value)
      );
    }
  };

  return (
    <div>
      <div>
        <p>Name: {name}</p>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <p>Email: {email}</p>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Password: {password}</p>
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Select your Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "female"}
        />
        <label htmlFor="female">Female</label>
        <p>Your gender is: {gender}</p>
      </div>
      <div>
        <label htmlFor="">Select your City:</label>
        <select name="city" id="" onChange={(e) => setCity(e.target.value)}>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
        </select>
        <p>Your Selected City is: {city}</p>
      </div>
      <div>
        <label htmlFor="">Select your Hobbies:</label>
        <input
          type="checkbox"
          name="hobbies"
          value="Playing"
          onChange={handleCheckboxChange}
          checked={hobbies === "Playing"}
        />
        <label htmlFor="checkbox1">Playing</label>
        <input
          type="checkbox"
          name="hobbies"
          value="Reading"
          onChange={handleCheckboxChange}
          checked={hobbies === "Reading"}
        />
        <label htmlFor="checkbox2">Reading</label>
        <input
          type="checkbox"
          name="hobbies"
          value="Writing"
          onChange={handleCheckboxChange}
          checked={hobbies === "Writing"}
        />
        <label htmlFor="checkbox3">Writing</label>
        <p>Your hobby/hobbies are{hobbies}</p>
      </div>
      <div>
        <label htmlFor="">Select your Rating (1-10):</label>
        <input
          type="range"
          name="rating"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <p>Your Selected Rating is: {rating}</p>
      </div>
    </div>
  );
};

export default AssignmentForm_01;
