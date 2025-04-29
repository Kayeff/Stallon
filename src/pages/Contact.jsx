import Heading from "../components/Heading";
import Form from "../components/Form";
import Para from "../components/Para";
import interior from "../assets/interior.webp";

export default function Contact() {
  return (
    <section className="w-full flex items-center justify-start cursor-default py-20 relative font-inter">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={interior}
          alt="hero"
          loading="lazy"
          rel="preload"
        />
      </div>
      <div className="w-full flex items-center justify-end z-10">
        <div className="w-1/2 rounded-l-4xl flex items-center justify-start flex-col gap-8 bg-black p-10">
          <div className="w-full flex items-center laptop:items-start justify-start flex-col gap-4">
            <Heading title="Send us a" spanText="Message" />
            <Para
              text="Have a question? Fill out the form below, and we'll get back to
              you as soon as possible!"
            />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
