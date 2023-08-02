// import React from "react";
// const HOC1 = ({ size, children }) => {
//   return (
//     <div
//       style={{
//         color: "blue",
//         border: "1px solid red",
//         marginTop: 20,
//         fontSize: size,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default HOC1;

import React, { useState } from "react";
const HOC1 = ({ children }) => {
  const [fontSize, setFontSize] = useState(10);
  const incrFont = () => {
    setFontSize((prev) => prev + 1);
  };
  console.log("font Size", fontSize);
  return (
    <>
      <div
        onClick={incrFont}
        style={{
          color: "blue",
          border: "1px solid red",
          marginTop: 20,
          fontSize: fontSize,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default HOC1;
