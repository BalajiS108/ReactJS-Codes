import React, { useEffect } from "react";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ProductPage = () => {
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(1);
  useEffect(() => {
    (async () => {
      const results = await fetch("https://fakestoreapi.com/products");
      const parsedResult = await results.json();
      setProducts(parsedResult);
    })();
  });

  //   if (!products) {
  //     return (
  //       <BounceLoader
  //         color={"#325795"}
  //         loading={true}
  //         cssOverride={override}
  //         size={150}
  //         aria-label="Loading Spinner"
  //         data-testid="loader"
  //       />
  //     );
  //   }

  const nextItem = () => {
    console.log("count=", count);
    setCount((prevCount) => (prevCount === 20 ? 1 : prevCount + 1));
  };
  const prevItem = () => {
    console.log("count=", count);
    setCount((prevCount) => (prevCount === 1 ? 20 : prevCount - 1));
  };

  if (!products) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <button onClick={prevItem}>Prev</button>
      <Router>
        <Routes>
          {products.map((item) => {
            return (
              <Route
                key={item.id}
                path={`/${item.id}`}
                element={<div>{item.title}</div>}
              ></Route>
            );
          })}
        </Routes>
      </Router>
      <button onClick={nextItem}>NEXT</button>
    </div>
  );
};
export default ProductPage;
