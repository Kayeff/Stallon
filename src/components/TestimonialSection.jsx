import { useMemo } from "react";
import Heading from "./Heading";
import Testimonial from "./Testimonial";
import { testimonial_data } from "../testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Para from "./Para";

export default function TestimonialSection() {
  const slides = useMemo(
    () =>
      testimonial_data.map((item) => (
        <SwiperSlide key={`testimonial-${item.id}`}>
          <Testimonial item={item} />
        </SwiperSlide>
      )),
    [testimonial_data]
  );

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 overflow-x-hidden laptop:w-[90%]">
      <div className="w-full mobile-l:w-[80%] flex flex-col items-center justify-center gap-2 text-center laptop:w-[60%]">
        <Heading title={"Members"} spanText="Testimonials" />
        <Para
          text="At Stallon Gym, we’re proud to be a part of our members’ fitness
            journeys. Here’s what they have to say about their experience with
            us!"
        />
      </div>
      <div className="w-full flex items-center justify-center p-2 overflow-x-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 2, spaceBetween: 10 },
            1440: { slidesPerView: 3, spaceBetween: 10 },
          }}
          className="custom-swiper max-w-[80vw] tablet:max-w-[70vw] laptop:max-w-[70vw] laptop-l:max-w-[60vw]"
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
}
