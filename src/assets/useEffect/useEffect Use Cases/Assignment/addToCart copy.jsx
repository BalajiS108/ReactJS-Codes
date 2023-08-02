import { useEffect, useState } from "react";
import styled from "styled-components";

const AddToCart1 = () => {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        // We have data
        // Normal Approach
        /* let count = 0;
        for (let i = 0; i < data.length; i++) {
          count += data[i].price;
        } */

        // Approach 2 with reduce
        const count = data.reduce((acc, current) => acc + current.price, 0);

        setTotalPrice(count.toFixed(2));
        localStorage.setItem("data1", JSON.stringify(data));
        // setProducts(data1);
        // setProducts(
        //   data.map((product) => ({ ...product, addedToCart: false }))
        // );
      });
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("data1");
    if (storedData) {
      setProducts(JSON.parse(storedData));
    }
  }, []);

  if (!products) {
    return <p>Please wait while we are loading</p>;
  }
  const Cul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: grey;
    gap: 80px;
    text-decoration: none;
    list-style-type: none;
  `;
  const Cimg = styled.img`
    background-color: grey;
    text-decoration: none;
    width: 250px;
    padding: 10px;
  `;

  const handleAddToCart = (productId) => {
    // let totalPriceOfAddedProducts = 0;
    setAddToCart((prevState) => {
      // return [...prevState, productId];
      let currentState = [...prevState, productId];
      localStorage.setItem("currentData", JSON.stringify(currentState));
      return currentState;
    });
    useEffect(() => {
      const storedData = localStorage.getItem("currentData");
      if (storedData) {
        // return JSON.parse(storedData);
        const parsedData = JSON.parse(storedData);
        setProducts(parsedData);
        // setAddToCart(parsedData.addToCart);
      }

      //   addToCart.map((pId) => {
      //     if (pId === productId) {
      //       totalPriceOfAddedProducts += products[price];
      //       return totalPriceOfAddedProducts;
      //     }

      //     console.log("Total Price", totalPriceOfAddedProducts);
      //     return [...prevState, productId];
      //   });
    }, []);
  };
  const isAddedToCart = (productId) => {
    return addToCart.includes(productId);
  };

  return (
    <div>
      <h1>My Products</h1>
      <p>Total items Added to Cart={addToCart.length}</p>
      {/* <p>Total Price of the added Products={totalPriceOfAddedProducts}</p> */}
      {/* <p>Total Price: ₹ {totalPrice}</p> */}

      <div>
        <Cul>
          {products &&
            products.map((item) => {
              return (
                <li key={item.id}>
                  <Cimg src={item.image} alt="" />
                  <button
                    onClick={() => handleAddToCart(item.id)}
                    // disabled={item.addedToCart}
                  >
                    {isAddedToCart(item.id) ? "Added to cart" : "Add to cart"}
                  </button>
                </li>
              );
            })}
        </Cul>
      </div>
    </div>
  );
};

export default AddToCart1;
