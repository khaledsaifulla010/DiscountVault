const AboutDev = () => {
  return (
    <div>
      <div className="card bg-base-100 max-w-[900px] mx-auto border-2 shadow-xl mt-12 mb-24">
        <div className="card-body">
          <h2 className="text-center font-bold text-3xl underline">
            About My Project
          </h2>
          <p className="text-justify font-semibold text-slate-600 text-xl mt-4">
            <span className="text-orange-500">DiscountVault:</span> A Coupon
            Collecting Application This project is a simple Coupon Collecting
            Application designed to help users easily find and use discount
            coupons for popular e-commerce shops in Bangladesh. There are a lot
            of ecommerce stores that provide various types of vouchers and
            coupon codes for discounts . Our application will collect all the
            coupons available on each store so that people can easily achieve
            discounts and save money . Users can sign up or log in using their
            email or Google account through Firebase Authentication. Once logged
            in, users can browse available coupons for different brands, see
            details like discount amount, expiry date, and product categories,
            and copy coupon codes with a single click.
          </p>
          <div className="card-actions justify-end">
            <button className="border bg-green-100 text-green-500 border-green-300 p-2 rounded-lg font-bold text-xl">
              Developer : Khaled Saifulla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
