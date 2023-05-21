import React, { useEffect, useState } from "react";
import Toyscardata from "./Toyscardata";

const Alltoys = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/carsAllData")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <div className="mt-3 bg-gradient-to-r from-violet-400">
      <h2 className="text-center text-4xl text-orange-400">All Toys</h2>
      <p>total:{allData.length}</p>
      <div className="mx-12 py-12">
        <table className="table w-full">
          <div className="grid grid-cols-7 text-xl font-semibold p-5">
            <div>
              <h1>Photo</h1>
            </div>
            <div>
              <h1>Seller-Name</h1>
            </div>
            <div>
              <h1>Toy-Name</h1>
            </div>
            <div>
              <h1>Category</h1>
            </div>
            <div>
              <h1>Price</h1>
            </div>
            <div>
              <h1>QUantity</h1>
            </div>
            <div>
              <h1>View Details</h1>
            </div>
          </div>
          <tbody className="grid grid-cols-1 gap-5 py-3 p-3 bg   rounded ">
            {allData.map((carsData) => (
              <Toyscardata key={carsData._id} carsData={carsData}></Toyscardata>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoys;
