import React from "react";

const Footer = () => {
  return (
    <div className="mt-5  ">
      {/* <div className="flex justify-center items-center gap-80 mb-5 p-5 mt-5">
        <div>
           
        </div>
         <div>
            <h2 className="text-5xl text-orange-400">Contact Us</h2>
         </div>
         <div>
          <button>Link</button>
         </div>
         <div>

         </div>
      </div> */}
      <footer className="footer p-10 bg-indigo-400 text-base-content">
        <div className="text-white">
          <img className="rounded-xl w-56 shadow-2xl" src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <p className="text-lg">
            Dream Toys Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div className=" p-5 text-white text-lg rounded-xl">
          <span className="footer-title text-orange-300">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className=" p-5 text-white text-lg rounded-xl">
          <span className="footer-title text-orange-300">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className=" p-5 text-white text-lg rounded-xl">
          <span className="footer-title text-2xl text-indigo text-orange-300">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white text-lg">Enter your email address</span>
            </label>
            <div className="relative ">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0  rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
