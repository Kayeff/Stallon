import Gallery from "./Gallery";
import Heading from "./Heading";

export default function GallerySection() {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center space-y-8 cursor-default">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Gym" spanText="Showcase" />
        <p className="text-platinium font-clash-grotesk font-medium text-start w-[90%] tablet:w-[60%] text-xs mobile-m:text-sm tablet-xs:text-sm tablet:text-sm laptop:text-base laptop-l:text-lg laptop-4k:text-2xl laptop-4k:w-[50%]">
          Whether you're a beginner or a seasoned athlete, we provide top-notch
          equipment, expert trainers, and a motivating environment to help you
          achieve your fitness goals.
        </p>
      </div>
      <div className="w-full mobile-l:w-[90%] flex items-center justify-center">
        <Gallery />
      </div>
    </div>
  );
}
