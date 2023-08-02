import Loader from "./Loader.Layout";

const ProductList = ({ products }) => {
  if (!products) {
    return <Loader />;
  }

  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return products.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>₹ {item.price}</p>
      </div>
    );
  });
};

export default ProductList;
