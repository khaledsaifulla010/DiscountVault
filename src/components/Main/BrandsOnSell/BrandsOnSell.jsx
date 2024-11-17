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
    <div>
      <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-600">
        Brands on Sell
      </h1>
      <div className="grid grid-cols-3 mt-12 gap-y-12">
        {brandsOnSell.map((singleBrand) => (
          <SingleBrandCard
            singleBrand={singleBrand}
            key={singleBrand.id}
          ></SingleBrandCard>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
