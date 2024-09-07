// src/context/ApiContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productsResponse.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ products, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
