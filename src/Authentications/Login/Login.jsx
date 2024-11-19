import { Link } from "react-router-dom";
import loginPage from "../../assets/authImages/loginPage.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <img className="w-[600px]" src={loginPage} />
        </div>

        <div className="card bg-base-100 border w-[600px] ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className=" text-red-600 underline hover:text-red-700 font-semibold "
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="border p-2 w-full rounded-xl text-purple-500 bg-purple-200 border-purple-300 font-bold text-lg transition duration-500 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-purple-300">
                Login
              </button>
            </div>
          </form>
          <div className="ml-8 -mt-4 flex items-center gap-2 p-2">
            <h1 className="font-bold text-slate-600 text-lg">
              Don't have any account?
            </h1>
            <Link>
              <h1 className="font-bold text-green-600 text-lg">Register</h1>
            </Link>
          </div>
          <div className="divider px-9">OR</div>
          <button className="border p-2 rounded-xl w-[530px] flex items-center gap-2 ml-8 mb-8 mt-2 text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 font-bold">
            <FcGoogle className="ml-40 text-2xl mt-1"></FcGoogle>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
