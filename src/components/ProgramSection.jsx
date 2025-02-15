import Classes from "./Classes";
import Heading from "./Heading";
import { classes } from "../classes";

export default function ClassesSection() {
  return (
    <div className="w-[90%] space-y-8 cursor-default flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Programs" />
        <p className="text-platinium font-clash-grotesk font-medium text-start w-[90%] tablet:w-[60%] text-xs mobile-m:text-sm tablet-xs:text-sm tablet:text-sm laptop:text-base laptop-l:text-lg laptop-4k:text-2xl laptop-4k:w-[50%]">
          On over 5000 m² carpet area, we offer you a broad spectrum of fitness,
          and recovery classes. At Stallon Gym, you'll find everything a fit
          person could wish for. Whether it's for a first trial training or as
          an ambitious competitor, we have the right course for you.
        </p>
      </div>
      <div className="w-full mobile-l:w-[90%] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 tablet-xs:grid-cols-2 laptop:w-[80%] laptop-l:w-[70%] laptop-4k:w-[60%]">
          {classes.map((item) => {
            return <Classes key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
