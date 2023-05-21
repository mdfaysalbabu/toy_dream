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
    <div className="mt-3">
      <h2 className="text-center text-4xl text-orange-400">All Toys</h2>
      <p>total:{allData.length}</p>
      <div></div>
      <div className="mx-12 py-12">
        <table className="table w-full">
          <tbody className="grid grid-cols-1 gap-5 py-3 p-3 bg  bg-violet-300 rounded ">
            {allData.map((carsData) => (
              <Toyscardata
                key={carsData._id}
                carsData={carsData}
              ></Toyscardata>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoys;
