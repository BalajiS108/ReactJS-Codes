const CartView = (props) => {
  console.log("Inside Cart: ", props);
  const [name, price] = props.data;
  console.log("name=", name, "price=", price);

  let totalPrice = 0;
  for (let i = 0; i < props.data.length; i++) {
    totalPrice += props.data[i].price;
  }

  return (
    <div>
      <p>
        Total Price of {props.data.length} elements is {totalPrice}
      </p>
    </div>
  );
};

export default CartView;
