import { useEffect, useState } from "react";
import SecondP from "./secondP";
const FirstP = () => {
  const [resourse, setResourse] = useState("");
  useEffect(() => {
    console.log("render");
    // <SecondP />;
  });

  return (
    <div>
      <button
        onClick={() => {
          setResourse("Post");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResourse("Users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setResourse("Comments");
        }}
      >
        Comments
      </button>
      <h1>{resourse}</h1>
      <div>{resourse && <SecondP />}</div>
    </div>
  );
};

export default FirstP;
