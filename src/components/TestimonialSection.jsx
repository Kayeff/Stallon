import { useMemo } from "react";
import Heading from "./Heading";
import Testimonial from "./Testimonial";
import { testimonial_data } from "../testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
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
    <section className="w-full flex flex-col items-center justify-center gap-8 overflow-x-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-2 text-center">
        <Heading title={"Members"} spanText="Testimonials" />
        <Para
          text="At Stallon Gym, we’re proud to be a part of our members’ fitness
            journeys. Here’s what they have to say about their experience with
            us!"
        />
      </div>
      {/* Swiper Container */}
      <div className="w-full flex items-center justify-center p-2 overflow-x-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
          className="max-w-[80vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]"
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
}
