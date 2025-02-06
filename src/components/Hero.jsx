import hero from "../assets/hero.webp";
import Heading from "./Heading";

export default function Hero() {
  return (
    <div className="w-[90%] grid grid-cols-2 gap-10 font-clash-grotesk">
      <div className="flex items-end justify-start flex-col space-y-4">
        <div className="flex items-end justify-start flex-col cursor-default">
          <Heading title="Train" spanText="Hard." />
          <Heading title="Stay" spanText="Strong." />
          <Heading title="Be" spanText="Unstoppable." />
          <div className="w-full">
            <p className="font-medium text-lg text-platinium">
              From strength training and functional workouts to cardio and group
              sessions, we have everything you need to transform your body and
              mind. Take the first step towards a healthier and stronger you!
            </p>
          </div>
        </div>
        <div className="space-x-4 font-medium">
          <button className="px-6 py-3 cursor-pointer bg-platinium text-black border border-platinium hover:bg-platinium/15 hover:text-platinium transition-all duration-300">
            Explore more
          </button>
          <button className="px-6 py-3 border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-platinium transition-all duration-300">
            Join us today
          </button>
        </div>
      </div>
      <div className="h-full flex items-start justify-start">
        <img src={hero} alt="hero_image" loading="lazy" />
      </div>
    </div>
  );
}
