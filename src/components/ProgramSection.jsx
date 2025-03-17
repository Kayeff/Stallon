import Classes from "./Classes";
import Heading from "./Heading";
import { classes } from "../classes";
import Para from "./Para";

export default function ProgramSection() {
  return (
    <div className="w-[90%] space-y-8 cursor-default flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Programs" />
        <div className="w-full tablet:w-[80%] laptop:w-[60%]">
          <Para text="On over 5000 m² carpet area, we offer you a broad spectrum of fitness, and recovery classes. At Stallon Gym, you'll find everything a fit person could wish for. Whether it's for a first trial training or as an ambitious competitor, we have the right course for you." />
        </div>
      </div>
      <div className="w-full mobile-l:w-[90%] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 tablet-xs:grid-cols-3 laptop:w-[80%] laptop-l:w-[80%] laptop-4k:w-[60%]">
          {classes.map((item) => {
            return <Classes key={`program-${item.id}`} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
