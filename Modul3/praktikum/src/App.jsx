import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About";
import HomePage from "./Pages/Home";
import ContactPage from "./Pages/Contact";

// Routing Pages

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes path="/" element={<HomePage />}></Routes>
        <Routes path="/about" element={<AboutPage />}></Routes>
        <Routes path="/Contact" element={<ContactPage />}></Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App();
