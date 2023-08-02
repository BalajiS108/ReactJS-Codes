// MyProductsV3.js
import React, { useState, useEffect } from "react";
import { Link, useLocation, Route } from "react-router-dom";
import ProductContext from "./ProductContext";
import axios from "axios";
import ProductDetailsV3 from "./ProductDetailsV3";

const MyProductsV3 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      if (result.data) {
        setProducts(result.data);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setDataLoaded(true); // Set dataLoaded to true after products are fetched and loading is false
    }
  }, [loading]);

  return (
    <ProductContext.Provider value={products}>
      <div>
        <h1>My Products</h1>
        <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {products.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  padding: 12,
                  border: "1px solid silver",
                  width: "180px",
                  listStyleType: "none",
                }}
              >
                <Link to={`/product/${item.id}`}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </ProductContext.Provider>
  );
};

export default MyProductsV3;
