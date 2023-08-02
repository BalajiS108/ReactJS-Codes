import { useState, useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const ProductSearch = () => {
  const { productId, brandId } = useParams();
  const [product, setProduct] = useState({});
  const location = useLocation();
  console.log(location);

  console.log("Product Id", productId);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}/${brandId}`)
      .then((result) => {
        console.log("single product", result.data);
        if (result.data) {
          setProduct(result.data);
        }
      });
    console.log("product", product);
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

export default ProductSearch;
