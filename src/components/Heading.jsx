import SpanText from "./SpanText.jsx";
import { twMerge } from "tailwind-merge";

export default function Heading({ title, spanText, col }) {
  return (
    <h1
      className={twMerge(
        "text-6xl font-bold uppercase tracking-tight flex gap-4 text-platinium",
        col && "flex-col gap-0"
      )}
    >
      <span>
        {title} <SpanText text={spanText} />
      </span>
    </h1>
  );
}
