import React from "react";

const Toyscart = ({ cars, handleDelete }) => {
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
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td className="mr-10 flex justify-between">
          <div className="flex items-center  space-x-3">
            <div className="avatar">
              <div className=" w-24  h-24">
                {photo && <img src={photo} className="h-24 w-24" />}
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
            </div>
          </div>
        </td>
        <td className="font-semibold mr-10">{Category}</td>
        <td className="font-semibold">$: {price}</td>
        <td className="font-semibold">$: {quantity}</td>
      </tr>
    </div>
  );
};

export default Toyscart;
