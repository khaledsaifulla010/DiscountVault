import forgetPage from "../../assets/authImages/forgetPage.jpg";

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center mb-36 mt-12">
      <div>
        <img className="w-[600px]" src={forgetPage} />
      </div>

      <div className="card bg-base-100 border w-[600px] shadow-lg">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={"khaled123@gmail.com"}
              readOnly
              className="input input-bordered  shadow-sm text-slate-500 font-bold text-lg bg-base-200"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="border p-2 w-full rounded-xl text-red-500 bg-red-200 border-red-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
