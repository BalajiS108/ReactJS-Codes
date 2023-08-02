import { useEffect, useState } from "react";
import axios from "axios";

const ApiCalling = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => console.log(response.data))
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error("Error fetching data:", error);
        setApiData(response.data);
      });
  }, []);

  return (
    <div>
      {apiData.map((item, index) => {
        <p key={item.id}>{item}</p>;
      })}
    </div>
  );
};
export default ApiCalling;
