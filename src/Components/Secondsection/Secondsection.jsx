import React from "react";

const Secondsection = () => {
  return (
    <div>
        <h2 className="text-center text-3xl mt-4 text-red-300">Toys-Introduction</h2>
      <div className=" py-12 bg bg-base-100 mb-5 px-5 md:w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          <div className="mx-auto w-[300px] h-[350px]  px-6 shadow-lg rounded-lg">
            <img
              src="https://images.jdmagicbox.com/quickquotes/images_main/car-toys-for-kids-386534834-5dtm0.jpg"
              alt=""
              className="mx-auto w-20 h-20"
              srcset=""
              
            />
            <h1 className="text-2xl font-serif font-bold py-2 text-purple-300 text-start">Cars Toys</h1>
            <p className="text-orange-800 text-start">
              Introducing Cars Toy Collection, where the thrill of the open road
              meets the excitement of imaginative play! Our Cars Toy Collection
              offers a wide range of high-quality, interactive, and fun-filled
              toys inspired by the beloved Cars franchise.
            </p>
          </div>
          <div className="mx-auto w-[300px] h-[350px] px-6 shadow-lg rounded-lg">
            <img
              src="https://5.imimg.com/data5/UL/GK/MY-42366547/plastic-truck-toy-500x500.jpg"
              alt=""
              className="mx-auto w-20 h-20"
              srcset=""
              
            />
            <h1 className="text-2xl font-serif font-bold py-2 text-purple-300 text-start">
              Trucks
            </h1>
            <p className="text-orange-800 text-start">
            Introducing Cars Toy Collection, where the thrill of the open road
              meets the excitement of imaginative play! Our Cars Toy Collection
              offers a wide range of high-quality, interactive, and fun-filled
              toys inspired by the beloved Cars franchise.
            </p>
          </div>
          <div className="mx-auto w-[300px] h-[350px] px-6 shadow-lg rounded-lg">
            <img
              src="https://m.media-amazon.com/images/I/71OS2nT3HoS._SL1500_.jpg"
              alt=""
              className="mx-auto w-20 h-20"
              srcset=""
             
            />
            <h1 className="text-2xl font-serif font-bold py-2 text-purple-300 text-start">Ambulance </h1>
            <p className="text-orange-800 text-start">
            Introducing Cars Toy Collection, where the thrill of the open road
              meets the excitement of imaginative play! Our Cars Toy Collection
              offers a wide range of high-quality, interactive, and fun-filled
              toys inspired by the beloved Cars franchise.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
