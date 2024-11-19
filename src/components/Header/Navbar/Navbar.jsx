import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import userIcon from "../../../assets/authImages/user.png";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

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
                  className="w-10 h-10 rounded-full border-2 p-1"
                />
              )
            ) : (
              <FaUserCircle />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content  menu bg-base-100  rounded-box z-[1] w-40 p-2 shadow border-2 font-bold"
          >
            <li>
              <Link to={"/login"} className="text-lg ml-4">
                Login <FiLogIn />
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={hadnleSignOut} className="text-lg ml-4">
                  LogOut <FiLogOut />
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
