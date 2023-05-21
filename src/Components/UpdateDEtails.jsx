import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateDEtails = () => {
  const loadedData = useLoaderData();
  const{toyName,price,details,photo,quantity,email,sellerName,rating}=loadedData
  return (
    <div>
      <div className="bg-red-50 p-6">
        <h2 className="text-3xl font-bold text-center mt-12">
          Your Toy Details
        </h2>
        <div className="flex justify-center py-8 ">
          <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 h-auto">
            <figure>
              <img className="w-1/2" src={photo} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Toy Name: {toyName}</h2>
              <h2 className="card-title">Toy Price: $ {price}</h2>
              <h2 className="card-title">Quantity: {quantity}</h2>
              <h2 className="card-title">Description: {details}</h2>
              <h2 className="card-title">Seller Name: {sellerName}</h2>
              <h2 className="card-title">Seller Email: {email}</h2>
              <h2 className="card-title">
                Rating:{" "}
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
                {rating}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDEtails;
