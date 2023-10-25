import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => (
  <div>
    <h1>About Us</h1>
    {/* Content for the About page goes here */}
  </div>
);
const Contact = () => <h1>Contact Us</h1>;

function App() {
  return (
    <Router>
      <p style={{ fontSize: 35 }}>Navbar</p>
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
      <p>Halaman Abous Us</p>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
