import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const {error, status} = useRouteError()
  return (
    <div>
       
      <div className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <img className="w-40 h-40 text-violet-500" src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148072533.jpg" alt="" />
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-red-500">
              <span className="sr-only">Error</span>
              {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-red-700 mb-8">
              {error?.message}
            </p>
            <Link to="/" className="buttonMain">
              <button className="p-5 text-purple-600">Back to homepage</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
