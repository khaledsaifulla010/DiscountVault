import { Link, useNavigate } from "react-router-dom";
import loginPage from "../../assets/authImages/loginPage.jpg";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { googleSignIn, logIn, loading } = useContext(AuthContext);
  const redirect = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  if (loading) {
    <span className="loading loading-infinity loading-lg text-secondary ml-[650px]"></span>;
  }

  // Sign in With Google//

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success(`Welcome Mr. ${result.user.displayName}!`, {
          position: "top-center",
        });
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong!", { position: "top-center" });
      });
  };

  // Sign in with email & password //

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success(`Welcome Mr. ${result.user.displayName}!`, {
          position: "top-center",
        });
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong!", { position: "top-center" });
      });
  };

  return (
    <div>
      <div className="rounded-xl p-2 w-[1300px] h-[90px] mt-8 bg-base-200">
        <h1 className=" mt-4 text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
          Please Login
        </h1>
      </div>
      <div className="flex items-center justify-center mb-36 mt-12">
        <div>
          <img className="w-[600px]" src={loginPage} />
        </div>

        <div className="card bg-base-100 border w-[600px] shadow-lg">
          <form className="card-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered shadow-sm"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-bold text-xl">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered shadow-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute w-12 right-3 top-[56px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <label className="label ">
              <Link
                to={"/forgetPassword"}
                className="label-text-alt text-red-500 font-semibold text-base underline"
              >
                Forgot password?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="border p-2 w-full rounded-xl text-purple-500 bg-purple-200 border-purple-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                Login
              </button>
            </div>
          </form>
          <div className="ml-8 -mt-4 flex items-center gap-2 p-2">
            <h1 className="font-bold text-slate-600 text-lg">
              Don't have any account?
            </h1>
            <Link to={"/register"}>
              <h1 className="font-bold text-green-600 text-lg">Register</h1>
            </Link>
          </div>
          <div className="divider px-9">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="border p-2 rounded-xl w-[530px] flex items-center gap-2 ml-8 mb-8 mt-2 text-lg shadow-md font-bold transition duration-500 ease-in-out transform hover:scale-105 active:scale-95"
          >
            <FcGoogle className="ml-40 text-2xl mt-1"></FcGoogle>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
