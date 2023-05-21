import React from "react";
import { Link } from "react-router-dom";

const Toyscardata = ({ carsData }) => {
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
      <tr className="flex justify-between ">
        <td className="bg bg-violet-300 ">
          <div className="flex items-center  ">
            <img
              src={photo}
              width={"250px"}
              height={"250px"}
              className="p-3 rounded-2xl shadow-lg"
            />
            <div className="ms-2">
              <h2 className=" font-semibold text-2xl text-violet-400">
                Toy-Name: {toyName}
              </h2>
              <p className="font-semibold text-2xl text-emerald-700">
                Toy-Seller: {sellerName}
              </p>
            </div>
          </div>
        </td>
        <td className="flex items-center  bg bg-violet-300  font-semibold text-2xl">
          <p>Price: {price}</p>
        </td>
        <td className="flex items-center  bg bg-violet-300 font-semibold text-2xl">
          {" "}
          <p>Quantity: {quantity}</p>
        </td>
        <th className="flex items-center bg bg-violet-300 ">
          <Link to={`/allToyDetails/${_id}`}>
            <button className="btn bg-gradient-to-r from-red-400">View Details</button>
          </Link>
        </th>
      </tr>
    </div>
  );
};

export default Toyscardata;
