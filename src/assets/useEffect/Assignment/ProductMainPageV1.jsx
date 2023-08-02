import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ProductList123 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((item, index) => {
        return <div key="index">{item.title}</div>;
      })}
    </div>
  );
};
export default ProductList123;
