import Location from "./Location";
import SpanText from "./SpanText";
import { branches } from "../branches";

export default function LocationSection() {
  return (
    <div className="flex items-center justify-center flex-col cursor-default py-10">
      <div className="w-[90%] flex items-center justify-center p-4">
        <h1 className="text-2xl text-platinium uppercase font-clash-grotesk font-medium text-center tablet-xs:text-start mobile-l:text-2xl laptop:text-4xl">
          Our Locations in <SpanText text="Surat" />
        </h1>
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
