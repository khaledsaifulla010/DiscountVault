import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "animate.css";
import { Link } from "react-router-dom";

const AllBrandCard = ({ brand }) => {
  // console.log(brand);

  const {
    id,
    brand_name,
    brand_logo,
    rating,
    description,
    category,
    isSaleOn,
  } = brand;

  return (
    <div>
      <div className="card bg-base-100 w-[400px] h-[480px] border-2 mt-12">
        <figure>
          <img className="w-72 h-40 p-4" src={brand_logo} />
        </figure>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-600 mt-2">
              {brand_name}
            </h2>
            <h2 className="text-lg text-pink-600 font-bold  p-2 rounded-lg mt-4 bg-slate-100">
              {category}
            </h2>
          </div>
          <div className="divider"></div>
          <p className=" text-xl text-justify   ">{description}</p>

          <div className="flex items-center justify-between">
            <Rating
              className="mt-4"
              style={{ maxWidth: 180 }}
              value={rating}
              readOnly
            />
            <p className="p-2 font-black text-lg mt-2 rounded-xl bg-slate-100">
              {rating}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link
              to={`/brand/${id}`}
              className="p-2  rounded-xl font-bold text-lg bg-slate-100 text-teal-700"
            >
              View Coupons
            </Link>
            {isSaleOn && (
              <h1 className="font-bold text-red-600 text-lg animate__animated animate__bounce">
                Sales is on
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrandCard;
