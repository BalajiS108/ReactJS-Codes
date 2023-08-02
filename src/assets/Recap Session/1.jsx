import { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setProductList(data);
      });
  }, []);

  return (
    <>
      <p>My Products</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, padding: 12 }}>
        {isLoading ? (
          <p>Loading, please wait</p>
        ) : (
          productList.map((item) => {
            return (
              <div key={item.id} style={{ width: 200, height: 200 }}>
                <img src={item.image} width={100} height={100} />{" "}
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Products;
