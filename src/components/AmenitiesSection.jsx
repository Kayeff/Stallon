import Amenities from "./Amenities";
import Heading from "./Heading";
import { amenities } from "../amenities";
import Para from "./Para";

export default function AmenitiesSection() {
  return (
    <div className="w-full cursor-default gap-4 flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col">
        <Heading title="Our" spanText="Amenities" />
        <Para
          text="Enjoy clean locker rooms, steam rooms, a dedicated functional training
          area, and a protein bar to refuel post-workout. Train smarter, recover
          faster, and achieve your dream physique."
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 gap-4 ">
          {amenities.map((item) => (
            <Amenities item={item} key={`amenities-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
