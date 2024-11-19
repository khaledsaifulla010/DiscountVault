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
      

      <div className="card bg-base-100 w-[400px] h-[480px] border-2 shadow-md hover:shadow-lg transition-shadow duration-300 mt-12 rounded-lg">
        <figure>
          <img
            className="w-72 h-40 p-4 object-contain"
            src={brand_logo}
            alt={`${brand_name} logo`}
          />
        </figure>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold text-purple-800 mt-2">
              {brand_name}
            </h2>
            <h2 className="text-lg text-pink-600  font-bold rounded-lg mt-4 ">
              {category}
            </h2>
          </div>
          <div className="divider"></div>
          <p className="text-base text-gray-700 font-semibold">{description}</p>

          <div className="flex items-center justify-between mt-4">
            <Rating
              className="mt-4"
              style={{ maxWidth: 180 }}
              value={rating}
              readOnly
            />
            <p className="p-2 font-black text-lg mt-2 rounded-xl border border-green-100 bg-green-50 text-teal-700">
              {rating.toFixed(1)}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link
              to={`/brand/${id}`}
              className="p-3 rounded-lg font-bold text-lg bg-blue-100 text-blue-500 border border-blue-200 transition duration-500 ease-in-out transform hover:scale-105 active:scale-95"
            >
              View Coupons
            </Link>
            {isSaleOn && (
              <h1 className="font-bold text-red-600 text-lg animate-bounce">
                Sale is On!
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrandCard;
