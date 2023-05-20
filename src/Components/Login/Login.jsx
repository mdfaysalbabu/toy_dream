import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/Authproviders";

const Login = () => {
  const { login } = useContext(authContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
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
        console.log(loagedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <label className="label">
                    Don't have an account please
                    <Link className="text-purple-500" to="/register">
                      register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
