import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ApiContext } from "../context/ApiContext";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice"; // Import addItem action

function Product() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const { products, loading, error } = useContext(ApiContext);
  const dispatch = useDispatch();
  const foundProduct = products.find((p) => p.id === parseInt(itemId, 10));
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const handleAddToCart = () => {
    dispatch(addItem(foundProduct)); // Dispatch the addItem action
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <>
      <Navbar />
      <div className="product">
        <div className="card">
          <p>{foundProduct.title}</p>
          <img src={foundProduct.image} alt={foundProduct.title} />
          <p>{foundProduct.price}</p>
          <p>{foundProduct.category}</p>
          <p>{foundProduct.description}</p>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;
