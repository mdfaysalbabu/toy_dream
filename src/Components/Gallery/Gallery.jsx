import React, { useEffect, useState } from "react";
import Cargallery from "./Cargallery";

const Gallery = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/galleryData")
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center pb-8 ">
        <h1 className="text-2xl  font-semibold">Cars-Toy-Gallery </h1>
        <p className="text-lg">
          Dream Toys Cars is a Best Toys Cars
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-20 mb-3">
        {carData.map((cars) => (
          <Cargallery cars={cars} key={cars._id}></Cargallery>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
