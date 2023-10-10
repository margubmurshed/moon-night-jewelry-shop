import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const [toggleSignOut, setToggleSignOut] = useState(false);
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
      alert("Signed Out Successfully");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-jewelry">All Jewelry</Link>
            </li>
            {user && (
              <>
                {" "}
                <li>
                  <Link to="/add-jewelry">Add Jewelry</Link>
                </li>
                <li>
                  <Link to="/my-jewelry">My Jewelry</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>{" "}
              </>
            )}
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-4xl font-[olivera]">
          MOON
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-jewelry">All Jewelry</Link>
          </li>
          {user && (
            <>
              {" "}
              <li>
                <Link to="/add-jewelry">Add Jewelry</Link>
              </li>
              <li>
                <Link to="/my-jewelry">My Jewelry</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>{" "}
            </>
          )}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="avatar cursor-pointer"
              onClick={() => setToggleSignOut(!toggleSignOut)}
            >
              <div className="w-12 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                  }
                />
              </div>
            </div>
            {toggleSignOut && (
              <button
                className="absolute top-full btn btn-error lg:right-2 w-full lg:w-auto rounded-none right-0"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            )}
          </>
        ) : (
          <Link className="btn" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
