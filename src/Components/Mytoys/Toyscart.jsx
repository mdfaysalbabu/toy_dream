import React from "react";
import { Link } from "react-router-dom";

const Toyscart = ({ cars, handleDelete, handleUpdateInfo }) => {
  const {
    sellerName,
    toyName,
    email,
    Category,
    details,
    price,
    rating,
    quantity,
    photo,
    _id,
  } = cars;

  return (
    <div>
      
      <div className="grid grid-cols-7 mt-5 items-center p-5">
        <div>{photo && <img  src={photo} className="h-24 w-24 rounded-xl" />}</div>
        <div>
            <h2 className='font-bold'>{toyName}</h2>
        </div>
        <div>
            <h2 className="font-semibold">$: {price}</h2>
        </div>
        <div>
            <h2 className="font-semibold">$: {quantity}</h2>
        </div>
        <div>
            <h2 className="font-semibold">$: {rating}</h2>
        </div>
        <div>
            <Link to={`/update/${_id}`}><button className="btn bg-gradient-to-r from-green-400">Update</button></Link>
        </div>
        <div>
            <button onClick={() => handleDelete(_id)} className="btn bg-gradient-to-r from-red-400">Delete</button>
        </div>
        
      </div>
    </div>
  );
};

export default Toyscart;
