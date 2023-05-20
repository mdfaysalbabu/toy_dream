import React from "react";

const Firstsection = () => {
  return (
    <div className="border border-2xl rounded width-50 bg-slate-700 text-center p-5">
      <div className="flex gap-20  justify-center ">
        <div>
          <h2 className="text-4xl mb-2 text-orange-400">Write us</h2>
          <hr className="text-yellow-500" />
          <h3 className="text-purple-400 text-xl mb-2">Name</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs shadow-xl"
          />
          <h3 className="text-purple-400 text-xl mb-2">Email</h3>
          <input 
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs shadow-xl"
          />
          <h3>Verification</h3>
          <input type="checkbox" name="" id="" />
          <p>I am not robot</p>
        </div>
        <div>
          <h4 className="text-4xl mb-2 text-orange-400">Message</h4>
          <hr />
          <h2 className="text-purple-400 text-xl mb-2">Write Text Here</h2>
          <textarea
            placeholder="Type here"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs shadow-xl"
          ></textarea>
          <button className="">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
