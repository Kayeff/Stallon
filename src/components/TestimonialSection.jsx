import React, { memo, useMemo } from "react";
import Heading from "./Heading";
import Testimonial from "./Testimonial";
import { testimonial_data } from "../testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Virtual } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

const TestimonialSection = memo(function TestimonialSection() {
  const slides = useMemo(
    () =>
      testimonial_data.map((item) => (
        <SwiperSlide key={item.id}>
          <Testimonial item={item} />
        </SwiperSlide>
      )),
    [testimonial_data]
  );

  return (
    <div className="w-[90%] flex flex-col items-center space-y-8 overflow-hidden">
      <div className="w-full flex flex-col items-center space-y-2">
        <Heading title={"Members"} spanText="Testimonials" />
        <p className="text-platinium font-clash-grotesk text-lg font-medium max-w-lg mx-auto text-center">
          At Stallon Gym, we’re proud to be a part of our members’ fitness
          journeys. Here’s what they have to say about their experience with us!
        </p>
      </div>
      <div className="w-[80%] p-2 flex items-center justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          effect={"cards"}
          direction="horizontal"
          modules={[EffectCards, Virtual]}
          className="mySwiper"
          virtual
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
});

export default TestimonialSection;
