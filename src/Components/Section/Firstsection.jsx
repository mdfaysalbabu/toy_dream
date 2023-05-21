import React from "react";
import { Link } from "react-router-dom";

const Firstsection = () => {
  return (
    <div>
      {/* <div className="hero min-h-screen bg-gradient-to-r from-violet-400 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-76426693/76426693.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Dream Toy is the best !</h1>
            <p className="py-6">
            At Cars Toy World, we understand the fascination and thrill that toy cars bring to children and collectors alike. Our extensive collection features a wide range of meticulously crafted toy cars that capture the essence of the automotive world. Whether you're a fan of classic vintage models, sleek modern supercars, or rugged off-road vehicles, we have something to satisfy every car lover's taste.
              
            </p>
            <button className="btn bg-gradient-to-r from-green-400 ">Explore Now</button>
          </div>
        </div>
      </div> */}
      <h2 className="text-center text-3xl mt-5 text-red-400 mb-5">Our Great Dream Car Toys </h2>
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full"
          />
          <div className="absolute rounded-xl h-full flex items-center  bg-gradient-to-r from-purple-200 to-">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-6xl font-bold">
                Best Toy Car Have Our Dream Toy Car
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <div className="">
                  <Link to="err">
                    <button className="btn btn-accent mr-5 ">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
