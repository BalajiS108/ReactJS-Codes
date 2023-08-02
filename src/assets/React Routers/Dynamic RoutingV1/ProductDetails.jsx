import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import axios from "axios";

const ProductDeatilsAssignment = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  //   const location = useLocation();
  //   console.log("location", location);

  //   const queryParams = new URLSearchParams(location.search);

  //   // You can now read specific query parameters using the get method
  //   //   const paramValue = queryParams.get("name");
  //   //   const paramValue1 = queryParams.get("city");
  //   //   console.log("Param values:-", paramValue, paramValue1);

  //   // Convert all query parameters to an object
  //   const queryParamsObj = {};
  //   queryParams.forEach((value, key) => {
  //     queryParamsObj[key] = value;
  //   });

  //   console.log("queryParamsObj=", queryParamsObj);

  //   return null;

  console.log("Product Id", productId);
  //   console.log("Product Brand", brand);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`).then((result) => {
      console.log("single product", result.data);
      if (result.data) {
        setProduct(result.data);
      }
    });
  }, [productId]);

  if (!product.id) {
    return <div>Wait ! we are loading the product details</div>;
  }

  return (
    <div>
      <h1>Product Details....</h1>

      <div
        style={{
          marginTop: 50,
          padding: 50,
          display: "flex",
          flexDirection: "column",
          width: 400,
          height: 400,
          border: "1px solid silver",
          backgroundColor: "grey",
        }}
      >
        <p>Brand :{product.brand}</p>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <img
          style={{ height: 200, width: 200 }}
          src={product.images[0]}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductDeatilsAssignment;
