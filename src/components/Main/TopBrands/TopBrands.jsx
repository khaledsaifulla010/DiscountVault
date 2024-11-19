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
      <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600">
        Our Top Brands
      </h1>

      <div className="mt-12">
        <Link to={'/brands'}>
          <Marquee pauseOnHover={true}>
            <img className="w-36 mr-12 mt-4" src={image1} />
            <img className="w-36 mr-12" src={image2} />
            <img className="w-36 mr-12" src={image3} />
            <img className="w-36 mr-12" src={image4} />
            <img className="w-24 rounded-xl h-16 mr-12" src={image5} />
            <img className="w-36 mr-12" src={image6} />
            <img className="w-36 mr-12" src={image7} />
            <img className="w-36 mr-12" src={image8} />
            <img className="w-36 mr-12" src={image9} />
            <img className="w-36 mr-12" src={image10} />
            <img className="w-36 mr-12" src={image11} />
          </Marquee>
        </Link>
      </div>
    </div>
  );
};

export default TopBrands;
