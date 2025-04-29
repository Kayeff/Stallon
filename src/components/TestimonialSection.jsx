import { useMemo } from "react";
import Heading from "./Heading";
import Testimonial from "./Testimonial";
import { testimonial_data } from "../testimonial";

export default function TestimonialSection() {
  const slides = useMemo(
    () =>
      testimonial_data.map((item) => (
        <Testimonial key={`testimonial-${item.id}`} item={item} />
      )),
    [testimonial_data]
  );

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 p-10">
      <div className="w-full flex flex-col items-center justify-center gap-2 text-center">
        <h1 className="tracking-tight">Our</h1>
        <Heading title="Members" spanText="Testimonials" />
      </div>
      <div className="w-[80%] grid grid-cols-3 gap-2">{slides}</div>
    </section>
  );
}
