import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import userIcon from "../../assets/authImages/userIcon.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-infinity loading-lg text-secondary ml-[650px]"></span>
    );
  }

  return (
    <div className="mb-36 mt-12">
      <div className="card border max-w-[900px] mx-auto rounded-xl shadow-lg bg-white">
        <div className="flex items-center ml-12 mt-8 gap-4">
          {user ? (
            user.photoURL ? (
              <img
                className="w-24 h-24 rounded-full border-2 p-1"
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
          <div
            className="tooltip absolute left-[115px] top-[110px] tooltip-right tooltip-success"
            data-tip="Active"
          >
            <div className="w-4 h-4 rounded-full border-2 bg-green-600 "></div>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-purple-700">
              {user?.displayName}
            </h1>
            <h2 className="font-bold text-lg text-slate-500">{user?.email}</h2>
            <h3 className="font-bold text-sm text-slate-500">
              Last Seen:
              {user.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleDateString(
                    "en-GB",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )
                : "N/A"}
            </h3>
          </div>
        </div>
        <div className="divider px-4"></div>
        <div className=" ">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl">Name </h1>
            <h1 className="font-bold text-xl text-slate-600">
              {user?.displayName}
            </h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl">Email </h1>
            <h1 className="font-bold text-xl text-slate-600">{user?.email}</h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl">Phone Number</h1>
            <h1 className="font-bold text-xl text-slate-600">
              {user?.phoneNumber ?? "N/A"}
            </h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-xl">Account Created</h1>
            <h1 className="font-bold text-xl text-slate-600">
              {user.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )
                : "N/A"}
            </h1>
          </div>
          <div className="divider px-4 -mt-2"></div>
          <button className="px-4 py-2  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105 active:scale-95 font-bold w-[800px] mb-6 mt-4 ml-12 text-lg">
            <Link to={"/updateInformation"}> Update Your Information</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
