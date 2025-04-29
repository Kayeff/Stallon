import about from "../assets/about.webp";
import Button from "./Button";
import Heading from "./Heading";
import Para from "./Para";

export default function AboutGym() {
  return (
    <section className="w-full h-[calc(100vh-96px)] flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src={about}
          alt="hero"
          loading="lazy"
          rel="preload"
        />
      </div>
      <div className="w-full flex items-center justify-end gap-6 z-10 p-10">
        <div className="w-[50%] flex flex-col gap-4 p-10 rounded-4xl">
          <div className="flex flex-col items-end text-end">
            <Heading
              title="Become part of Stallon, take a step towards"
              spanText="a better you."
              col
            />
          </div>
          <Para text="We believe that fitness is not just a hobby; it's a way of life. That’s why we focus on providing a comprehensive fitness experience that incorporates cutting-edge equipment, and world-class coaches." />
          <div className="w-full flex items-center justify-start gap-1">
            <Button
              text="Explore more"
              className="bg-platinium text-black border-platinium hover:bg-strong-green hover:text-black hover:border-strong-green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
