//Stateful
// import { useState } from "react";

// const WithoutUseRef = () => {
//   const [name, setName] = useState("");

//   const onShowValue = () => {
//     console.log("Name: ", name);
//   };

//   console.log("Re-Render: ", name);
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={onShowValue}>Show Value</button>
//     </div>
//   );
// };

// export default WithoutUseRef;

// Stateless

//here useRef points the element , like in below ex. nameInputRef points to e in js.
import { useRef } from "react";

const WithUseRef = () => {
  const nameInputRef = useRef(null);

  const onShowValue = () => {
    console.log("Name: ", nameInputRef.current.value);
  };

  console.log("Re-Render: ");
  return (
    <div>
      <input ref={nameInputRef} type="text" defaultValue={"Ajit"} />
      <button onClick={onShowValue}>Show Value</button>
    </div>
  );
};

export default WithUseRef;
