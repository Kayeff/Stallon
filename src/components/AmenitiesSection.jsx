import Amenities from "./Amenities";
import Heading from "./Heading";

export default function AmenitiesSection() {
  return (
    <div className="w-[90%] min-h-screen cursor-default space-y-10">
      <div className="w-full text-center flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Amenities" />
        <p className="text-platinium font-clash-grotesk text-lg font-medium w-[50%]">
          Enjoy clean locker rooms, steam rooms, a dedicated functional training
          area, and a protein bar to refuel post-workout. Train smarter, recover
          faster, and achieve your dream physique.
        </p>
      </div>
      <Amenities />
    </div>
  );
}
