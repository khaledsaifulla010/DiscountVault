import { useContext, useState } from "react";
import registerPage from "../../assets/authImages/registerPage.jpg";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { signUp, loading } = useContext(AuthContext);
  const redirect = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  if (loading) {
    <span className="loading loading-infinity loading-lg text-secondary ml-[650px]"></span>;
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo_URL = e.target.photo_URL.value;
    const password = e.target.password.value;
    console.log(name, email, photo_URL, password);

    // Password Validations //

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Atleast one Uppercase, one Lowercase Letter & minimum Six Characters!",
        { position: "top-center" }
      );
      return;
    }

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Register Sucessfully!", { position: "top-center" });
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong!", { position: "top-center" });
      });
  };

  return (
    <div className="flex items-center justify-center mb-36 mt-12">
      <div>
        <img className="w-[600px]" src={registerPage} />
      </div>

      <div className="card bg-base-100 border w-[600px] shadow-lg">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered shadow-sm"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo_URL"
              placeholder="Enter Your Photo URL"
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
          <div className="form-control mt-6">
            <button className="border p-2 w-full rounded-xl text-green-500 bg-green-200 border-green-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
