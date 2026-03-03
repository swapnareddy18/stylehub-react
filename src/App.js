import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main App */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback (optional but recommended) */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
