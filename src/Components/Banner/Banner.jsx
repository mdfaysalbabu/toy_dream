import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import cartoys from "../../assets/cartoys.json";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
  useEffect(()=>{
    AOS.init();
},[])
  return (
    <div  data-aos="fade-right" className="bg-slate-300 bg-gradient-to-r from-violet-300 to-">
      <div className="my-container lg:flex  items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg mx-auto lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="text-6xl font-bold ">
              Best Toy Car Have Our Dream Toy Car
            </h2>
            <p className="mt-2 text-red-950">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className=" lg:w-1/2 ">
          <div className=" w-3/5 lg:ml-auto  sm:h-96">
            <Lottie animationData={cartoys} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
