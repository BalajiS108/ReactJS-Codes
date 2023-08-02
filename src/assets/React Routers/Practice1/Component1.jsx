import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const Childrouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/details",

      element: <div>Details</div>,
    },
  ]);
  <Link to={"/details"}> Details</Link>;
  <Link to={"/"}>Home</Link>;
};

const Parentrouter = () => {
  return <RouterProvider router={router} />;
};

export default Parentrouter;
