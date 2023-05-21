import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/Authproviders";
import Toyscart from "./Toyscart";

const Mytoys = () => {
  const { user } = useContext(authContext);
  const [carsData, setCarsData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myCars/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCarsData(data));
  }, [user]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myCars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remain = setCarsData.filter((cars) => cars._id !== id);
        setCarsData(remain);
      });
  };

  return (
    <div>
      <h2>my toys</h2>
      <div>
        <div className="flex justify-center items-center">
          <h1>Dream Cars Toy :{carsData.length}</h1>
        </div>
        <div className="mx-12 py-12">
          <table className="table w-full">
            {/* head */}
            <thead >
              <tr className="flex justify-around">
                <th>Photo</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>View-Details</th>
                </tr>
            </thead>
            <tbody>
              {carsData.map((cars) => (
                <Toyscart
                 cars={cars}
                  key={cars._id}
                //   handleUpdateInfo={handleUpdateInfo}
                  handleDelete={handleDelete}
                ></Toyscart>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mytoys;
