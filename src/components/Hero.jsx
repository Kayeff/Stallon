import Heading from "./Heading";
import Para from "./Para";
import hero from "../assets/hero.webp";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full h-[calc(100vh-96px)] flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src={hero}
          alt="hero"
          loading="lazy"
          rel="preload"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-6 z-10 p-10">
        <div className="w-[50%] flex flex-col gap-4 p-10 rounded-4xl">
          <div className="flex flex-col items-end">
            <Heading title={"Train"} spanText={"Hard."} />
            <Heading title={"Stay"} spanText={"Strong."} />
            <Heading title={"Be"} spanText={"Unstoppable."} />
          </div>
          <Para
            text="Welcome to Stallon Gym. From strength training and functional workouts to cardio and group
              sessions, we have everything you need to transform your body and
              mind. Take the first step towards a healthier and stronger you. Join us today!"
          />
          <div className="w-full flex items-center justify-start gap-1">
            <Button
              text="Begin your journey"
              className="bg-platinium text-black border-platinium hover:bg-strong-green hover:text-black hover:border-strong-green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
