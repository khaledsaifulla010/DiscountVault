import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import userIcon from "../../../assets/authImages/userIcon.png";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const hadnleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Successfully Logged Out !", { position: "top-center" });
    });
  };

  return (
    <div className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <Link to={"/"}>
          <div className="flex gap-2 items-center">
            <img className="w-7 mt-3" src={logo} alt="Logo" />
            <span className="font-bold text-2xl sm:text-3xl lg:text-4xl">
              Discount<span className="text-orange-500">Vault</span>
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-8 font-bold text-base sm:text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/brands"}>Brands</NavLink>
          <NavLink to={"/aboutDev"}>About Dev</NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="text-3xl sm:text-4xl m-1">
            {user ? (
              user.photoURL ? (
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 p-1"
                  src={user.photoURL}
                  alt="User"
                />
              ) : (
                <img
                  src={userIcon}
                  alt="Default User"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 p-1"
                />
              )
            ) : (
              <FaUserCircle />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] w-48 p-2  shadow border-2 font-bold bg-white"
          >
            <li>
              <Link
                to={"/myProfile"}
                className="text-base border p-2 rounded-xl text-blue-500 border-blue-300 bg-blue-200 hover:bg-blue-300"
              >
                My Profile <CgProfile />
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="text-base border p-2 rounded-xl text-purple-500 border-purple-300 bg-purple-200 hover:bg-purple-300 mt-2"
              >
                Login <FiLogIn />
              </Link>
            </li>
            <li>
              {user && (
                <button
                  onClick={hadnleSignOut}
                  className="text-base border p-2 rounded-xl text-red-500 border-red-300 bg-red-200 hover:bg-red-300 mt-2"
                >
                  LogOut <FiLogOut />
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-center lg:hidden">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/brands"}>Brands</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutDev"}>About Dev</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
