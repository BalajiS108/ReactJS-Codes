import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "./ProductContext";

const ProductDetailsV3 = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  // const { products } = useContext(ProductContext);

  console.log("products", useContext(ProductContext));

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((result) => {
        if (result.data) {
          setProduct(result.data);
        }
      });
  }, [productId]);

  if (!product.id) {
    return <p>Please wait, we are loading details</p>;
  }

  return (
    <div>
      <h1>My Product details</h1>
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetailsV3;
