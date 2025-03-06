import { NavLink } from "react-router-dom";
import hero from "../assets/hero.webp";
import Heading from "./Heading";
import Para from "./Para";

export default function Hero() {
  return (
    <div className="w-full laptop:w-[90%] grid tablet-xs:grid-cols-2 font-clash-grotesk px-6 gap-8 cursor-default">
      <div className="flex items-start justify-start flex-col space-y-4">
        <div className="flex items-end justify-start flex-col">
          <div className="flex items-end justify-start flex-col">
            <Heading title="Train" spanText="Hard." />
            <Heading title="Stay" spanText="Strong." />
            <Heading title="Be" spanText="Unstoppable." />
          </div>
          <div className="w-full flex items-center justify-end">
            <Para
              text="From strength training and functional workouts to cardio and group
              sessions, we have everything you need to transform your body and
              mind. Take the first step towards a healthier and stronger you!"
            />
          </div>
        </div>
        <div className="space-x-3 font-medium w-full flex items-center justify-center tablet:justify-start laptop:justify-end">
          <NavLink
            to="/branches"
            className="cursor-pointer bg-platinium text-black border border-platinium hover:bg-platinium/15 hover:text-platinium transition-all duration-300 px-3 py-2 text-xs mobile-l:px-4 mobile-l:py-3 tablet:text-sm laptop:text-sm laptop:px-4 laptop:py-3 laptop-l:px-5 laptop-l:py-4 laptop-l:text-base"
          >
            See our Branches
          </NavLink>
          <NavLink
            to="/contact"
            className="border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/15 hover:text-strong-green transition-all duration-300 px-3 py-2 text-xs mobile-l:py-3 mobile-l:px-4 tablet:text-sm laptop:text-sm laptop:px-4 laptop:py-3 laptop-l:px-5 laptop-l:py-4 laptop-l:text-base"
          >
            Join us today
          </NavLink>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <img
          className="h-full w-full max-w-full object-cover laptop:h-96 laptop-4k:h-[30rem]"
          src={hero}
          alt="hero_image"
          loading="lazy"
        />
      </div>
    </div>
  );
}
