import Amenities from "./Amenities";
import Heading from "./Heading";
import { amenities } from "../amenities";

export default function AmenitiesSection() {
  return (
    <div className="w-[90%] cursor-default space-y-10 flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Amenities" />
        <p className="text-platinium font-clash-grotesk text-lg font-medium w-[50%]">
          Enjoy clean locker rooms, steam rooms, a dedicated functional training
          area, and a protein bar to refuel post-workout. Train smarter, recover
          faster, and achieve your dream physique.
        </p>
      </div>
      <div className="w-[80%] grid grid-cols-3 grid-flow-dense gap-8">
        {amenities.map((item) => {
          return <Amenities item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
