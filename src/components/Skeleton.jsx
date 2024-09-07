import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton-cards">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="skeleton-card"></div>
      ))}
    </div>
  );
};

export default Skeleton;
