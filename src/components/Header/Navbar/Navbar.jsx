import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
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
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border-2"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
