import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

const ClientsReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className=" lg:w-full md:w-[768px] w-[640px]">
      <h1 className="lg:text-6xl text-5xl font-bold text-center bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Our Clients Reviews
      </h1>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-24 mb-24"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} review={review}>
            <div>
              <img
                className="lg:w-36 w-24 rounded-full lg:h-36 h-24 lg:ml-[620px] ml-[280px] border"
                src={review.image}
              />
              <h1 className="text-center font-bold text-3xl mt-4">
                {review.name}
              </h1>
              <Rating
                className="lg:ml-[610px] ml-[230px] mt-4"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="text-center mt-4 font-semibold text-xl p-x-4">
                {review.review_description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsReview;
