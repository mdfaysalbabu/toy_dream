import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Categoriycart = ({ cars }) => {
  const { _id, photo, sellerName, rating, price, toyName } = cars;
  return (
    <div className="card w-96 bg-base-200 shadow-xl ">
      <figure>
        <img src={photo} className="mt-4 rounded-lg w=[300px] h-[300px]" />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">Toy Name: {toyName}</h2>

          <div className="flex items-center gap-3">
            <span className="text-xl">Ratting:</span>
            <Rating
              className=""
              style={{ maxWidth: 100 }}
              value={rating}
              readOnly
            />{" "}
            {rating}
            <p className="text-xl">Price: ${price}</p>
          </div>
        </div>
        <div>
          <Link to={`/updateDetails/${_id}`}>
            <button className="btn bg-gradient-to-r from-green-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categoriycart;
