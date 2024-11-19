import loginPage from "../../assets/authImages/loginPage.jpg";

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
                  className=" text-red-600 underline hover:text-red-700 font-semibold"
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
        </div>
      </div>
    </div>
  );
};

export default Login;
