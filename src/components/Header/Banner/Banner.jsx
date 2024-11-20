import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../../assets/slider/slider-1.jpeg";
import slider2 from "../../../assets/slider/slider-2.jpeg";
import slider3 from "../../../assets/slider/slider-3.jpeg";
import slider4 from "../../../assets/slider/slider-4.jpeg";

const Banner = () => {
  return (
    <div className="mt-12">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        className="rounded-xl"
      >
        <div>
          <img
            className="rounded-xl object-cover"
            src={slider1}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="rounded-xl object-cover"
            src={slider2}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="rounded-xl object-cover"
            src={slider3}
            alt="Slide 3"
          />
        </div>
        <div>
          <img
            className="rounded-xl object-cover"
            src={slider4}
            alt="Slide 4"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
