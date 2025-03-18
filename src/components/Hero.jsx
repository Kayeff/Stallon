import { NavLink } from "react-router-dom";
import hero from "../assets/hero.webp";
import Heading from "./Heading";
import Para from "./Para";
import LocationSection from "../components/LocationSection";

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 cursor-default">
      <div className="w-full grid grid-cols-1 gap-6">
        <div className="w-full flex items-end justify-start flex-col gap-4">
          <div className="flex flex-col items-end justify-start">
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
          </div>
          <div className="w-full font-medium grid grid-cols-2 gap-2">
            <NavLink
              to="/branches"
              className="cursor-pointer bg-platinium text-black border border-platinium hover:bg-platinium/10 hover:text-platinium transition-all duration-300 p-3 text-xs flex items-center justify-center"
            >
              See our Branches
            </NavLink>
            <NavLink
              to="/contact"
              className="border border-strong-green bg-strong-green text-black cursor-pointer hover:bg-strong-green/10 hover:text-strong-green transition-all duration-300 p-3 text-xs flex items-center justify-center"
            >
              Join us today
            </NavLink>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="hero-bg w-full h-72"></div>
        </div>
        <LocationSection />
      </div>
    </div>
  );
}
