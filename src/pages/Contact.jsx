import Heading from "../components/Heading";
import Form from "../components/Form";
import Para from "../components/Para";
import interior from "../assets/interior.webp";

export default function Contact() {
  return (
    <section className="w-full flex items-center justify-center cursor-default py-20 relative font-inter">
      <div className="w-[90%] grid grid-cols-2 z-10">
        <div className="w-full flex items-center justify-center flex-col gap-8 p-10">
          <div className="w-full flex items-center laptop:items-start justify-start flex-col gap-4">
            <Heading title="Send us a" spanText="Message" />
            <Para
              text="Have a question? Fill out the form below, and we'll get back to
              you as soon as possible!"
            />
          </div>
          <Form />
        </div>
        <div className="w-full items-center justify-center">
          <img
            className="w-full h-full object-cover opacity-70"
            src={interior}
            alt="hero"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
