import { useLoaderData } from "react-router-dom";
import AllBrandCard from "../AllBrandCard/AllBrandCard";

const AllBrands = () => {
  const allBrands = useLoaderData();
//   console.log(allBrands);

  return (
    <div>
      <h1>Brands.................. {allBrands.length} </h1>

      <div className="grid grid-cols-3 gap-y-6 mb-36">
        {allBrands.map((brand) => (
          <AllBrandCard key={brand.id} brand={brand}></AllBrandCard>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
