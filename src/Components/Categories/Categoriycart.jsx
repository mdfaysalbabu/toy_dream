import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { authContext } from "../Providers/Authproviders";
import Swal from "sweetalert2";

const Categoriycart = ({ cars }) => {
  const { _id, photo, sellerName, rating, price, toyName } = cars;
  const {user}=useContext(authContext)
  const handleDetails=()=>{
    if(!user)
    {
        Swal.fire({
            title: 'Error!',
            text: 'Login first',
            icon: 'warning',
            confirmButtonText: 'Cool'
          })
    }
}
  return (
    <div className="card w-80 bg-base-200 shadow-xl ">
      <figure>
        <img src={photo} className="mt-4 rounded-lg w-[200px] h-[200px]" />
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
            <button onClick={handleDetails} className="btn bg-gradient-to-r from-green-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categoriycart;
