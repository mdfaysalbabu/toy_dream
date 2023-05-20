import React from "react";

const Cargallery = ({ cars }) => {
  return (
    <div>
      <div className="flex text-center justify-center mx-auto ">
        <img
          src={cars.photo}
          className="flex justify-center w-full"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Cargallery;
