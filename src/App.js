import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:itemId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        {/* Use ProtectedRoute as a wrapper */}
        <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
        <Route path="/signup" element={<Signup />} /> {/* Add route */}
        <Route path="/settings" element={<UserSettings />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
