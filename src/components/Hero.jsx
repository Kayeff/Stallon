import Heading from "./Heading";
import Para from "./Para";
import hero from "../assets/hero.webp";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[90%] p-5 grid grid-cols-2 gap-6">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col items-end">
            <Heading title={"Train"} spanText={"Hard."} />
            <Heading title={"Stay"} spanText={"Strong."} />
            <Heading title={"Be"} spanText={"Unstoppable."} />
          </div>
          <Para
            text="From strength training and functional workouts to cardio and group
              sessions, we have everything you need to transform your body and
              mind. Take the first step towards a healthier and stronger you!"
          />
          <div className="w-full flex items-center justify-end gap-1">
            <Button
              text="Begin your journey"
              className="bg-platinium text-black border-platinium hover:bg-strong-green hover:text-black hover:border-strong-green rounded-full"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src={hero}
            rel="preload"
            loading="lazy"
            className="w-full h-96 object-cover"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}
