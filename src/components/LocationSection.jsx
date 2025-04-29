import Location from "./Location";
import { branches } from "../branches";
import Heading from "./Heading";

export default function LocationSection() {
  return (
    <section className="w-full flex items-center justify-center cursor-default">
      <div className="w-[90%] flex items-center justify-center flex-col gap-4">
        <div className="w-full mobile-l:w-[80%] flex items-center justify-center text-center">
          <Heading title="Our Locations in" spanText="Surat" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[80%] grid grid-cols-5 border border-strong-green/20">
            {branches.map((branch) => (
              <Location key={`branch-${branch.id}`} branch={branch} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
