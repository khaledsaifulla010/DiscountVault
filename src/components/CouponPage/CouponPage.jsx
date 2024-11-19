import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CouponPage = () => {
  const allCoupons = useLoaderData();
  console.log(allCoupons);

  const { brand_name, brand_logo, rating } = allCoupons;

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

      <div className="card bg-base-100 w-96 shadow-xl mt-24">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponPage;
