import { classes } from "../classes";
import SpanText from "./SpanText";

export default function Classes() {
  return (
    <div className="w-full p-4 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-[80%]">
        {classes.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-strong-green/20 flex items-end justify-start flex-col space-y-2"
            >
              <img
                className="object-cover h-96 w-full"
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <div className="w-full flex items-center justify-end p-2">
                <h1 className="uppercase font-semibold text-5xl font-clash-grotesk text-platinium text-end flex items-end justify-center flex-col">
                  <SpanText text={item.spanText} />
                  {item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
