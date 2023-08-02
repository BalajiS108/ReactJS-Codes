import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//components for different routes
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>I am in home page</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>I am in About page</h2>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <h2>I am in contact page</h2>
    </div>
  );
};

const App1 = () => {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <h1>This content is common for all pages</h1>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App1;
