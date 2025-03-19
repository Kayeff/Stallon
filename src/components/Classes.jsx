import SpanText from "./SpanText";

export default function Classes({ item }) {
  return (
    <div className="border border-strong-green/20 flex items-end justify-start flex-col">
      <img
        src={item.src}
        alt={item.title}
        className="object-cover h-80 w-full will-change-transform"
      />
      <h1 className="w-full uppercase font-semibold text-2xl flex items-center justify-start gap-1 text-platinium p-2 laptop:px-4 laptop:text-3xl">
        <SpanText text={item.spanText} />
        {item.title}
      </h1>
    </div>
  );
}
