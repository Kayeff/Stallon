import SpanText from "./SpanText";

export default function Classes({ item }) {
  return (
    <div className="w-full border border-strong-green/20 rounded-2xl grid grid-cols-3">
      <div className="w-full col-span-2 p-5">
        <h1 className="w-full text-5xl flex gap-2 uppercase tracking-tighter">
          <span>{item.id}. </span>
          <SpanText text={item.spanText} />
          {item.title}
        </h1>
      </div>
      <div className="w-full">
        <img
          src={item.src}
          alt={item.title}
          className="object-cover h-52 w-full rounded-r-2xl"
          loading="lazy"
          rel="preload"
        />
      </div>
    </div>
  );
}
