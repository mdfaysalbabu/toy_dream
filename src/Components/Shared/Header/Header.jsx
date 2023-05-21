import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/Authproviders";

const Header = () => {
  const { user, logout } = useContext(authContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="navbar bg-purple-300 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <Link to="addtoy">
                  <a>Add A Toy</a>
                </Link>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li tabIndex={0}></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dream Toys</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li tabIndex={0}>
             {user &&
             
             <Link to="mytoys">
             <li>My Toys</li>
           </Link>}
            </li>
            <li>
              <Link to="alltoys">
                <a>All Toys</a>
              </Link>
            </li>
            <li>
              {
                user &&
                <Link to="addtoy">
                <a>Add A Toy</a>
              </Link>
              }
            </li>
            <li>
              <Link to="blog">
                <a>Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>
                <img
                  className=" rounded mt-2 mr-3"
                  style={{ width: "30px" }}
                  src={user?.photoURL}
                  alt=""
                  title={user.displayName}
                />
              </span>
              <button className="btn bg-gradient-to-r from-red-600" onClick={handleLogOut}>
                Signout
              </button>
            </>
          ) : (
            
             <Link to="/login"
            >
              <button className="btn bg-gradient-to-r from-red-600">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
