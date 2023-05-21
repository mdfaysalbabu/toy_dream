import React from "react";

const Cargallery = ({ cars }) => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img className="w-[400px] h-[300px]" src={cars.photo} alt="" />
      </div>
    </div>
  );
};

export default Cargallery;
