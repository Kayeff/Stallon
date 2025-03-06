import SpanText from "./SpanText.jsx";

export default function Heading({ title, spanText }) {
  return (
    <h1 className="text-4xl font-semibold uppercase font-clash-grotesk text-platinium max-tablet:text-3xl laptop:text-4xl laptop-l:text-6xl max-laptop-l:text-4xl text-center">
      {title} <SpanText text={spanText} />
    </h1>
  );
}
