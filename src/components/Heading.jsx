import SpanText from "./SpanText.jsx";

export default function Heading({ title, spanText }) {
  return (
    <h1 className="max-mobile-l:text-2xl font-semibold uppercase font-clash-grotesk text-platinium text-3xl max-tablet:text-3xl laptop:text-4xl laptop-l:text-6xl max-laptop-l:text-4xl">
      {title} <SpanText text={spanText} />
    </h1>
  );
}
