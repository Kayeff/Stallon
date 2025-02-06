import SpanText from "./SpanText.jsx";

export default function Heading({ title, spanText }) {
  return (
    <h1 className="text-7xl font-semibold uppercase font-clash-grotesk text-platinium">
      {title} <SpanText text={spanText} />
    </h1>
  );
}
