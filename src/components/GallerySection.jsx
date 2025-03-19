import Heading from "./Heading";
import Para from "./Para";
import { images } from "../gallery-data";
import Images from "./Images";

export default function GallerySection() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 cursor-default laptop:w-[90%]">
      <div className="w-full mobile-l:w-[80%] flex items-center justify-center flex-col gap-2 laptop:w-[60%]">
        <Heading title="Gym" spanText="Showcase" />
        <Para
          text="Whether you're a beginner or a seasoned athlete, we provide top-notch
          equipment, expert trainers, and a motivating environment to help you
          achieve your fitness goals."
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 gap-2 tablet:grid-cols-2 laptop:grid-cols-3 laptop:w-[70%]">
          {images.map((img) => (
            <Images key={`image-${img.id}`} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
}
