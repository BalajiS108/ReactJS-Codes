import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>I am in Home Page</div>
      <Link to={"/contact"}> Go to contact</Link>
    </>
  );
};
export default Home;
