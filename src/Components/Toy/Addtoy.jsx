import React from "react";

const Addtoy = () => {
  return (
    <div className="border border-xl shadow-2xl">
      <h2 className="text-center mb-4">Add your Toy</h2>
      <div className="text-center grid grid-cols-3">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Addtoy;
