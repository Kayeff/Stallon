import Heading from "./Heading";
import Para from "./Para";
import { images } from "../gallery-data";
import Images from "./Images";

export default function GallerySection() {
  return (
    <section className="w-full gap-8 cursor-default flex items-center justify-center">
      <div className="w-[70%] flex items-center justify-center flex-col gap-5">
        <div className="w-full flex items-center justify-center flex-col gap-2 text-center">
          <Heading title="Gym" spanText="Showcase" />
          <Para
            text="Whether you're a beginner or a seasoned athlete, we provide top-notch
          equipment, expert trainers, and a motivating environment to help you
          achieve your fitness goals."
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-3 gap-4">
            {images.map((img) => (
              <Images key={`image-${img.id}`} img={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
