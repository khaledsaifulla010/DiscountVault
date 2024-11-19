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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="flex gap-2 items-center">
          <img className="w-7 mt-3" src={logo} />
          <a className=" font-bold text-4xl">
            Discount<span className="text-orange-500">Vault</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-12 font-bold text-lg">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/brands"}>Brands</NavLink>
          <NavLink to={"/aboutDev"}>About Dev</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="text-4xl m-1">
            {user ? (
              user.photoURL ? (
                <img
                  className="w-16 h-16 rounded-full border-2 p-1"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <img
                  src={userIcon}
                  alt="Default User"
                  className="w-16 h-16 rounded-full border-2 p-1"
                />
              )
            ) : (
              <FaUserCircle />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  menu  rounded-box z-[1] w-48 p-2 h-[200px] shadow border-2 font-bold bg-white "
          >
            <li>
              <Link
                to={"/myProfile"}
                className="text-lg ml-1 border p-2 rounded-xl text-blue-500 border-blue-300 bg-blue-200 hover:bg-blue-200 mt-3"
              >
                <span className="ml-2">My Profile</span> <CgProfile />
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="text-lg ml-2 border p-2 rounded-xl text-purple-500 border-purple-300 bg-purple-200 hover:bg-purple-200 mt-2 "
              >
                <span className="ml-9">Login</span>
                <FiLogIn />
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={hadnleSignOut}
                  className="text-lg ml-2 border p-2 rounded-xl text-red-500 border-red-300 bg-red-200 hover:bg-red-200 mt-2"
                >
                  <span className="ml-9">LogOut</span> <FiLogOut />
                </button>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
