import Classes from "./Classes";
import Heading from "./Heading";
import { classes } from "../classes";
import Para from "./Para";

export default function ProgramSection() {
  return (
    <section className="w-full gap-8 cursor-default flex items-center justify-center">
      <div className="w-[70%] flex items-center justify-center flex-col gap-5">
        <div className="w-full flex items-center justify-center flex-col gap-2 text-center">
          <Heading title="Our" spanText="Programs" />
          <Para text="On over 5000 m² carpet area, we offer you a broad spectrum of fitness, and recovery classes. At Stallon Gym, you'll find everything a fit person could wish for. Whether it's for a first trial training or as an ambitious competitor, we have the right course for you." />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-3 gap-4">
            {classes.map((item) => (
              <Classes key={`program-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
