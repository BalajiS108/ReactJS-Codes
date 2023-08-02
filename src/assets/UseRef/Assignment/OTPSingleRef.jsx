import { useEffect, useRef } from "react";

const OTPSingleRef = () => {
  const inputRef = useRef([]);

  const inputChangeRef = (id) => {
    console.log("id=", id);
    console.log("CurrentRef", inputRef.current[id]);
    // currentRef.focus();
    // inputRef.current[id].style.backgroundColor = "red";
    if (id < 3) {
      console.log("id=", id);
      inputRef.current[id + 1].focus();
    }
    if (id === 3) {
      id = id + 1;
    }

    while ((id === 4) & (id >= 0)) {
      console.log("id=", id);
      inputRef.current[id - 1].focus();
    }
  };

  const inputFields = [];
  for (let i = 0; i < 4; i++) {
    inputFields.push(
      <input
        type="text"
        key={i}
        ref={(en) => (inputRef.current[i] = en)}
        maxLength={1}
        onChange={() => inputChangeRef(i)}
      />
    );
  }

  return <>{inputFields}</>;
};

export default OTPSingleRef;
