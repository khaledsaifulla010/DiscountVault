import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mb-36 mt-12">
      <div className="card border max-w-[900px] mx-auto rounded-xl">
        <div className="flex items-center ml-12 mt-8 gap-4">
          <img
            className="w-24 h-24  rounded-full border-2  p-1"
            src={user.photoURL}
            alt=""
          />
          <div className="w-4 h-4 rounded-full border-2 bg-green-600 absolute left-[115px] top-[110px]"></div>
          <div>
            <h1 className="font-bold text-2xl">Name: {user?.displayName} </h1>
            <h2 className="font-bold text-lg text-slate-600">
              Email: {user?.email}{" "}
            </h2>
          </div>
        </div>
        <div className="divider px-4"></div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
