// import { useEffect, useState } from "react"

// const Lifecycle=()=>{

// const [counter,setCounter]=useState(0)
//     useEffect(()=>{
//         const incr=()=>{
//             setCounter((prev)=>prev+1)
//         }
//         return

//     },[])
//     return(

//         <>
//         <button onClick={incr}>INCR</button>

//         </>

//     )

// }
// export default Lifecycle

import { useState } from "react";

export default function CounterInterview() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span> 5
      <button
        onClick={() => {
          setCounter(counter + 5);
          setCounter(counter + 5);
          alert(counter);
          setCounter(counter + 5);
          setCounter(counter + 5);
        }}
      >
        Increment
      </button>
    </>
  );
}
