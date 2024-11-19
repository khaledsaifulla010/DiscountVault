import updatePage from "../../assets/authImages/updatePage.jpg";

const UpdateInformation = () => {
  return (
    <div className="flex items-center justify-center mb-36 mt-12">
      <div>
        <img className="w-[600px]" src={updatePage} />
      </div>

      <div className="card bg-base-100 border w-[600px] shadow-lg">
        <form className="card-body">
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

          <div className="form-control mt-6">
            <button className="border p-2 w-full rounded-xl text-teal-500 bg-teal-100 border-teal-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInformation;
