import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About";
import HomePage from "./Pages/Home";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
