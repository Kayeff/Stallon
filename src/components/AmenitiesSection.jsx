import Amenities from "./Amenities";
import Heading from "./Heading";
import { amenities } from "../amenities";
import Para from "./Para";

export default function AmenitiesSection() {
  return (
    <div className="w-full cursor-default gap-8 flex items-center justify-center flex-col laptop:w-[90%]">
      <div className="w-full mobile-l:w-[80%] flex items-center justify-center flex-col laptop:w-[60%]">
        <Heading title="Our" spanText="Amenities" />
        <Para
          text="Enjoy clean locker rooms, steam rooms, a dedicated functional training
          area, and a protein bar to refuel post-workout. Train smarter, recover
          faster, and achieve your dream physique."
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 gap-2 tablet:grid-cols-2 laptop:grid-cols-3 laptop:w-[70%]">
          {amenities.map((item) => (
            <Amenities item={item} key={`amenities-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
