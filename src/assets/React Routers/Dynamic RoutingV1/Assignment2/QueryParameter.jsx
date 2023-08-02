// // import { useNavigate } from "react-router-dom";

// // const QueryParameter = () => {
// //   const navigateTo = useNavigate();

// //   const handlClick = () => {
// //     const queryParams = new URLSearchParams();
// //     queryParams.append("Nokia", "Samsung");
// //     navigateTo(`http://localhost:5174/?{queryParams.toString()}`);
// //   };
// //   return (
// //     <>
// //       <button onClick={handlClick}>Samsung</button>
// //       {/* <button>Oppo</button>
// //       <button>Micromax</button>
// //       <button>Nokia</button> */}
// //     </>
// //   );
// // };
// // export default QueryParameter;

// import React from "react";
// import { useSearchParams } from "react-router-dom";

// export default function QueryParameter() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleClick1 = () => {
//     setSearchParams({ Nokia: "nokia" });
//   };
//   const handleClick2 = () => {
//     setSearchParams({ Samsung: "samsung" });
//   };
//   const handleClick3 = () => {
//     setSearchParams({ Micromax: "micromax" });
//   };

//   //   const handleChange = (event) => {
//   //     setSearchParams({ query: event.target.value });
//   //   };

//   console.log(searchParams.get("Nokia"));
//   console.log(searchParams.get("nokia"));

//   return (
//     <div>
//       <button onClick={handleClick1}>Nokia</button>
//       <button onClick={handleClick2}>Samsung</button>
//       <button onClick={handleClick3}>Micromax</button>

//       {/* <input id="search" onChange={handleChange} /> */}
//     </div>
//   );
// }
