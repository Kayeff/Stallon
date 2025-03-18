import SpanText from "./SpanText.jsx";

export default function Heading({ title, spanText }) {
  return (
    <h1 className="text-3xl font-semibold uppercase font-clash-grotesk text-platinium laptop:text-5xl">
      {title} <SpanText text={spanText} />
    </h1>
  );
}
