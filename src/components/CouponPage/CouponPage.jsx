import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CouponPage = () => {
  const allCoupons = useLoaderData();
  console.log(allCoupons);

  const { brand_name, brand_logo, rating, coupons, shopLink } = allCoupons;

  return (
    <div>
      <div className="flex items-center justify-between mt-12">
        <img className="w-48 mt-4" src={brand_logo} />
        <h1 className="text-5xl font-bold">{brand_name}</h1>
        <div className="flex items-center gap-2">
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
      </div>

      <div className="grid grid-cols-3 gap-6 p-6 mb-36 mt-12">
        {coupons.map((coupon, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-xl font-bold mb-4">
              <span className="text-gray-700">Coupon Code:</span>{" "}
              <span className="text-blue-500">{coupon.couponCode}</span>
            </h2>
            <p className="text-gray-600 text-base mb-4 font-semibold">
              {coupon.description}
            </p>
            <p className="text-base text-gray-700 mb-4 font-semibold">
              <strong className="text-orange-500 ">Condition:</strong>
              {coupon.condition}
            </p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-red-500 font-medium border border-red-300 p-2 rounded-xl bg-red-100">
                <strong>Expires:</strong> {coupon.expiryDate}
              </p>
              <p className="text-sm text-green-500 font-medium border border-green-300 p-2 rounded-xl bg-green-100">
                <strong>Type:</strong> {coupon.couponType}
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 mt-12">
              <button className="px-4 py-2  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 font-bold w-full">
                Copy Code
              </button>
              <a
                href={shopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2  bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-bold w-full text-center"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponPage;
