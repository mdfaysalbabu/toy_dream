import React from "react";

const Categoriycart = ({ cars }) => {
  const { photo, sellerName, rating, price, toyName } = cars;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={photo} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-green-400">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoriycart;
