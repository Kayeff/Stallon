import SpanText from "./SpanText";

export default function Classes({ item }) {
  return (
    <div className="border border-strong-green/20 flex items-end justify-start flex-col space-y-2">
      <img
        className="object-cover h-96 w-full tablet-xs:h-80 laptop:h-96 laptop-l:h-[30rem] laptop-4k:h-[40rem]"
        src={item.src}
        alt={item.title}
        loading="lazy"
      />
      <div className="w-full flex items-center justify-end p-2">
        <h1 className="uppercase font-semibold text-3xl font-clash-grotesk text-platinium text-end flex items-end justify-center flex-col laptop:text-4xl laptop-l:text-5xl laptop-4k:text-6xl">
          <SpanText text={item.spanText} />
          {item.title}
        </h1>
      </div>
    </div>
  );
}
