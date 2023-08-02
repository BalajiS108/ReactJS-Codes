import { useState } from "react";

const ToggleV2 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <p>I am {isActive ? "Active" : "In-Active"}</p>
      <button onClick={() => setIsActive((state) => !state)}>
        Change to {!isActive ? "Active" : "In-Active"}
      </button>
    </>
  );
};

export default ToggleV2;
