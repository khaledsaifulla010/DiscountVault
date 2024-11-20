import Marquee from "react-fast-marquee";

import image1 from "../../../assets/brands-logo/amazon.png";
import image2 from "../../../assets/brands-logo/ebay.png";
import image3 from "../../../assets/brands-logo/walmart.png";
import image4 from "../../../assets/brands-logo/aliExpress.png";
import image5 from "../../../assets/brands-logo/esty.png";
import image6 from "../../../assets/brands-logo/best-buy.png";
import image7 from "../../../assets/brands-logo/zara.png";
import image8 from "../../../assets/brands-logo/nike.png";
import image9 from "../../../assets/brands-logo/Target.png";
import image10 from "../../../assets/brands-logo/H&M.png";
import image11 from "../../../assets/brands-logo/ikea.png";
import { Link } from "react-router-dom";

const TopBrands = () => {
  return (
    <div className="mt-20 mb-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
        Our Top Brands
      </h1>

      <div className="mt-12">
        <Link to={"/brands"}>
          <Marquee pauseOnHover={true} speed={50}>
            {[
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
              image8,
              image9,
              image10,
              image11,
            ].map((image, index) => (
              <img
                key={index}
                className={`w-24 sm:w-28 lg:w-36 h-auto rounded-xl mr-8`}
                src={image}
                alt={`Brand ${index + 1}`}
              />
            ))}
          </Marquee>
        </Link>
      </div>
    </div>
  );
};

export default TopBrands;
