import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const ProductListAssignment = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState();
  const [category, setCategory] = useState({
    smartphones: false,
    laptops: false,
    fragrances: false,
    skincare: false,
    groceries: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  //   const [isChecked, setIsChecked] = useState([]);

  const Array1 = useMemo(() => {
    let temp = Object.keys(category).filter((item) => {
      return category[item] === true;
    });
    return temp;
  }, [category]);
  console.log("Array1", Array1);

  //   const result2 = useMemo(() => {
  // let categoryWiseProductsInitaial = [];
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((result) => {
      console.log("Result", result);
      if (result.data) {
        if (Array1.length > 0) {
          let categoryWiseProducts = Array1.map((item) => {
            let temp1 = result.data.products.filter((item2) => {
              console.log("item & item1.category", item, item2.category);
              return item === item2.category;
            });
            return temp1;
          });
          console.log("categoryWiseProducts", ...categoryWiseProducts);
          setData(...categoryWiseProducts);
          console.log("dataHamara=", data);
          //   setProducts(...data);
          setProducts(...categoryWiseProducts);
          console.log("hamari category", Array1);
          setSearchParams({ category: Array1 });
        } else {
          setProducts(result.data.products);
        }
        console.log("products", products);
      }
    });
    //   }, [Array1]);
  }, [Array1, category]);

  console.log("products", products);

  //   Product List Category wise

  const inputCategory = (e) => {
    const { name, checked } = e.target;
    setCategory((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  console.log("checked element", category);
  console.log("key Array1", Object.keys(category));

  //   useEffect(()=>{})
  //   const productCategoryWise = products.filter((item) => {
  //     if (item.category === ) return item;
  //   });
  //   console.log("productCategoryWise", productCategoryWise);

  //

  //Selecting products brandwise
  // const [searchParams, setSearchParams] = useSearchParams();
  //   useEffect(() => {
  //     const paramsObject = {};
  //     // Iterating over the searchParams
  //     for (const [key, value] of searchParams.entries()) {
  //       paramsObject[key] = value;
  //     }
  //     console.log("paramsObject", paramsObject);
  //   });
  // const selectApple = (name, value) => {
  //   console.log("Params value", name, value);
  //   searchParams.set(name, value);
  //   setSearchParams(searchParams);
  // };

  return (
    <div>
      <h1>Product List....</h1>
      <div
        style={{
          marginTop: 50,
        }}
      ></div>
      <div>
        <input
          type="checkbox"
          name="smartphones"
          value="smartphones"
          id="smartphones"
          checked={category.smartphones}
          onChange={inputCategory}
        />
        <label htmlFor="">smartphones</label>
        <input
          type="checkbox"
          name="laptops"
          value="laptops"
          id="laptops"
          checked={category.laptops}
          onChange={inputCategory}
        />
        <label htmlFor="">laptops</label>
        <input
          type="checkbox"
          name="fragrances"
          value="fragrances"
          id="fragrances"
          checked={category.fragrances}
          onChange={inputCategory}
        />
        <label htmlFor="">fragrances</label>
        <input
          type="checkbox"
          name="skincare"
          value="skincare"
          id="skincare"
          checked={category.skincare}
          onChange={inputCategory}
        />
        <label htmlFor="">skincare</label>
        <input
          type="checkbox"
          name="groceries"
          value="groceries"
          id="groceries"
          checked={category.groceries}
          onChange={inputCategory}
        />
        <label htmlFor="">groceries</label>
      </div>
      <ul
        style={{
          marginTop: 50,
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
                <p>{item.brand}</p>
                <p>{item.title}</p>

                <p>{item.price}</p>
                {/* <img
                  style={{ width: 100, height: 100 }}
                  //   src={item.images[0]}
                  alt=""
                /> */}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        {" "}
        {/* Category wise Product List */}
        <ul
          style={{
            marginTop: 50,
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* {productCategoryWise.map((item) => {
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
                <div>
                  <p>{item.brand}</p>
                  <p>{item.title}</p>

                  <p>{item.price}</p>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={item.images[0]}
                    alt=""
                  />
                </div>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
};
export default ProductListAssignment;
