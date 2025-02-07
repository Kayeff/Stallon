export default function SmallSection({ title, children, className }) {
  return (
    <div className="cursor-default py-2 px-4 space-y-2">
      <h1 className="text-lg font-medium">{title}</h1>
      <div className={`${className}`}>{children}</div>
    </div>
  );
}
