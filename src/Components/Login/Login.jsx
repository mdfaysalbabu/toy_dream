import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/Authproviders";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePath from "../../myHook/hook";


const Login = () => {
  usePath('Login')
  const { login,googleLogin } = useContext(authContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const loagedUser = result.user;
        setSuccess("successfully login");
        form.reset();
        navigate(from, { replace: true });
        console.log(loagedUser);
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    setError("");
    setSuccess("");
    googleLogin()
      .then((result) => {
        const logedUser = result.user;
        setSuccess("successfully login");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen  bg-indigo-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-300">
            <h1 className="text-2xl font-bold text-center mt-2">Login now</h1>
            <div className="card-body">
              <form onSubmit={handleLogin}>
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
                  <label >
                    Don't have an account please
                    <Link className="text-red-500 ml-3 text-xl" to="/register">
                     register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-gradient-to-r from-green-600">Login</button>
                </div>
              </form>
              <div className=" social-button-container w-50 mt-3 ">
                <div className="flex justify-center">
                  <img
                    onClick={handleGoogleLogin}
                    className=" social-button"
                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                    alt=""
                  />
                </div>
              </div>
              <ToastContainer></ToastContainer>
            </div>
          </div>
          <img className="w-96" src="https://www.brevistay.com/images/Group9473.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
