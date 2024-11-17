const SingleBrandCard = ({ singleBrand }) => {
  console.log(singleBrand);

  const { brand_name, brand_logo, coupons, category, isSaleOn } = singleBrand;

  return (
    <div>
      {isSaleOn && (
        <div className="card card-compact w-[400px] h-[250px]  border ">
          <figure>
            <img className="w-36 " src={brand_logo} />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-4xl font-bold ">{brand_name}</h2>
            <div className="flex items-center justify-around">
              <h2 className="text-xl text-pink-600 font-semibold  p-2 rounded-2xl mt-4 bg-slate-100">
                Total Coupons: {coupons.length}
              </h2>
              <h2 className="text-lg text-purple-600 font-semibold  p-2 rounded-2xl mt-4 bg-slate-100">
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
