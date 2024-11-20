import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../../assets/slider/slider-1.jpeg";
import slider2 from "../../../assets/slider/slider-2.jpeg";
import slider3 from "../../../assets/slider/slider-3.jpeg";
import slider4 from "../../../assets/slider/slider-4.jpeg";

const Banner = () => {
  return (
    <div className="mt-12">
      <Carousel className=" lg:w-full md:w-[768px] w-[640px]">
        <img
          className="rounded-xl w-full "
          src={slider1}
        />
        <img
          className="rounded-xl w-full"
          src={slider2}
        />
        <img
          className="rounded-xl w-full"
          src={slider3}
        />
        <img
          className="rounded-xl w-full"
          src={slider4}
        />
      </Carousel>
    </div>
  );
};

export default Banner;
