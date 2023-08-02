import { useState } from "react";
import React from "react";

export default function Functioncode() {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", profile.name, profile.email);
    setProfile({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevSate) => {
      return {
        ...prevSate,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Email</label>

        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <button> Add</button>
      </form>
    </div>
  );
}
