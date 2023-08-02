import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductListUI = () => {
  const [products, setProducts] = useState(null);

  // Third way
  useEffect(() => {
    (async () => {
      const results = await fetch("https://fakestoreapi.com/products");
      const parsedResult = await results.json();
      setProducts(parsedResult);
    })();
  }, []);

  console.log("Re-Render");

  return (
    <div>
      <h1>My Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListUI;
