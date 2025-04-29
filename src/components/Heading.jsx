import SpanText from "./SpanText.jsx";

export default function Heading({ title, spanText }) {
  return (
    <h1 className="text-6xl font-bold uppercase tracking-tight flex gap-4">
      <span>{title}</span>{" "}
      <span>
        <SpanText text={spanText} />
      </span>
    </h1>
  );
}
