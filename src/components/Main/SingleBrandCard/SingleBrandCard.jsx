const SingleBrandCard = ({ singleBrand }) => {
  console.log(singleBrand);

  const { brand_name, brand_logo, coupons, category, isSaleOn } = singleBrand;

  return (
    <div className="lg:w-full md:w-[768px] w-[640px]">
      {isSaleOn && (
        <div className="card card-compact lg:w-[400px] h-[250px] border-2 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <figure className="flex justify-center ">
            <img
              className="w-36 object-contain"
              src={brand_logo}
              alt={`${brand_name} logo`}
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-600">
              {brand_name}
            </h2>
            <div className="flex items-center justify-around mt-4">
              <h2 className="text-lg text-pink-600 font-semibold p-2 rounded-lg bg-pink-100 border border-pink-200 shadow-sm">
                Total Coupons: {coupons.length}
              </h2>
              <h2 className="text-lg text-purple-600 font-semibold p-2 rounded-lg bg-purple-100 border border-purple-200 shadow-sm">
                {category}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBrandCard;
