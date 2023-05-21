import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../Providers/Authproviders";

const Toyscardata = ({ carsData }) => {
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
  const {
    _id,
    sellerName,
    toyName,
    price,
    email,
    Category,
    details,
    rating,
    ratings,
    quantity,
    photo,
  } = carsData;
  return (
    <div>
      <div className="grid grid-cols-7 mt-5 items-center p-5">
        <div>
          {photo && <img src={photo} className="h-24 w-24 rounded-xl" />}
        </div>
        <div>
          <h2 className="font-bold">{sellerName}</h2>
        </div>
        <div>
          <h2 className="font-bold">{toyName}</h2>
        </div>
        <div>
          <h2 className="font-bold">{Category}</h2>
        </div>
        <div>
          <h2 className="font-semibold">$: {price}</h2>
        </div>
        <div>
          <h2 className="font-semibold">{quantity}</h2>
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

export default Toyscardata;
