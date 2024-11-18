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
    <div>
      <h1 className="text-6xl font-bold text-center bg-clip-text mt-24 text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
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
                className="w-36 rounded-full h-36 ml-[620px] border"
                src={review.image}
              />
              <h1 className="text-center font-bold text-3xl mt-4">
                {review.name}
              </h1>
              <Rating
                className="ml-[610px] mt-4"
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
