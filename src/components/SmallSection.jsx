export default function SmallSection({ title, children, className }) {
  return (
    <div className="cursor-default flex flex-col gap-2">
      <h1 className="text-lg font-semibold uppercase">{title}</h1>
      <div className={`${className}`}>{children}</div>
    </div>
  );
}
