import Gallery from "./Gallery";
import Heading from "./Heading";

export default function GallerySection() {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center space-y-8 cursor-default">
      <div className="w-full flex items-start justify-center flex-col space-y-2">
        <Heading title="Gym" spanText="Showcase" />
        <p className="text-platinium font-clash-grotesk text-lg font-medium w-[50%]">
          Whether you're a beginner or a seasoned athlete, we provide top-notch
          equipment, expert trainers, and a motivating environment to help you
          achieve your fitness goals.
        </p>
      </div>
      <Gallery />
    </div>
  );
}
