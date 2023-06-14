// import React from "react";
import { useState } from "react";

const UpDownCounter = () => {
  const [upCounter, setUpCounter] = useState(0);
  const [downCounter, setDownCounter] = useState(100);
  const upCount = () => {
    setUpCounter((prevStateValue) => {
      return prevStateValue + 1;
    });
  };
  const downCount = () => {
    setDownCounter((prevStateValue) => {
      return prevStateValue - 1;
    });
  };

  return (
    <div>
      <h1>Welcome to Updown Counter</h1>
      <div>
        <p>Upcounter value: {upCounter}</p>
      </div>
      <button onClick={upCount}>Increase Count by 1</button>

      <div>
        <p>DownCounter Value:{downCounter}</p>
        <button onClick={downCount}>Decrease count by 1</button>
      </div>
    </div>
  );
};
export default UpDownCounter;
