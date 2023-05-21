import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/Authproviders";
import { useForm } from 'react-hook-form';
import usePath from "../../myHook/hook";

const Register = () => {
  usePath("Register")
  const { createUser } = useContext(authContext);
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const loagedUser = result.user;
        console.log(loagedUser);
        setSuccess("successfully Register")
        
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-indigo-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left"></div>
          <div className="card h-auto  w-full  max-w-sm shadow-2xl  bg-red-300">
            <h1 className="text-2xl font-bold text-center mt-2 ">
              Register now
            </h1>
            <div className="card-body ">
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <div>
                    <h6 className="text-green-500">{success}</h6>
                  </div>
                  <div>
                    <h6 className="text-purple-500">{error}</h6>
                  </div>
                  <label>
                    All ready have and account  
                     <Link className="text-orange-600 text-xl ml-3" to="/login">
                      Login
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <button className="btn bg-gradient-to-r from-red-600">Register</button>
                </div>
              </form>
            </div>
          </div>
          <img className="rounded-2xl" src="https://cdni.iconscout.com/illustration/premium/thumb/free-registration-desk-1886554-1598085.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
