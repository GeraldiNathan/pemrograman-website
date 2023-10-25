import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
