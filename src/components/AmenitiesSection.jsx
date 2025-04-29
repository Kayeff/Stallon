import Amenities from "./Amenities";
import Heading from "./Heading";
import { amenities } from "../amenities";
import Para from "./Para";

export default function AmenitiesSection() {
  return (
    <section className="w-full gap-8 cursor-default flex items-center justify-center">
      <div className="w-[70%] flex items-center justify-center flex-col gap-5">
        <div className="w-full flex items-center justify-center flex-col gap-2 text-center">
          <Heading title="Our" spanText="Amenities" />
          <Para
            text="Enjoy clean locker rooms, steam rooms, a dedicated functional training
          area, and a protein bar to refuel post-workout. Train smarter, recover
          faster, and achieve your dream physique."
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-3 gap-4">
            {amenities.map((item) => (
              <Amenities item={item} key={`amenities-${item.id}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
