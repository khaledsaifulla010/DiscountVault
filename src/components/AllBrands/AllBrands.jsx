import { useLoaderData } from "react-router-dom";
import AllBrandCard from "../AllBrandCard/AllBrandCard";

const AllBrands = () => {
  const allBrands = useLoaderData();
  //   console.log(allBrands);

  return (
    <div>
      <div className="rounded-xl p-2 w-[1300px] h-[100px] mt-8 bg-base-200">
        <h1 className=" mt-4 text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
          Our Most Valued Brands
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-y-6 mb-36">
        {allBrands.map((brand) => (
          <AllBrandCard key={brand.id} brand={brand}></AllBrandCard>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
