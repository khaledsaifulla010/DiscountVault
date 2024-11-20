import { useEffect } from "react";
import { useState } from "react";
import SingleBrandCard from "../SingleBrandCard/SingleBrandCard";

const BrandsOnSell = () => {
  const [brandsOnSell, setBrandsOnSell] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrandsOnSell(data));
  }, []);

  return (
    <div className="mt-12 lg:w-full md:w-[768px] w-[640px]">
      <h1 className="text-5xl lg:text-6xl font-bold text-center bg-clip-text mt-36 text-transparent bg-gradient-to-r from-purple-500 to-red-600">
        Brands on Sell
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-12 ">
        {brandsOnSell.map((singleBrand) => (
          <SingleBrandCard singleBrand={singleBrand} key={singleBrand.id} />
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
