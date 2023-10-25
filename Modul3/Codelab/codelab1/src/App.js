import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => (
  <div>
    <h1>About Us</h1>
  </div>
);
const Contact = () => <h1>Contact Us</h1>;

function App() {
  const LiStyle = {
    marginBottom: 5,
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: 5,
    background: "#f5f5f5",
  };

  return (
    <Router>
      <p style={{ fontSize: 50, marginTop: 28 }}>Navbar</p>
      <nav>
        <ul>
          <li>
            <button style={LiStyle}>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button style={LiStyle}>
              <Link to="/about">About</Link>
            </button>
          </li>
          <li>
            <button style={LiStyle}>
              <Link to="/contact">Contact Us</Link>
            </button>
          </li>
        </ul>
      </nav>
      <p style={{ fontSize: 50 }}>Halaman Abous Us</p>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes>

      <p style={{ fontSize: 50 }}>Footer</p>
    </Router>
  );
}

export default App;
