import Location from "./Location";
import SpanText from "./SpanText";
import { branches } from "../branches";
import Heading from "./Heading";

export default function LocationSection() {
  return (
    <div className="flex items-center justify-center flex-col cursor-default py-10">
      <div className="w-[90%] flex items-center justify-center p-4">
        <Heading title="Our Locations in " spanText="Surat" />
      </div>
      <div className="w-[90%] flex items-center justify-center">
        <div className="grid grid-cols-1 tablet-xs:grid-cols-2 laptop:grid-cols-5">
          {branches.map((branch) => (
            <Location key={branch.id} branch={branch} />
          ))}
        </div>
      </div>
    </div>
  );
}
