// import { useState } from "react";
// import HOC1 from "./HOC1";
// const Child2HOC = ({}) => {
//   const [fontSize, setFontSize] = useState(10);
//   return (
//     <>
//       <HOC1 size={fontSize}>
//         <p onMouseOver={() => setFontSize((prev) => prev + 1)}>
//           Hare Krishna, I am in Child1
//         </p>
//       </HOC1>
//     </>
//   );
// };
// export default Child2HOC;

import HOC1 from "./HOC1";
const Child2HOC = ({ incrFont }) => {
  //   const [fontSize, setFontSize] = useState(10);
  return (
    <>
      <HOC1>
        <p>Hare Krishna, I am in Child1</p>
        <button onClick={incrFont}>Incr Font</button>
      </HOC1>
    </>
  );
};
export default Child2HOC;
