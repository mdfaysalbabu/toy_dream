import React from "react";
import { Link } from "react-router-dom";

const Firstsection = () => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-5 text-red-400 mb-5">
        Our Great Dream Car Toys{" "}
      </h2>
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full"
          />
          <div className="absolute rounded-xl h-full flex items-center  bg-gradient-to-r from-purple-200 to-">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
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
            src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600"
            className="w-full"
          />
          <div className="absolute rounded-xl h-full flex items-center  bg-gradient-to-r from-purple-200 to-">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
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
            src="https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full"
          />
          <div className="absolute rounded-xl h-full flex items-center  bg-gradient-to-r from-purple-200 to-">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
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
            src="https://images.pexels.com/photos/772393/pexels-photo-772393.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full"
          />
          <div className="absolute rounded-xl h-full flex items-center  bg-gradient-to-r from-purple-200 to-">
            <div className="text-white space-y-7 pl-20 w-1/2">
              <h2 className="text-3xl md:text-6xl font-bold">
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
