const FAQ = () => {
  return (
    <div className="mt-48 mb-24">
      <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
        FAQ(Frequently Asked Questions)
      </h1>
      <div className="collapse collapse-plus bg-base-200 mt-16">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-2xl font-bold">
          1. How do I use a discount code on your website?
        </div>
        <div className="collapse-content">
          <p className="font-semibold text-lg">
            To use a discount code, simply browse our list of available offers
            and click on the one you wish to use. Copy the code provided and
            apply it during checkout at your chosen retailer's website. Be sure
            to enter the code in the designated box before completing your
            purchase to receive your discount.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-8">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          2. Are the discount codes on your site always valid?
        </div>
        <div className="collapse-content">
          <p className="font-semibold text-lg">
            We strive to provide up-to-date and active discount codes. However,
            offers may expire or become invalid over time. We recommend checking
            the expiration date of each code and testing it during your checkout
            to ensure it's still valid. If a code doesn't work, feel free to
            check back later for new offers!
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-8">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-bold">
          3. Can I share a discount code with my friends?
        </div>
        <div className="collapse-content">
          <p className="font-semibold text-lg">
            Absolutely! Our discount codes are meant to be shared. Feel free to
            share the deals with your friends and family so they can enjoy the
            savings too. Just make sure the code is still valid before sharing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
