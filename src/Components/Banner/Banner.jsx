import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import cartoys from "../../assets/cartoys.json";


const Banner = () => {
  return (
    <div className="bg-slate-300">
      <div className="my-container lg:flex  items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg mx-auto lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div>
              <p className="badge bg-red-500">On Sale</p>
            </div>
            <h2 className="text-6xl font-bold">
              Best Toy Car Have Our Dream Toy Car
            </h2>
            <p className="mt-2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className=" lg:w-1/2 ">
          <div className=" w-3/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={cartoys} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
