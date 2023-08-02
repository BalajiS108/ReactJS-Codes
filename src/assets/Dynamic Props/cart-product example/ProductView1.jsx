import { useState } from "react";

const ProductView = () => {
  const [products, setProducts] = useState({
    name: "",
    price: "",
  });

  const onAddNewProduct = () => {
    setProducts((prevState) => {
      console.log(prevState);
      return [
        ...prevState,
        {
          name: "ABC",
          price: Math.floor(Math.random() * 200) + 1,
        },
      ];
    });
  };

  console.log("Products: ", products);
  return (
    <div>
      <input type="text" name="pname" onChange={valueChange} />
      <input type="text" name="price" onChange={valueChange} />
      <button onClick={onAddNewProduct}>Add Product</button>
    </div>
  );
};

export default ProductView;
