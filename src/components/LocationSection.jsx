import Location from "./Location";
import { branches } from "../branches";
import Heading from "./Heading";

export default function LocationSection() {
  return (
    <div className="w-full flex items-center justify-center flex-col cursor-default gap-4 laptop:w-[90%]">
      <div className="w-full mobile-l:w-[80%] flex items-center justify-center text-center">
        <Heading title="Our Locations in " spanText="Surat" />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 tablet:grid-cols-5">
          {branches.map((branch) => (
            <Location key={`branch-${branch.id}`} branch={branch} />
          ))}
        </div>
      </div>
    </div>
  );
}
