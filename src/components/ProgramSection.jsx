import Classes from "./Classes";
import Heading from "./Heading";
import { classes } from "../classes";

export default function ClassesSection() {
  return (
    <div className="w-[90%] space-y-8 cursor-default">
      <div className="w-full flex items-center justify-center flex-col space-y-2">
        <Heading title="Our" spanText="Programs" />
        <p className="text-platinium font-clash-grotesk text-lg font-medium w-[50%] text-center">
          On over 5000 m² carpet area, we offer you a broad spectrum of fitness,
          and recovery classes. At Stallon Gym, you'll find everything a fit
          person could wish for. Whether it's for a first trial training or as
          an ambitious competitor, we have the right course for you.
        </p>
      </div>
      <div className="w-full p-4 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-[80%]">
          {classes.map((item) => {
            return <Classes key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
