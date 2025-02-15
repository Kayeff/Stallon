import Amenities from "./Amenities";
import Heading from "./Heading";
import { amenities } from "../amenities";

export default function AmenitiesSection() {
  return (
    <div className="w-[90%] cursor-default space-y-10 flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Amenities" />
        <p className="text-platinium font-clash-grotesk font-medium text-start w-[90%] tablet:w-[60%] text-xs mobile-m:text-sm tablet-xs:text-sm tablet:text-sm laptop:text-base laptop-l:text-lg laptop-4k:text-2xl laptop-4k:w-[50%]">
          Enjoy clean locker rooms, steam rooms, a dedicated functional training
          area, and a protein bar to refuel post-workout. Train smarter, recover
          faster, and achieve your dream physique.
        </p>
      </div>
      <div className="w-full mobile-l:w-[90%] flex items-center justify-center">
        <div className="w-full laptop:w-[80%] laptop-l:w-[70%] laptop-4k:w-[60%] grid grid-cols-1 tablet-xs:grid-cols-2 grid-flow-dense gap-4">
          {amenities.map((item) => {
            return <Amenities item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
