import Gallery from "./Gallery";
import Heading from "./Heading";
import Para from "./Para";

export default function GallerySection() {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center space-y-8 cursor-default">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Gym" spanText="Showcase" />
        <div className="w-full tablet:w-[80%] laptop:w-[60%]">
          <Para
            text="Whether you're a beginner or a seasoned athlete, we provide top-notch
          equipment, expert trainers, and a motivating environment to help you
          achieve your fitness goals."
          />
        </div>
      </div>
      <div className="w-full mobile-l:w-[90%] flex items-center justify-center">
        <Gallery />
      </div>
    </div>
  );
}
