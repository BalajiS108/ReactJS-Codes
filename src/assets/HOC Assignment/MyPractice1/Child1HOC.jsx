// import { useState } from "react";
// import HOC1 from "./HOC1";
// const Child1HOC = ({}) => {
//   const [fontSize, setFontSize] = useState(10);
//   return (
//     <>
//       <HOC1 size={fontSize}>
//         <p onClick={() => setFontSize((prev) => prev + 1)}>
//           Hare Krishna, I am in Child1
//         </p>
//       </HOC1>
//     </>
//   );
// };
// export default Child1HOC;

import { useState } from "react";
import HOC1 from "./HOC1";
const Child1HOC = ({ incrFont }) => {
  return (
    <>
      <HOC1>
        <p>Hare Krishna, I am in Child1</p>
        <button onClick={incrFont}>Incr Font</button>
      </HOC1>
    </>
  );
};
export default Child1HOC;
