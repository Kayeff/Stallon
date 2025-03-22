import { NavLink } from "react-router-dom";
import Heading from "./Heading";
import Para from "./Para";
import hero from "../assets/hero.webp";

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 cursor-default laptop:w-[90%]">
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div className="w-full flex items-end justify-start flex-col gap-10">
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-col items-end">
              <Heading title={"Train"} spanText={"Hard."} />
              <Heading title={"Stay"} spanText={"Strong."} />
              <Heading title={"Be"} spanText={"Unstoppable."} />
            </div>
            <div className="w-full">
              <Para
                text="From strength training and functional workouts to cardio and group
              sessions, we have everything you need to transform your body and
              mind. Take the first step towards a healthier and stronger you!"
              />
            </div>
          </div>
          <div className="w-full font-medium flex items-center justify-center tablet:justify-end gap-2">
            <NavLink
              to="/branches"
              className="cursor-pointer bg-platinium text-black border border-platinium hover:bg-platinium/10 hover:text-platinium transition-all duration-300 p-3 px-4 text-xs flex items-center justify-center laptop:text-base"
            >
              See our Branches
            </NavLink>
            <NavLink
              to="/contact"
              className="border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/10 hover:text-strong-green transition-all duration-300 p-3 px-4 text-xs flex items-center justify-center laptop:text-base"
            >
              Join us today
            </NavLink>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            rel="preload"
            src={hero}
            className="w-full h-96 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
