import Classes from "./Classes";
import Heading from "./Heading";
import { classes } from "../classes";
import Para from "./Para";

export default function ProgramSection() {
  return (
    <section className="w-full gap-8 cursor-default flex items-center justify-center p-10">
      <div className="w-[70%] flex items-center justify-center flex-col gap-5">
        <div className="w-full flex items-center justify-center flex-col gap-2 text-center">
          <h1 className="tracking-tight">At Stallon</h1>
          <Heading
            title="We offer a comprehensive"
            spanText="fitness experience"
            col
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-1 gap-2">
            {classes.map((item) => (
              <Classes key={`program-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
