import Location from "./Location";
import { branches } from "../branches";
import Heading from "./Heading";

export default function LocationSection() {
  return (
    <section className="w-full flex items-center justify-center cursor-default p-10">
      <div className="w-[90%] flex items-center justify-center flex-col gap-4">
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="tracking-tight">We are</h1>
          <Heading title="located in" spanText="Surat!" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-[80%] grid grid-cols-5 border border-strong-green/20 rounded-full">
            {branches.map((branch) => (
              <Location key={`location-${branch.id}`} branch={branch} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
