import React, { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";

function Home() {
  const navigate = useNavigate();
  const { products, loading, error } = useContext(ApiContext);
  if (loading) return <Skeleton />;
  if (error) return <p>Error: {error}</p>;
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  // console.log(products);
  return (
    <>
      <Navbar />
      <div className="cards">
        {products?.map((item) => {
          return (
            <div key={item.id} className="card">
              {console.log(item)}
              <img src={item.image} alt={item.title} />
              <p>${item.price}</p>
              <button onClick={() => handleClick(item.id)}>Read More</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
