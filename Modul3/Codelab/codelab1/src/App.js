import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routing Pages
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
